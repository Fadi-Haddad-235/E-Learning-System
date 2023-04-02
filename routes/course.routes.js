const { Router } = require("express");
const router = Router();
const { enroll, getAllCourses, createCourse ,getEnrolledStudents} = require("../controllers/course.controllers");
const { applyForWithdrawal,getWithdrawalRequests,withdrawUserFromCourse,rejectWithdrawalApplication} = require("../controllers/withdrawal.controller");
router.post("/:id/enroll", enroll);
router.get("/", getAllCourses);//for admin only
router.post("/create", createCourse);//for admin only
router.post("/view_withdrawal_applications", getWithdrawalRequests);//for admin only
router.post("/:id/enrolledstudents", getEnrolledStudents);
router.post("/remove_user_from_course", withdrawUserFromCourse); //for admin only
router.post("/reject_withdrawal_application", rejectWithdrawalApplication); //for admin only
router.post("/apply_for_withdrawal", applyForWithdrawal);
module.exports = router;