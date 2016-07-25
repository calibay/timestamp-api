var express = require("express");
var converter = require('./public/src/converter');
var app = express();
var PORT = process.env.PORT;
var IP = process.env.IP;
app.use(express.static('public'));

app.get('/:value', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(converter.convert(req.params.value));
});

app.listen(PORT, () => {
    console.log("Server running on " + IP + ":" + PORT);
});
