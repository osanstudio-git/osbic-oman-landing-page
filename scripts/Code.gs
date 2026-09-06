/**
 * OSBIC LEAD INGESTION & AUTO-ASSIGNMENT SCRIPT (UPDATED COLUMN MAPPING)
 * 
 * Instructions:
 * 1. Open your Google Sheet: "OSBIC LEADS FOLLOW UP CRM"
 * 2. Click Extensions > Apps Script
 * 3. Replace all code with this updated script
 * 4. Click Save (Ctrl + S)
 * 5. Click Deploy > Manage deployments > Edit (pencil icon) > Version: New version > Deploy
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("WEBSITE LEADS") || ss.getSheets()[0];

    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var fullName = data.fullName || data.name || data.clientName || "";
    var email = data.email || data.workEmail || "";
    var phone = data.phone || data.phoneLocal || data.phoneNo || "";
    var serviceType = data.serviceType || ""; 
    var source = data.source || "OSBIC Website Lead";
    var notes = data.notes || data.referrer || "";

    var digitsOnly = phone.toString().replace(/[^\d]/g, '');
    if (digitsOnly.length === 8) {
      digitsOnly = "968" + digitsOnly;
    }
    
    // Official working endpoint (replaces wa.me to prevent DNS NXDOMAIN errors)
    var whatsappUrl = digitsOnly ? "https://api.whatsapp.com/send?phone=" + digitsOnly : "";
    var formattedPhone = phone ? "'" + phone.toString().replace(/^'+/, '') : "";

    // Dynamic Header Reading from Row 1
    var lastCol = sheet.getLastColumn() || 9;
    var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
    var newRow = new Array(headers.length).fill("");

    for (var i = 0; i < headers.length; i++) {
      var h = headers[i].toString().trim().toUpperCase();

      if (h === "DATE" || h === "TIMESTAMP" || h === "TIME") {
        newRow[i] = new Date();
      } else if (h === "PHONE NO" || h === "PHONE" || h === "PHONE NUMBER" || h === "CONTACT") {
        newRow[i] = formattedPhone;
      } else if (h === "CLIENT NAME" || h === "NAME" || h === "FULL NAME") {
        newRow[i] = fullName;
      } else if (h === "EMAIL" || h === "WORK EMAIL" || h === "EMAIL ADDRESS") {
        newRow[i] = email;
      } else if (h === "SERVICE REQUIRED" || h === "SERVICE") {
        newRow[i] = serviceType; // Clean & blank
      } else if (h === "CALL STATUS") {
        newRow[i] = "Not called";
      } else if (h === "LEADS STATUS" || h === "LEAD STATUS" || h === "STATUS") {
        newRow[i] = "New Lead";
      } else if (h === "ASSIGN TO" || h === "ASSIGNED TO" || h === "ADVISOR") {
        newRow[i] = "";
      } else if (h.indexOf("WHATSAPP") !== -1) {
        newRow[i] = whatsappUrl;
      } else if (h === "SOURCE" || h === "LEAD SOURCE") {
        newRow[i] = source;
      } else if (h === "NOTE" || h === "NOTES") {
        newRow[i] = ""; // Keep blank
      } else if (h === "WEBSITE LEAD" || h === "WEBSITE LEAD (YES/NO)") {
        newRow[i] = "Yes";
      }
    }

    sheet.appendRow(newRow);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Lead recorded successfully"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

/**
 * Real-Time Auto-Assign to Employee Tabs (NADIR, ANSAR, SHAFEEK)
 * Dynamically maps headers from source sheet to advisor target sheet
 */
