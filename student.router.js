var express = require('express');
var router = express.Router();
var Student = require("./student.model");

// GET all database

router.get("/", (req, res) =>{
    Student.find().exec((err, data) => {
        if (err) {
            return res.status(400).send(err);
        }
        res.status(200).send(data);
    });
});

// insert
router.post("/", (req, res) =>{
    var obj = new Student(req.body);
    obj.save((err, data) => {
        if (err){
            return res.status(400).send(err);
        }
        res.status(200).send("insert success!");
    });
});

// edit update
router.put("/:_id", (req, res)=>{
    Student.findByIdAndUpdate(req.params._id, req.body, (err, data) =>{
        if(err){
            return res.status(400).send(err);
        }
        res.status(200).send("update success!");
    });
});

// delete
router.delete("/:_id", (req, res)=>{
    Student.findByIdAndDelete(req.params._id, req.body, (err, data) =>{
        if(err){
            return res.status(400).send(err);
        }
        res.status(200).send("Delete success!");
    });
});

//search
router.get("/:_id", (req, res) =>{
    Student.findById(req.params._id).exec((err, data) =>{
        if(err){
            return res.status(400).send(err);
        }
        res.status(200).send(data);
    });
});

module.exports = router;