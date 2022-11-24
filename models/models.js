const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    student_id: {
    type: String,
    required: true,
    },
    name: {
        type: String,
        required: true,
        },
    email: {
        type: String,
        required: true,
        },
    phone: {
        type: String,
        required: true,
        },
    city: {
        type: String,
        required: true,
        },
    postcode: {
        type: String,
        required: true,
        }
});
const Student = mongoose.model('studentCollection', studentSchema);
module.exports = Student;