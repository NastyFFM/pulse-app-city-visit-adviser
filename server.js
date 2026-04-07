const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3100;
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json' };
const APP_ID = 'city-visit-adviser';

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  if (req.url.startsWith(`/app/${APP_ID}/api/`)) {
    const file = req.url.split('/api/')[1].replace(/[^a-z0-9-]/g, '');
    const fp = path.join(__dirname, 'data', file + '.json');
    if (req.method === 'GET') {
      try { res.writeHead(200, {'Content-Type': 'application/json'}); res.end(fs.readFileSync(fp)); }
      catch { res.writeHead(200, {'Content-Type': 'application/json'}); res.end('{}'); }
      return;
    }
    if (req.method === 'PUT') {
      let b = ''; req.on('data', c => b += c);
      req.on('end', () => { fs.writeFileSync(fp, b); res.writeHead(200, {'Content-Type': 'application/json'}); res.end('{"ok":true}'); });
      return;
    }
  }

  let urlPath = req.url === '/' ? '/index.html' : req.url;
  urlPath = urlPath.split('?')[0];
  const fp = path.join(__dirname, urlPath);
  try {
    const d = fs.readFileSync(fp);
    res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'text/plain' });
    res.end(d);
  } catch {
    res.writeHead(404); res.end('Not found');
  }
}).listen(PORT, () => console.log(`City Visit Adviser running on port ${PORT}`));
