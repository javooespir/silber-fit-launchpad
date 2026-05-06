import { readdirSync, writeFileSync } from "fs";
import { join } from "path";

const assetsDir = join(process.cwd(), "dist/client/assets");
const files = readdirSync(assetsDir);

const mainJs = files.find((f) => f.startsWith("index-") && f.endsWith(".js") && !f.includes("Deo6"));
const mainCss = files.find((f) => f.startsWith("styles-") && f.endsWith(".css"));

if (!mainJs) {
  console.error("Could not find main JS bundle in dist/client/assets");
  process.exit(1);
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Silber Fit · Gimnasio en Castelar | Cambia tu cuerpo</title>
    <meta name="description" content="Silber Fit, gimnasio en Castelar (Av. Rivadavia 21226). Rutinas gratis, profes capacitados y un ambiente para transformar tu cuerpo. Asociate hoy." />
    <meta name="author" content="Silber Fit" />
    <meta property="og:title" content="Silber Fit · Gimnasio en Castelar" />
    <meta property="og:description" content="Cambiá tu cuerpo en Silber Fit. Rutinas gratis y planes personalizados en Castelar, Buenos Aires." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&display=swap" />\${mainCss ? \`
    <link rel="stylesheet" href="./assets/\${mainCss}" />\` : ""}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./assets/\${mainJs}"></script>
  </body>
</html>
`;

writeFileSync(join(process.cwd(), "dist/client/index.html"), html);
console.log(`Generated index.html with JS: \${mainJs}\${mainCss ? \`, CSS: \${mainCss}\` : ""}`);
