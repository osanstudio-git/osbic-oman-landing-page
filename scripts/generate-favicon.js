import fs from 'fs';

const imgBuffer = fs.readFileSync('public/Artboard 1@3x-1.png');
const base64 = imgBuffer.toString('base64');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <clipPath id="rounded-clip">
      <rect x="0" y="0" width="64" height="64" rx="14" ry="14" />
    </clipPath>
  </defs>
  <!-- Background subtle shadow/border if transparent -->
  <rect x="0" y="0" width="64" height="64" rx="14" ry="14" fill="#ffffff" />
  <g clip-path="url(#rounded-clip)">
    <image href="data:image/png;base64,${base64}" x="0" y="0" width="64" height="64" preserveAspectRatio="xMidYMid slice" />
  </g>
</svg>`;

fs.writeFileSync('public/favicon.svg', svg);
console.log('Successfully created public/favicon.svg with rounded corners');
