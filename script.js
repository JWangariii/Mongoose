const mongoose = require("mongoose");
const user = require("./user");

mongoose.connect("mongodb://localhost/testdb");

// // calling hte function
// run();
// // creating the async function
// async function run() {
//   const user = await user.create({ name: "Kyle", Age: 26 });
//   // changing the name
//   user.name = "Sally";
//   await user.save();
//   console.log(user);
// }

// if we want to catch an error, we wrap this in a try function
// calling the function
run();
async function run() {
  try {
    const user = await user.create({
      name: "Kyle",
      age: 26,
      hobbies: ["weight lifting", "bowling"],
      address: {
        street: "main street",
      },
    });
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
