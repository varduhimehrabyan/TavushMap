var fs = require("fs");

var https = require("https");
var privateKey = fs.readFileSync("./server.key", "utf8");
var certificate = fs.readFileSync("./server.crt", "utf8");

var credentials = { key: privateKey, cert: certificate };

const bak = require("./backupjob");

bak();

const express = require("express");
const app = express();

const http = express();

http.get("*", function (req, res) {
  res.redirect("https://" + req.headers.host + req.url);
});

app.use(express.json());

app.use(express.static("./client/user"));
app.use(express.static("./client/dmn"));

app.use("/api", require("./Controllers"));

app.use("/dmn/", require("./dmn"));
app.use("/", require("./user"));

var httpsServer = https.createServer(credentials, app);

http.listen(80);
httpsServer.listen(443);
