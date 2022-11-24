var express = require('express');
var studentController = require('../controllers/studentController')
var router = express.Router();

router.get(`/all`, function (req, res) { 
    studentController.getStudents(req, res)
    // res.send('Hi')
})

module.exports = router;