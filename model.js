// referencing mongoose
let mongoose = require("mongoose");
// defining schema
let emailSchema = new mongoose.Schema({
  email: String,
});
// exporting a model
module.exports = mongoose.model("Email", emailSchema);

// enhance the email schema
let mongoose = require("mongoose");
let validator = require("validator");
let emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
});
module.exports = mongoose.model("Email", emailSchema);
