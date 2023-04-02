const User = require("../models/userModel");
const Course = require("../models/courseModel");

exports.enroll = async (req, res) => {
    // const { courseId } =req.params.id;
    const { id: courseId } = req.params;
    const { userId } =req.body;

    try{
        console.log(req.params.id)
        console.log(userId)
        const course = await Course.findById(courseId);
        if(!course){
            return res.status(404).json({message: "Course not found"});
        }
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        if(course.students.includes(userId)){
            return res.status(400).json({message: "User already enrolled"});
        }
        course.students.push(userId);
        user.students.push(courseId);
        await course.save();
        await user.save();
        return res.status(200).json({message: "User enrolled"});   
    } catch(error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
    }

}
exports.getAllCourses = async (req, res) => {
    const courses = await Course.find();

    res.json(courses)  
}
exports.createCourse = async (req, res) => {
    const { name, description } = req.body;
    const course = await Course.findOne({ name });
    if(course){
        return res.status(404).json({message: "Course already Exists"});
    }
    try {
      const course = new Course({
        name,
        description,
        students: []
      });
      await course.save();
      res.status(201).json(course);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
}