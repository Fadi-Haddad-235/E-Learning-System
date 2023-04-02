const User = require("../models/userModel");
const Course = require("../models/courseModel");
const Withdrawal = require("../models/withdrawalModel");

exports.applyForWithdrawal= async (req,res)=>{
    try{
    const { courseId: courseId, userId : userId } = req.body;
    const course = await Course.findById(courseId);
    const student =await User.findById(userId);
    if(!course){
        return(res.status(504).json({message:"Course not found"}));
    }
    if(!course.students.includes(userId)){
        return(res.status(504).json({message:"User not found"}));
    }
    studentName = student.name;
    courseName = course.name;
    console.log(courseName,studentName);
    const withdrawal = new Withdrawal({
        courseId: courseId,
        courseName: courseName,
        studentId: userId,
        studentName: studentName,
    });
    await withdrawal.save();
    return(res.status(504).json({message:"User application saved"}));
    } catch(error){
        console.log(error)
        return(res.status(504).json({message: "Internal server error 504"}))
    }
}

exports.getWithdrawalRequests= async (req,res)=>{
    try{
        const withdrawals =await Withdrawal.find();
        if(!withdrawals){
            return(res.status(504).json({message:"No Withdrawal applications found"})); 
        }
        return(res.status(200).json(withdrawals));

    }
    catch(error){
        return(res.status(504).json({message: "Internal server error 504"}))
    }
    }

exports.withdrawUserFromCourse= async (req,res)=>{
    try{
        const {courseId:courseId , userId:userId} = req.body;
        const withdrawal = await Withdrawal.findOne({ courseId: courseId });
        if(!withdrawal){
            return(res.status(404).json({message:"No Withdrawal applications found"}));}
        else if(withdrawal.userId !== userId){
            return(res.status(404).json({message:"User is not enrolled in this course"}));
        }
        else{
        await Withdrawal.findOneAndDelete({courseId:courseId, userId:userId})
        return res.status(204).json({ message: "User withdrawn successfully" });
        }
    }
    catch(error){
        return(res.status(504).json({message: "Internal server error 504"}))
    }
}
