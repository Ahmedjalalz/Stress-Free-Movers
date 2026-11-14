import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const baseDir = process.cwd();
const logoPath = path.join(baseDir, 'public', 'images', 'logo.png');
const logoBase64 = fs.readFileSync(logoPath).toString('base64');

// HTML that will load the image into a canvas, detect the icon bounding box, and draw it centered onto a square 512x512 canvas
const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 512px; height: 512px; overflow: hidden; background: transparent; }
    canvas { display: block; width: 512px; height: 512px; }
    #logo { display: none; }
  </style>
</head>
<body>
  <img id="logo" src="data:image/png;base64,${logoBase64}" />
  <canvas id="c" width="512" height="512"></canvas>
  <script>
    const img = document.getElementById('logo');
    img.onload = () => {
      // 1. Draw original on temp canvas
      const tempC = document.createElement('canvas');
      tempC.width = img.naturalWidth;
      tempC.height = img.naturalHeight;
      const tctx = tempC.getContext('2d');
      tctx.drawImage(img, 0, 0);

      const w = img.naturalWidth;
      const h = img.naturalHeight;
      const imgData = tctx.getImageData(0, 0, w, h);
      const data = imgData.data;

      // Find non-transparent bounds of the leftmost icon
      let colHasPixel = new Array(w).fill(false);

      for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
          const alpha = data[(y * w + x) * 4 + 3];
          if (alpha > 10) {
            colHasPixel[x] = true;
          }
        }
      }

      // Find first non-empty col
      let startX = 0;
      while (startX < w && !colHasPixel[startX]) startX++;

      // Find end of icon: look for gap of consecutive empty columns after icon
      let iconEndX = startX;
      let gapCount = 0;
      for (let x = startX + 100; x < w; x++) {
        if (!colHasPixel[x]) {
          gapCount++;
          if (gapCount > 10) { // found gap separating icon from text
            iconEndX = x - gapCount;
            break;
          }
        } else {
          gapCount = 0;
        }
      }

      let minX = w, maxX = 0, minY = h, maxY = 0;
      // Now find min/max Y for the icon region [startX, iconEndX]
      for (let x = startX; x <= iconEndX; x++) {
        for (let y = 0; y < h; y++) {
          const alpha = data[(y * w + x) * 4 + 3];
          if (alpha > 10) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }
      }

      const iconW = maxX - minX;
      const iconH = maxY - minY;
      const size = Math.max(iconW, iconH);
      
      const outSize = 512;
      const padding = 24; // clean padding
      const drawArea = outSize - padding * 2;
      const scale = drawArea / size;

      const destW = iconW * scale;
      const destH = iconH * scale;
      const destX = padding + (drawArea - destW) / 2;
      const destY = padding + (drawArea - destH) / 2;

      const c = document.getElementById('c');
      const ctx = c.getContext('2d');
      ctx.clearRect(0, 0, outSize, outSize);
      ctx.drawImage(img, minX, minY, iconW, iconH, destX, destY, destW, destH);
      document.title = 'READY';
    };
  </script>
</body>
</html>`;

const htmlPath = path.join(baseDir, 'scratch', 'crop-icon.html');
fs.writeFileSync(htmlPath, htmlContent, 'utf-8');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');

const icon512Path = path.join(baseDir, 'public', 'icon-512.png');
const appIconPath = path.join(baseDir, 'app', 'icon.png');
const appAppleIconPath = path.join(baseDir, 'app', 'apple-icon.png');
const publicFaviconPng = path.join(baseDir, 'public', 'favicon.png');
const publicAppleTouchIcon = path.join(baseDir, 'public', 'apple-touch-icon.png');

const cmd = `"${chromePath}" --headless=new --screenshot="${icon512Path}" --window-size=512,512 --default-background-color=00000000 --hide-scrollbars --virtual-time-budget=2000 "${fileUrl}"`;
console.log('Extracting icon via Chrome...');
execSync(cmd, { stdio: 'inherit' });

if (fs.existsSync(icon512Path)) {
  console.log('Extracted 512x512 icon:', fs.statSync(icon512Path).size, 'bytes');
  fs.copyFileSync(icon512Path, appIconPath);
  fs.copyFileSync(icon512Path, appAppleIconPath);
  fs.copyFileSync(icon512Path, publicFaviconPng);
  fs.copyFileSync(icon512Path, publicAppleTouchIcon);
  console.log('Copied icon to app/icon.png, app/apple-icon.png, public/favicon.png, and public/apple-touch-icon.png');
}
