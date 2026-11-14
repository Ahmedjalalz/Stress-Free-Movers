import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const baseDir = process.cwd();
const publicImagesDir = path.join(baseDir, 'public', 'images');

// Read logo-footer.png as base64
const logoPath = path.join(publicImagesDir, 'logo-footer.png');
const logoBase64 = fs.readFileSync(logoPath).toString('base64');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      width: 1080px;
      height: 1350px;
      margin: 0;
      overflow: hidden;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: radial-gradient(circle at 50% 44%, #142742 0%, #0A1627 45%, #040912 100%);
      color: #FFFFFF;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 80px 60px 70px;
      text-align: center;
    }

    /* Ambient luxury glow effects */
    .glow-center {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 900px;
      height: 900px;
      background: radial-gradient(circle, rgba(199, 165, 103, 0.16) 0%, rgba(35, 58, 98, 0.28) 45%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }

    .glow-top {
      position: absolute;
      top: -120px;
      left: 50%;
      transform: translateX(-50%);
      width: 800px;
      height: 400px;
      background: radial-gradient(ellipse, rgba(199, 165, 103, 0.12) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }

    /* Frame Border with Corner Accents */
    .frame-border {
      position: absolute;
      inset: 26px;
      border: 1.5px solid rgba(199, 165, 103, 0.28);
      border-radius: 32px;
      pointer-events: none;
      z-index: 1;
    }

    .frame-corner {
      position: absolute;
      width: 34px;
      height: 34px;
      border-color: #C7A567;
      border-style: solid;
      pointer-events: none;
      z-index: 2;
    }

    .corner-tl { top: 25px; left: 25px; border-width: 3px 0 0 3px; border-top-left-radius: 32px; }
    .corner-tr { top: 25px; right: 25px; border-width: 3px 3px 0 0; border-top-right-radius: 32px; }
    .corner-bl { bottom: 25px; left: 25px; border-width: 0 0 3px 3px; border-bottom-left-radius: 32px; }
    .corner-br { bottom: 25px; right: 25px; border-width: 0 3px 3px 0; border-bottom-right-radius: 32px; }

    /* Top Badge */
    .top-badge {
      position: relative;
      z-index: 5;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: rgba(199, 165, 103, 0.12);
      border: 1.5px solid rgba(199, 165, 103, 0.45);
      border-radius: 999px;
      padding: 14px 34px;
      color: #F1E2C3;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    }

    .star-gold {
      color: #C7A567;
      font-size: 20px;
    }

    /* Main Central Content Block */
    .center-block {
      position: relative;
      z-index: 5;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-top: -10px;
    }

    /* Giant Prominent Hero Logo */
    .logo-container {
      margin-bottom: 48px;
      filter: drop-shadow(0 16px 36px rgba(0, 0, 0, 0.6));
    }

    .logo-img {
      width: 860px;
      max-width: 90vw;
      height: auto;
      object-fit: contain;
    }

    /* Gold accent bar */
    .gold-line {
      width: 140px;
      height: 4px;
      background: linear-gradient(90deg, transparent 0%, #C7A567 50%, transparent 100%);
      margin-bottom: 44px;
      border-radius: 3px;
    }

    /* Huge Punchy Headline */
    h1 {
      font-size: 64px;
      font-weight: 800;
      line-height: 1.18;
      letter-spacing: -0.025em;
      color: #FFFFFF;
      margin-bottom: 22px;
      text-shadow: 0 4px 18px rgba(0, 0, 0, 0.4);
    }

    h1 span.gold {
      color: #E6C88A;
      background: linear-gradient(135deg, #FFF6E5 0%, #DFBD74 50%, #C7A567 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .service-tags {
      font-size: 26px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.85);
      letter-spacing: 0.04em;
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .dot-sep {
      color: #C7A567;
      font-size: 20px;
    }

    /* Bottom Review & Domain Block */
    .bottom-block {
      position: relative;
      z-index: 5;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 22px;
      width: 100%;
    }

    /* Prominent, clean reviews pill */
    .reviews-pill {
      display: inline-flex;
      align-items: center;
      gap: 22px;
      background: rgba(12, 23, 38, 0.85);
      border: 1.5px solid rgba(255, 255, 255, 0.16);
      border-radius: 999px;
      padding: 14px 34px;
      backdrop-filter: blur(14px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    }

    .tp-group {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .tp-boxes {
      display: flex;
      gap: 4px;
    }

    .tp-box {
      width: 26px;
      height: 26px;
      background: #00b67a;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-weight: 900;
      color: #FFFFFF;
      border-radius: 3px;
    }

    .tp-label {
      font-size: 19px;
      font-weight: 700;
      color: #FFFFFF;
    }

    .tp-label span {
      color: #B0BEC5;
      font-weight: 500;
    }

    .v-divider {
      width: 1.5px;
      height: 26px;
      background: rgba(255, 255, 255, 0.25);
    }

    .google-group {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 19px;
      font-weight: 700;
      color: #FFFFFF;
    }

    .google-g {
      width: 22px;
      height: 22px;
    }

    /* Clean prominent website domain */
    .website-domain {
      font-size: 22px;
      font-weight: 700;
      color: rgba(223, 201, 150, 0.95);
      letter-spacing: 0.12em;
      text-transform: lowercase;
    }
  </style>
</head>
<body>

  <!-- Ambient Glows -->
  <div class="glow-top"></div>
  <div class="glow-center"></div>

  <!-- Frame Border with Corner Accents -->
  <div class="frame-border"></div>
  <div class="frame-corner corner-tl"></div>
  <div class="frame-corner corner-tr"></div>
  <div class="frame-corner corner-bl"></div>
  <div class="frame-corner corner-br"></div>

  <!-- Top Badge -->
  <div class="top-badge">
    <span class="star-gold">★</span> Professional Removals & Storage
  </div>

  <!-- Center Stage: Giant Logo, Big Headline & Services -->
  <div class="center-block">
    <div class="logo-container">
      <img src="data:image/png;base64,${logoBase64}" alt="Stress Free Move" class="logo-img" />
    </div>

    <div class="gold-line"></div>

    <h1>
      Stress-Free Moves,<br>
      <span class="gold">Handled With Care.</span>
    </h1>

    <div class="service-tags">
      <span>House Removals</span>
      <span class="dot-sep">•</span>
      <span>Office Relocations</span>
      <span class="dot-sep">•</span>
      <span>Storage</span>
    </div>
  </div>

  <!-- Bottom: Clean Reviews Pill & Domain -->
  <div class="bottom-block">
    <div class="reviews-pill">
      <div class="tp-group">
        <div class="tp-boxes">
          <div class="tp-box">★</div>
          <div class="tp-box">★</div>
          <div class="tp-box">★</div>
          <div class="tp-box">★</div>
          <div class="tp-box">★</div>
        </div>
        <div class="tp-label">
          4.9 <span>/ 5 Trustpilot</span>
        </div>
      </div>

      <div class="v-divider"></div>

      <div class="google-group">
        <svg class="google-g" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"/>
          <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
        </svg>
        <span>5.0 Google</span>
      </div>
    </div>

    <div class="website-domain">stressfreemoveltd.co.uk</div>
  </div>

</body>
</html>
`;

const htmlFilePath = path.join(baseDir, 'scratch', 'og-preview.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
console.log('HTML written to:', htmlFilePath);

// Chrome headless screenshot at 1080x1350
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ogPngPath = path.join(publicImagesDir, 'og-image.png');
const ogJpgPath = path.join(publicImagesDir, 'og-image.jpg');
const appOgPngPath = path.join(baseDir, 'app', 'opengraph-image.png');
const appOgJpgPath = path.join(baseDir, 'app', 'opengraph-image.jpg');

const fileUrl = 'file:///' + htmlFilePath.replace(/\\/g, '/');

// Generate PNG 1080x1350
const cmdPng = `"${chromePath}" --headless=new --screenshot="${ogPngPath}" --window-size=1080,1350 --force-device-scale-factor=1 --hide-scrollbars --disable-gpu --virtual-time-budget=2000 "${fileUrl}"`;
console.log('Generating big 1080x1350 PNG...');
execSync(cmdPng, { stdio: 'inherit' });

// Generate JPG 1080x1350
const cmdJpg = `"${chromePath}" --headless=new --screenshot="${ogJpgPath}" --window-size=1080,1350 --force-device-scale-factor=1 --hide-scrollbars --disable-gpu --virtual-time-budget=2000 "${fileUrl}"`;
console.log('Generating big 1080x1350 JPG...');
execSync(cmdJpg, { stdio: 'inherit' });

if (fs.existsSync(ogPngPath)) {
  const stat = fs.statSync(ogPngPath);
  console.log(`Successfully generated og-image.png (${stat.size} bytes)`);
  fs.copyFileSync(ogPngPath, appOgPngPath);
  fs.copyFileSync(ogPngPath, path.join(baseDir, 'public', 'og-image.png'));
  fs.copyFileSync(ogPngPath, path.join(baseDir, 'app', 'twitter-image.png'));
}

if (fs.existsSync(ogJpgPath)) {
  const stat = fs.statSync(ogJpgPath);
  console.log(`Successfully generated og-image.jpg (${stat.size} bytes)`);
  fs.copyFileSync(ogJpgPath, appOgJpgPath);
  fs.copyFileSync(ogJpgPath, path.join(baseDir, 'public', 'og-image.jpg'));
  fs.copyFileSync(ogJpgPath, path.join(baseDir, 'app', 'twitter-image.jpg'));
  console.log('Synchronized big 1080x1350 OG images to public/ and app/ directories.');
}
