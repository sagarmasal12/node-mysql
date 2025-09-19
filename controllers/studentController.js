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
        const {name,roll_no,fees,medium}=req.body
        if(!name||!roll_no||!fees||!medium){
           return res.status(404).send({
                message:"Please Provide All data"
            })
        }

        const data = await db.query('INSERT INTO students (name,roll_no,fees,medium) VALUES(?,?,?,?)',[name,roll_no,fees,medium])
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



module.exports={getStudents,getStudentsbyId,createStudent}