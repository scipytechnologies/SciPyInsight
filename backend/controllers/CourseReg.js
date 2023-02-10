const CourseReg = require("../models/courseReg");

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
  }


} 