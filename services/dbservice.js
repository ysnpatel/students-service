const studentModel = require('../models/models.js');




async function fetchStudents(req, res){
    const users = await studentModel.find();
    console.log(users)
  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
    fetchStudents
}