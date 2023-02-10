const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");
const CourseController = require('../controllers/CourseReg')

// POST request for creating a new user.
router.post("/signup", UserController.signup);

// GET request for user login.
router.post("/signin", UserController.signin);
router.post('/auth', UserController.verifyToken)
router.get(`/getuser/:id`,UserController.getUser)
router.post('/regcourse',CourseController.addCourseReg )
// POST request to handle the Google Login response.
router.post("/google-login", UserController.googleLogin);

// POST request to handle the Google Login response.
router.post("/facebook-login", UserController.FacebookLogin);



module.exports = router;
