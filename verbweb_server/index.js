var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var leftButtonClickCount = 0;
var rightButtonClickCount = 0;

app.use(cors());
app.use(bodyParser.text());

app.get("/current_date_text", (request, response) => {
  var currentDate = new Date();
  response.send(`The server added this text to the page on ${currentDate.toString()}`);
})

app.get("/big_button", (request, response) => {
  console.log("left button click count is", leftButtonClickCount);
  response.send(leftButtonClickCount.toString());
});

app.post("/big_button", (request, response) => {
  console.log('left', request.body);
  leftButtonClickCount = request.body;
});


app.listen(5678, () => console.log('Server app listening on port 5678'));

