// Create Record
// Let’s create an instance of the email model and save it to the database:

let EmailModel = require("./email");
let msg = new EmailModel({
  email: "ADA.LOVELACE@GMAIL.COM",
});
msg
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

// Fetch Record
mailModel
  .find({
    email: "ada.lovelace@gmail.com", // search query
  })
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

// Update Record
EmailModel.findOneAndUpdate(
  {
    email: "ada.lovelace@gmail.com", // search query
  },
  {
    email: "theoutlander@live.com", // field:values to update
  },
  {
    new: true, // return updated doc
    runValidators: true, // validate before update
  }
)
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

// delete record
EmailModel.findOneAndRemove({
  email: "theoutlander@live.com",
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
