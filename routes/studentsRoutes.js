const express = require("express")
const { getStudents, getStudentsbyId } = require("../controllers/studentController")


// router obj 
const router = express.Router()

// routes 


// Get ALl students list || get
router.get('/getall',getStudents) 
router.get('/get/:id',getStudentsbyId)

module.exports = router;
