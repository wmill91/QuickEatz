// {
// 	"selector": "source.js",
// 	"shell": true,
// 	"cmd": ["mongo", "<", "$file"]
// }


var express = require('express')
var bodyParser = require('body-parser')
var filter = require('content-filter')  /* STEP-1 */

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(filter()); /* STEP-2 and that's all */