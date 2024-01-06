var express = require ('express');
var cityRouter = express.Router();


var city = [
    {
        "id":1,
        "name":"Delhi",
        "country_id":1,
        "country_name":"India",
      
    },
    {
        "id":2,
        "name":"Bhopal",
        "country_id":2,
        "country_name":"India",
      
    },
    {
        "id":3,
        "name":"Bhubaneswar",
        "country_id":3,
        "country_name":"India",
      
    },
    {
        "id":4,
        "name":"Kolkata",
        "country_id":4,
        "country_name":"India",
      
    }
]
cityRouter.route('/')
.get(function(req,res){
    res.render('city',{title:'City Page'})
})
cityRouter.route('/details')
.get(function(req,res){
    res.send('city details')
})

module.exports = cityRouter