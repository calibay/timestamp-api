var express = require("express");
var app = express();

app.get('/', (req, res) => {
    res.send("Hello World!");
    res.end();
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
