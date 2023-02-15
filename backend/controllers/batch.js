const Batch = require("../models/batch");


module.exports = {


  addBatch: async (req, res) => {
    const {
      batchName,
      course,
      duration,
      teacher
     } = req.body;
    console.log(req.body);
    try {
      const result = await Batch.create({     
        batchName,
        course,
        duration,
        teacher
      });
      res.status(201).json({ result });
    } catch (error) {
      console.log(error.message);
    }
  },
}

//  updateCourseReg : async (req, res) => {
//     try {
//          await User.findByIdAndUpdate(req.params.id, {
//             courseReg : req.body.courseReg
//         });

//     } catch(err) {
//         console.error(err.message);
//         res.send(500).send('Server Error');
//     }
// }

// } 