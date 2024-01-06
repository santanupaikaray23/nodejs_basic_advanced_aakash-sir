var express =  require ('express');
var app =  express();
var port = 9000;
var hotelRouter = express.Router();
var cityRouter = express.Router();

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

app.get('/',function(req,res){
    res.send("Hi from express")
})
cityRouter.route('/')
.get(function(req,res){
    res.send(city)
})
cityRouter.route('/details')
.get(function(req,res){
    res.send('city details')
})
hotelRouter.route('/')
.get(function(req,res){
    res.send(hotels)
})
hotelRouter.route('/details')
.get(function(req,res){
    res.send('hotels details')
})

app.get('/city',function(req,res){
    res.send(city)
})
app.get('/details',function(req,res){
    res.send('cityDetails')
})

app.get('/hotels',function(req,res){
    res.send(hotels)
})

app.get('/details',function(req,res){
    res.send('hotelDetails')
})

app.use('/hotel',hotelRouter)
app.use('/city',cityRouter)

app.listen(port, function(err){
    if(err) throw err;
    else{
        console.log("Server is running on port "+port)
    }
})

