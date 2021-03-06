const mongoose = require("mongoose");

const CaseTownSchema = new mongoose.Schema(
  {
    town: {
      type: mongoose.Types.ObjectId,
      ref: "towns",
      required: true,
    },
    totalDeath: {
      type: Number,
      default: 0,
    },
    totalCase: {
      type: Number,
      default: 0,
      required: true,
    },
    recovered: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { timestamps: true }
);

const CaseTown = mongoose.model("caseTown", CaseTownSchema);
module.exports = CaseTown;
