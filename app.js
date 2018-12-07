const mongoose = require("mongoose");
const express = require("express");
var bodyParser = require('body-parser');
var restful = require('node-restful');
var methodOverride = require('method-override');
const product = require("./routes/product");
const port = 3000;

//mongoose.Promise = gobal.Promise;

let app = express();

mongoose.connect("mongodb://localhost/product", {useNewUrlParser: true})
.then(() => console.log("connect successfully"))
.catch(() => console.error(error));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());


app.use("/api/v1/products",product);

app.listen(port, () => console.log(`Express server listening on port ${port}!`))