function onEdit(e) {
  if (!e || !e.range) return;

  var range = e.range;
  var sheet = range.getSheet();
  var row = range.getRow();
  var col = range.getColumn();

  if (row <= 1) return; // Ignore header row edits

  // Get source sheet headers to find ASSIGN TO column dynamically
  var lastCol = sheet.getLastColumn();
  var sourceHeaders = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  
  var assignToCol = -1;
  for (var h = 0; h < sourceHeaders.length; h++) {
    var head = sourceHeaders[h].toString().trim().toUpperCase();
    if (head === "ASSIGN TO" || head === "ASSIGNED TO" || head === "ADVISOR") {
      assignToCol = h + 1;
      break;
    }
  }

  // Only proceed if the edited cell was in the ASSIGN TO column
  if (col !== assignToCol || assignToCol === -1) return;

  var assignedAdvisor = range.getValue().toString().trim();
  if (!assignedAdvisor) return;

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var targetSheet = ss.getSheetByName(assignedAdvisor);
  if (!targetSheet) return;

  // Map row values by column header
  var rowValues = sheet.getRange(row, 1, 1, lastCol).getValues()[0];
  var leadMap = {};
  for (var s = 0; s < sourceHeaders.length; s++) {
    var sHeader = sourceHeaders[s].toString().trim().toUpperCase();
    leadMap[sHeader] = rowValues[s];
  }

  var dateVal = leadMap["DATE"] || leadMap["TIMESTAMP"] || new Date();
  var phoneVal = leadMap["PHONE NO"] || leadMap["PHONE"] || leadMap["PHONE NUMBER"] || leadMap["CONTACT"] || "";
  var nameVal = leadMap["CLIENT NAME"] || leadMap["NAME"] || leadMap["FULL NAME"] || "";
  var emailVal = leadMap["EMAIL"] || leadMap["WORK EMAIL"] || "";
  var serviceVal = leadMap["SERVICE REQUIRED"] || leadMap["SERVICE"] || "";
  var callStatusVal = leadMap["CALL STATUS"] || "Not called";
  var leadStatusVal = leadMap["LEADS STATUS"] || leadMap["LEAD STATUS"] || leadMap["STATUS"] || "New Lead";
  var whatsappVal = leadMap["WHATSAPP LINK"] || leadMap["WHATSAPP REDIRECTION"] || leadMap["WHATSAPP"] || "";

  var digitsOnly = phoneVal.toString().replace(/[^\d]/g, '');
  if (digitsOnly.length === 8) {
    digitsOnly = "968" + digitsOnly;
  }
  var workingWhatsappLink = digitsOnly ? "https://api.whatsapp.com/send?phone=" + digitsOnly : whatsappVal;
  var cleanPhoneDisplay = phoneVal ? "'" + phoneVal.toString().replace(/^'+/, '') : "";

  // DYNAMIC HEADER MATCHING FOR TARGET ADVISOR SHEET
  var targetHeaders = targetSheet.getRange(1, 1, 1, targetSheet.getLastColumn()).getValues()[0];
  var newRow = new Array(targetHeaders.length).fill("");

  for (var i = 0; i < targetHeaders.length; i++) {
    var header = targetHeaders[i].toString().trim().toUpperCase();

    if (header === "DATE" || header === "TIMESTAMP") {
      newRow[i] = dateVal;
    } else if (header === "PHONE NO" || header === "PHONE" || header === "PHONE NUMBER" || header === "CONTACT") {
      newRow[i] = cleanPhoneDisplay;
    } else if (header === "CLIENT NAME" || header === "NAME" || header === "FULL NAME") {
      newRow[i] = nameVal;
    } else if (header === "EMAIL" || header === "WORK EMAIL" || header === "EMAIL ADDRESS") {
      newRow[i] = emailVal; // Put clean email in EMAIL column
    } else if (header.indexOf("WHATSAPP") !== -1) {
      newRow[i] = workingWhatsappLink; // Put https://api.whatsapp.com link in WHATSAPP REDIRECTION column
    } else if (header === "SERVICE REQUIRED" || header === "SERVICE") {
      newRow[i] = serviceVal; // Leave blank for advisor
    } else if (header === "WEBSITE LEAD" || header === "WEBSITE LEAD (YES/NO)") {
      newRow[i] = "Yes";
    } else if (header === "CALL STATUS") {
      newRow[i] = callStatusVal; // "Not called"
    } else if (header === "LEADS STATUS" || header === "STATUS") {
      newRow[i] = leadStatusVal; // "New Lead"
    } else if (header === "NOTE" || header === "NOTES" || header === "SECOND FOLLOW UP") {
      newRow[i] = ""; // Keep blank so advisor can write custom notes
    }
  }

  // Append lead to advisor tab
  targetSheet.appendRow(newRow);

  // Visual confirmation highlight
  sheet.getRange(row, col).setBackground("#D1FAE5");
}
