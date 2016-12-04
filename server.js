var express = require('express')
var app = express()
var moment = require("moment")
app.get('/:query', function (req, res) {
    var query = req.params.query;
    var unix = null;
    var natural = null;
    if(+query >= 0){
        console.log(query);
        unix = +query;
        natural = moment.unix(unix).format('MMMM D, YYYY');
    }
    if(isNaN(query) && moment(query, 'MMMM D, YYYY').isValid()){
        unix = +moment(query, 'MMMM D, YYYY').format('X');
        natural = moment.unix(unix).format('MMMM D, YYYY');
    }
    
    var dateObj = {"unix": unix, "natural": natural};
    res.send(dateObj);
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})