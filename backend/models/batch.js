const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BatchSchema = new Schema(
  {
    batchName: {
      type: String,
      required: true,
    },
    Course: {
        type: String,
        required: true,
      },
      duration: {
        type: String,
        required: true,
      },
      teacher : {
        type: String,
        required: true,
      },

    }
    
);

module.exports = mongoose.model("batch", BatchSchema);
