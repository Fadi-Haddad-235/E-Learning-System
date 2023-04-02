const { Router } = require("express");
const router = Router();
const { enroll, getAllCourses, createCourse } = require("../controllers/course.controllers");
router.post("/:id/enroll", enroll);
router.get("/", getAllCourses);
router.post("/create", createCourse);
module.exports = router;