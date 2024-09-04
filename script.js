const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/testdb",
  () => {
    console.log("connected");
  },
  (e) => console.error(e)
);
