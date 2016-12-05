var express = require('express')
var app = express()
var moment = require("moment")
app.get('/', function(req, res){
   res.send('Put your  <h1>date time</h1> or your <h1>unixtime</h1> after url to get json') 
})
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

app.listen(process.env.PORT || 8080)