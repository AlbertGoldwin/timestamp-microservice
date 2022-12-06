// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();
require;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.get("/api", (req, res) => {
  res.json({ unix: Date.now(), utc: new Date().toUTCString() });
});

app.get("/api/:timestamp", (req, res) => {
  const time = req.params.timestamp;
  if (/^\d+$/.test(time)) {
    const date = new Date(parseInt(time));
    res.json({ unix: parseInt(time), utc: date.toUTCString() });
  } else {
    const date = new Date(time);
    if (!isNaN(date)) {
      res.json({ unix: +date, utc: date.toUTCString() });
    } else {
      res.json({ error: "Invalid Date" });
    }
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
