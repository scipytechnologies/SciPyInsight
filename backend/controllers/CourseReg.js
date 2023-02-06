const CourseReg = require("../models/courseReg");

module.exports = {


    AddCourseReg: async (req, res) => {
        const { firstName,lastName, email, password } = req.body;
        console.log(req.body);
        try {
                const result = await User.create({
                  firstName,
                  lastName,
                  email,
                  password: hashedpassword,
                  role:"student",
                  courseReg : false
                });
                res.status(201).json({ message: "user added with success"});  
        } catch (error) {
          console.log(error.message);
        }
      }


} 