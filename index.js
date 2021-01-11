var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var mogo_url = "mongodb://localhost:27017/webfullstack";
mongoose.Promise = global.Promise;
mongoose.connect(mogo_url, { useNewUrlParser: true }).then(
    ()=>{
    console.log("Success to connect database!");
    },
    error=>{
        console.log("ERROR" + error);
        process.exit();
    }
);

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.POST || 3000;

app.listen(port, ()=>{
    console.log("success : " + port);
});

app.get('/', (req, res) => {
    res.status(200).send("GET API WEB FULL STACK");
});

//link api for student
var Student = require("./student.router");
app.use("/api/student", Student);

app.use((req, res, next)=>{
    var err = new Error("not api");
    err.status = 404;
    next(err);
});