const express =  require ('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config')
const User = require('./userSchema');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json())

//get All users
router.get('/users',(req,res)=>{
    User.find({},(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})

//register User
router.post('/register',(req,res)=>{
    var hasspassword = bcrypt.hashSync(req.body.password, 8)
    User.create({
        name:req.body.name,
        password:hasspassword,
        email:req.body.email,
        role:req.body.role?req.body.role:'User'
    },(err,user)=>{
        if(err) return res.status(500).send('Error')
        res.status(200).send('Register Success')
    })
})

//Login user
router.post('/login',(req,res)=>{
    User.findOne({email:req.body.email},(err,user)=>{
        if(err) return res.status(500).send('Error While Login')
        if(!user) return res.status(500).send({auth:false,token:'No User Found! Register First'});
        else{
            const passIsValid = bcrypt.compareSync(req.body.password, user.password);
            if(!passIsValid) return res.status(500).send({auth:false,token:'Invalid Password'});
            //in case password match generate token
            var token = jwt.sign({id:user._id}, config.secert, {expiresIn:86400})
            res.send({auth:true,token:token})

        }
    })
})

//profile
router.get('/userInfo',(req,res)=>{
    var token = req.header['x-access-token'];
    if(!token) return res.send({auth:false, token:'No Token Provided'});
    jwt.verify(token,config.secert,(err,user)=>{
        if(err) return res.send({auth:false, token:'Invalid Token'});
        User.findById(user.id,(err,result)=>{
            res.send(result)
        })
    })
})
module.exports = router