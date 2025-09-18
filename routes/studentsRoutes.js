const express = require("express")
const { getStudents } = require("../controllers/studentController")


// router obj 
const router = express.Router()

// routes 


// Get ALl students list || get
router.get('/getall',getStudents) 

module.exports = router;
