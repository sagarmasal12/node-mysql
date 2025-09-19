const express = require("express")
const { getStudents, getStudentsbyId ,createStudent, updateStudent} = require("../controllers/studentController")


// router obj 
const router = express.Router()

// routes 


// Get ALl students list || get
router.get('/getall',getStudents) 

//Get All students By id 
router.get('/get/:id',getStudentsbyId)

//Create Students
router.post('/create',createStudent)

//Update Students
router.post('/update/:id',updateStudent)

module.exports = router;
