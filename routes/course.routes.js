const { Router } = require("express");
const router = Router();
const { enroll, getAllCourses, createCourse ,getEnrolledStudents} = require("../controllers/course.controllers");
router.post("/:id/enroll", enroll);
router.get("/", getAllCourses);//for admin only
router.post("/create", createCourse);//for admin only
router.post("/:id/enrolledstudents", getEnrolledStudents);
router.post("/:courseId/userId/withdraw", withdraw); //for admin only
router.post("/:id/apply_for_withdrawal", applyForWithdrawal);
module.exports = router;