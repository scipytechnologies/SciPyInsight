const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseRegSchema = new Schema(
    {
        userID: {
            type: String,
            required: true,
        },
        course: {
            type: String,
            required: true,
        },
        college: {
            type: String,
            required: true,
        },
        dept: {
            type: String,
            required: true,
        },
        semester: {
            type: String,
            required: true,
        },
        place: {
            type: String,
            required: true,
        },
        whatsappNo: {
            type: String,
            required: true,
        },
        premium: {
            type: Boolean,
            required: true,
        }
       


    },
    { timestamps: true }
);

module.exports = mongoose.model("courseReg", CourseRegSchema);
