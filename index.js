const http = require("http");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Toothsome Provisions</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      background: radial-gradient(circle at top left, #ff3d00 0%, #820000 40%, #200000 100%);
      color: #fff7f0;
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      text-align: center;
    }

    .card {
      max-width: 720px;
      padding: 3rem 2.5rem;
      border: 1px solid rgba(255, 121, 0, 0.35);
      border-radius: 28px;
      box-shadow: 0 28px 80px rgba(128, 0, 0, 0.35);
      backdrop-filter: blur(16px);
      background: rgba(48, 0, 0, 0.78);
    }

    h1 {
      margin: 0 0 1rem;
      font-size: clamp(2.75rem, 5vw, 4.5rem);
      letter-spacing: -0.05em;
      text-transform: uppercase;
      text-shadow: 0 0 18px rgba(255, 110, 0, 0.35);
    }

    p {
      margin: 0;
      font-size: 1.1rem;
      color: #ffd8c2;
      line-height: 1.7;
    }

    .accent {
      color: #ffb400;
    }

    .footer {
      margin-top: 1.9rem;
      font-size: 0.95rem;
      color: rgba(255,255,255,0.72);
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>toothsome provisions</h1>
    <p class="accent">coming soon</p>
  </div>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(html);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("404 - Not Found");
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(
    `Toothsome Provisions placeholder running at http://localhost:${PORT}`,
  );
});
