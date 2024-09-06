const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema(
  {
    name: String,
    age: {
      type: Number,
      // adding a validator
      validate: {
        validator: (v) => v % 2 === 0,
        // print this if it's not valid
        message: (props) => `${props.value} is not an even number`,
      },
    },
    email: String,
    createdAt: {
      type: Date,
      // making sure it can't be changed use:
      immutable: true,
      // setting date to current date
      default: () => Date.now(),
    },
    updatedAt: {
      type: Date,
      // making sure it can't be changed use:
      immutable: true,
      // setting date to current date
      default: () => Date.now(),
    },
    bestrfriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema,
  },
  // you can use this instead of createdAt n updatedAt
  {
    timestamps: true,
  }
);


// schema methods
userSchema.methods.sayHi = function () {
  console.log(`Hi my name is ${this.name}`);
  
}

userSchema.statics.findByName = function (name) {
  return this.find({name: new})
}



module.exports = mongoose.model("user", userSchema);