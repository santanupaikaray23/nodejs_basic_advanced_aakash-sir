var express =  require ('express');
var hotelRouter = express.Router();

var hotels = [{
    "id": "4532",
    "name":"Gulab",
    "city":"Delhi",
    "Locality":"Pitampura",
    "min_price":"234"
},
{
    "id": "4472",
    "name":"Rosy",
    "city":"Kolkata",
    "Locality":"Citylake",
    "min_price":"211"
},
{
    "id": "4578",
    "name":"Saban",
    "city":"Pihu",
    "Locality":"Sagna",
    "min_price":"24"
}
]

hotelRouter.route('/')
.get(function(req,res){
    res.render('city',{title:'Hotels Page'})
})
hotelRouter.route('/details')
.get(function(req,res){
    res.send('hotels details')
})

module.exports = hotelRouter