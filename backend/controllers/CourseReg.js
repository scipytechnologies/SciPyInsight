const CourseReg = require("../models/courseReg");
const User = require("../models/user");


module.exports = {


  addCourseReg: async (req, res) => {
    const {
      userID ,
       course ,
       college,
       dept  ,
       semester,
       place,
       whatsappNo,   
        premium 
     } = req.body;
    console.log(req.body);
    try {
      const result = await CourseReg.create({     
          userID ,
           course ,
           college,
           dept  ,
           semester,
           place,
           whatsappNo,   
            premium 
      });
      res.status(201).json({ result });
    } catch (error) {
      console.log(error.message);
    }
  },

 updateCourseReg : async (req, res) => {
    try {
         await User.findByIdAndUpdate(req.params.id, {
            courseReg : req.body.courseReg
        });

    } catch(err) {
        console.error(err.message);
        res.send(500).send('Server Error');
    }
}

} 