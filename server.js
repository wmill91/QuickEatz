const express = require('express');  //naming variables basically
const app = express();
const port = 3000 ;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.listen(process.env.PORT || 5000, function(err) {  
 if (err) {
   return console.log('something bad happened', err)
 }

 console.log(`Magic is happening on ${process.env.PORT}`)
});

mongoose.connect('mongodb://heroku_xqz0gvn1:751m26uu1hjnf4otua908tr8fa@ds153732.mlab.com:53732/heroku_xqz0gvn1', function(error){

if (error) console.error (error);
else console.log ('mongo connected')

})

var RSchema = new mongoose.Schema ({
    name: String,
    hunger: Number,
    price: Number,
    alcohol: Boolean,
    Carryout: Boolean,
    fancy: Number,
    ID: Number
},{ collection: "restaurants"}
);

mongoose.model('restaurants', RSchema)
var Restaurants = mongoose.model('restaurants', RSchema)

 
app.post('/restaurants', function (req, res){
    console.log("/restaurants endpoint getting hit");
    var restaurants = new Restaurants(req.body);
        

        console.log(restaurants);
        restaurants.save(function (err){
            res.send(restaurants);
        });

});