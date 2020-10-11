const { Schema, model, Mongoose } = require("mongoose");

const ScoreSchema = new Schema({
  username: {
    required: true,
    type: "String",
  },
  points: {
    required: true,
    type: "Number",
    
  },
  level:{
    required:true,
    type:"String"
  }
});

const Score = model("score", ScoreSchema);

module.exports = {
  Score,
};
