var express = require('express');
var app = express();
var options = {
  index: "index.html"
};
app.use(express.static('../public', options))

app.listen(3000);