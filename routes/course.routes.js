const { Router } = require("express");
const router = Router();
const { enroll, getAllCourses, createCourse ,getEnrolledStudents} = require("../controllers/course.controllers");
router.post("/:id/enroll", enroll);
router.get("/", getAllCourses);
router.post("/create", createCourse);
router.post("/:id/enrolledstudents", getEnrolledStudents);
module.exports = router;