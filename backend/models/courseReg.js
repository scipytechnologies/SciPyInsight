const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseRegSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        whatsapp: {
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
        registeration :{
            type: Boolean,
            required: true,
        }


    },
    { timestamps: true }
);

module.exports = mongoose.model("courseReg", CourseRegSchema);
