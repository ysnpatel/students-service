var getStudentData = require('../services/dbservice.js') 

const getStudents = async (req, res) => {  
    let students = await getStudentData.fetchStudents(req, res)
    // res.send(students)
}

module.exports = {
    getStudents
}