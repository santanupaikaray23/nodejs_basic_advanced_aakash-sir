var express =  require ('express');
var app =  express();
var dotenv =  require ('dotenv');
dotenv.config()
var morgan = require('morgan')
var port = process.env.PORT || 9000;
var hotelRouter = express.Router();
var cityRouter = express.Router();
var hotelRouter = require('./src/router/hotelRoutes');
var cityRouter = require('./src/router/cityRoutes')

//statis File Path
app.use(express.static(__dirname+'/public'))
//html file
app.set('views','./src/views');
//view engine
app.set('view engine','ejs')

app.use(morgan('tiny'))

app.get('/',function(req,res){
    res.render('index',{title:"Home Page"})
})
// cityRouter.route('/')
// .get(function(req,res){
//     res.send(city)
// })
// cityRouter.route('/details')
// .get(function(req,res){
//     res.send('city details')
// })
// hotelRouter.route('/')
// .get(function(req,res){
//     res.send(hotels)
// })
// hotelRouter.route('/details')
// .get(function(req,res){
//     res.send('hotels details')
// })

// app.get('/city',function(req,res){
//     res.send(city)
// })
// app.get('/details',function(req,res){
//     res.send('cityDetails')
// })

// app.get('/hotels',function(req,res){
//     res.send(hotels)
// })

// app.get('/details',function(req,res){
//     res.send('hotelDetails')
// })

app.use('/hotel',hotelRouter)
app.use('/city',cityRouter)

app.listen(port, function(err){
    if(err) throw err;
    else{
        console.log("Server is running on port "+port)
    }
})

