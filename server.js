const http = require("http");
const fs = require("fs");
const server = http.createServer();

server.on("request", function(req, res) {
  console.log(req.url);
  const path = `./${req.url === "/" ? "index.html" : req.url}`;
  fs.readFile(path, (err, data) => {
    if (!err) {
      res.end(data);
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});
console.log("server starting");
server.listen(8000);
