const db = require("../config/db")

// GET ALL STUDENT LIST 
const getStudents = async(req,res)=>{
    try{
        const data = await db.query('SELECT * FROM students')
        if(!data){
            return res.status(404).send({
                success:false,
                message:'No Records Found'
            })
        }
        res.status(200).send({
            success:true,
            message:"All Students Records",
            totalstudent:data[0].length,
            data:data[0],
        })
    }catch(error){
        console.log(error),
        res.status(500).send({
            success:false,
            message:'Error in Get ALl student API',
            error,
        })
    }
}

const getStudentsbyId =async (req,res)=> {
    // try {
    //     const studentId = req.params.id
    //     console.log("student data print",studentId)
    //     if(!studentId){
    //         return res.status(404).send({
    //             success:false,
    //             message:'Invalid Provide student id'
    //         })
    //     }
    //       // const data = await db.query(`SELECT * FROM students WHERE id=`+studentId)
    //         const data = await db.query(`SELECT * FROM students WHERE id=?`,[studentId])
    //         if(!data){
    //             return res.status(404).send({
    //                 success:false,
    //                 message:'no Record found'
    //             })
    //         }
    //         res.status(200).send({
    //             success:true,
    //             studentdetails:data[0],
                
    //         })

        
        
    // } catch (error) {
    //     console.log(error),
    //     res.status(500).send({
    //         success:false,
    //         message:'Error in get all studentsid',
    //         error,
    //     })
    // }

    try {
        const studentId = req.params.id;
        if(!studentId){
           return res.status(404).send({
                success:false,
                message:'Data Not Provide'
            })
        }
        const data = await db.query('SELECT * FROM students WHERE Id=?',[studentId])
        if(!data){
            return res.status(404).send({
                success:false,
                message:"data not found"
            })
        }
        res.status(200).send({
            success:true,
            message:"Data Found",
            studentdetails:data[0]
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Data Not Provide',
            error
            

        })
    }
}

const createStudent =async (req,res)=>{

    try {
        const {name,roll_nol,fees,standard,medium}=req.body
        if(!name||!roll_nol||!fees||!medium){
           return res.status(404).send({
                message:"Please Provide All data"
            })
        }

        const data = await db.query('INSERT INTO students (name,roll_nol,fees,standard,medium) VALUES(?,?,?,?,?)',[name,roll_nol,fees,standard,medium])
        if(!data){
           return res.status(401).send({
                success:false,
                message:"Something went to wrong"
            })
        }
        res.status(200).send({
            success:true,
            message:"Inserted New Query Successfully"
        })
        
    } catch (error) {
        console.log(error),
        res.status(500).send({
            success:false,
            message:"Error In Create Api",
            error
        })
    }

}

const updateStudent = async (req,res)=>{

    try {
        const studentId = req.params.id;
        if(!studentId){
           return res.status(400).send({
                success:false,
                message:("Invalid StudentId or Provide Id")
            })
        }
        const {name, roll_nol,fees,standard,medium}= req.body;
        const data = await db.query("UPDATE students SET name=?, roll_nol=?, fees=?, standard=?,medium=? WHERE id=?",[name, roll_nol,fees,standard,medium,studentId]);

        if(!data){
            return res.status({
                success:false,
                message:"Error in update data"
            })
        }
        res.status(200).send({
            success:true,
            message:"Students Details Updated"
        })

    } catch (error) {
        console.log(error).send({
            success:false,
            message:"Student Data not updated",
            error
        })
    }
}

const deleteStudent = async(req,res)=>{
    try {
        const studentId = req.params.id;
        if(!studentId){
          return  res.status(404).send({
                success:"false",
                message:"Id not provide pls provide id  or Invalid data",
                error
            })
        }
        await db.query('DELETE FROM students WHERE id=?',[studentId])
        res.status(200).send({
            success:true,
            message:"Student Delete Successfully.."
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:"false",
            message:"Student Not Deleted",
            error
        })
    }

}

module.exports={getStudents,getStudentsbyId,createStudent, updateStudent,deleteStudent}