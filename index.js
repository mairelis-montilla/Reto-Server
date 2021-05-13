const http = require('http');
const packageJson = require('./package.json');
const version = packageJson.version;
const fs = require('fs');
const data = fs.readFileSync('./index.js',
            {encoding:'utf8', flag:'r'});

const requestListener = (req, res) => {
  if(req.url ==='/'){
  res.writeHead(200, {'Content-Type' : 'application/json'});
const json = {
    version: version
  };
  res.end(JSON.stringify(json));

  }
  else if(req.url=== '/file'){
  /*   res.setHeader() */
    res.writeHead(200, {'Content-Type':'text/plain; charset=utf8'});
  res.end(data);
  }
  else{
    res.writeHead(200, {'Content-Type':'text/plain; charset=utf8'});
  res.end('upps no se encuentra disponible');
  }
}

const server = http.createServer(requestListener);
server.listen(8080);
