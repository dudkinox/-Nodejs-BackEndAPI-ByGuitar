var mongoose = require("mongoose");
var studentSchema = mongoose.Schema(
    {
        student_name: {
            type: String
        },
        student_lastname:{
            type: String
        }
    },
    {
        collection: "student"
    }
);

var Student = mongoose.model("student", studentSchema);
module.exports = Student;