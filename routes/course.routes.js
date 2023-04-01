const { Router } = require("express");
const router = Router();
const { enroll, getAllCourses } = require("../controllers/course.controllers");
router.post("/:id/enroll", enroll);
router.get("/", getAllCourses);
module.exports = router;