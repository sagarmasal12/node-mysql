const express = require("express")
const { getStudents, getStudentsbyId ,createStudent} = require("../controllers/studentController")


// router obj 
const router = express.Router()

// routes 


// Get ALl students list || get
router.get('/getall',getStudents) 
router.get('/get/:id',getStudentsbyId)
router.post('/create',createStudent)

module.exports = router;
