const express = require('express')
const app = express();
const session = require('express-session');
const passport = require('passport');
const port = process.env.PORT || 9800;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


//start passport

app.use(passport.initialize());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));;
app.use(passport.session());
app.set('view engine','ejs');

app.use(session({
    secret : 'SUPERSECRET',
    resave : false,
    saveUninitialized:true
}))

app.get('/',(req,res)=>{
    res.render('pages/login')
})

app.get('/profile',(req,res)=>{
    res.send(userprofile)
})

passport.serializeUser(function(user,cd){
    cd(null,user)
})

app.get('/error',(req,res)=>{
    res.send('Error while login')
})

passport.use(new GoogleStrategy({
    clientID: '651337171849-52m2pd7av5j3cq9d9fgmor5jpb0fb8k2.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:9800/auth/google/callback"
},
function(accessToken, refreshToken, profile, done){
    userdetails= details
    return done(null,userdetails)
  
}
));

app.get('/auth/google',
passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login']}));

app.get('/auth/google/callback',
passport.authenticate('google',{failureRedirect: '/login' }),
function(req,res){
    res.redirect('/profile');
});

app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})