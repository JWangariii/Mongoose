// we are going to:

// Find all users.
// Skip the first 100 records.
// Limit the results to 10 records.
// Sort the results by the firstName field.
// Select the firstName.
// Execute that query.
UserModel.find() // find all users
  .skip(100) // skip the first 100 items
  .limit(10) // limit to 10 items
  .sort({ firstName: 1 }) // sort ascending by firstName
  .select({ firstName: true }) // select firstName only
  .exec() // execute the query
  .then((docs) => {
    console.log(docs);
  })
  .catch((err) => {
    console.error(err);
  });
