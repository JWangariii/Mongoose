// Let’s create a user schema with the fields firstName and lastName:
let mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});
module.exports = mongoose.model("User", userSchema);

// Virtual Property
// A virtual property is not restricted to the database. We can add it to our schema as a helper to get and set values.
userSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});
userSchema.virtual("fullName").set(function (name) {
  let str = name.split(" ");

  this.firstName = str[0];
  this.lastName = str[1];
});

// setting a value to full name
let model = new UserModel();
model.fullName = "Thomas Anderson";
console.log(model.toJSON()); // Output model fields as JSON
console.log();
console.log(model.fullName); // Output the full name

// Instance Methods, are custom made
userSchema.methods.getInitials = function () {
  return this.firstName[0] + this.lastName[0];
};
userSchema.methods.getInitials = function () {
  return this.firstName[0] + this.lastName[0];
};
// This method will be accessible via a model instance:
let model = new UserModel({
  firstName: "Thomas",
  lastName: "Anderson",
});
let initials = model.getInitials();
console.log(initials); // This will output: TA

// Static Methods
// getting all users
userSchema.statics.getUsers = function () {
  return new Promise((resolve, reject) => {
    this.find((err, docs) => {
      if (err) {
        console.error(err);
        return reject(err);
      }
      resolve(docs);
    });
  });
};
// Calling getUsers on the Model class will return all the users in the database:
UserModel.getUsers()
  .then((docs) => {
    console.log(docs);
  })
  .catch((err) => {
    console.error(err);
  });

// middleware
let mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  createdAt: Date,
  updatedAt: Date,
});
module.exports = mongoose.model("User", userSchema);
// pre-save hook and set values for createdAt and updatedAt:
userSchema.pre('save', function (next) {
  let now = Date.now()
   
  this.updatedAt = now
  // Set a value for createdAt only if it is null
  if (!this.createdAt) {
    this.createdAt = now
  }
  // Call the next function in the pre-save chain
  next()    
})
// Let’s create and save our model:
let UserModel = require('./user')
let model = new UserModel({
  fullName: 'Thomas Anderson'
}
msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })

// plugins
module.exports = function timestamp(schema) {
  // Add the two fields to the schema
  schema.add({ 
    createdAt: Date,
    updatedAt: Date
  })

  // Create a pre-save hook
  schema.pre('save', function (next) {
    let now = Date.now()
   
    this.updatedAt = now
    // Set a value for createdAt only if it is null
    if (!this.createdAt) {
      this.createdAt = now
    }
   // Call the next function in the pre-save chain
   next()    
  })
}
// To use this plugin, we simply pass it to the schemas that should be given this functionality:

let timestampPlugin = require('./plugins/timestamp')

emailSchema.plugin(timestampPlugin)
userSchema.plugin(timestampPlugin)