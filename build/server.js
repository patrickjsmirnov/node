var express = require('express');
var app = express();
// const port = 8080;
var port = 3003;
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
app.get('/', function (req, res) { return res.send('Hello World!!'); });
//# sourceMappingURL=server.js.map