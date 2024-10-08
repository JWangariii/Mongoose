// declaring variables
const client = new MongoClient(uri);
const dbname = "bank";
const collection_name = "accounts";
const accountsCollection = client.db(dbname).collection(collection_name);

// build aggregation pipeline
const pipeline = [
  // Stage 1: match the accounts with a balance less than $1,000
  { $match: { balance: { $lt: 1000 } } },
  // Stage 2: Calculate average balance and total balance
  {
    $group: {
      _id: "$account_type",
      total_balance: { $sum: "$balance" },
      avg_balance: { $avg: "$balance" },
    },
  },
];

// run aggregation pipeline
const main = async () => {
  try {
    await client.connect();
    console.log(
      `Connected to the database 🌍. \nFull connection string: ${safeURI}`
    );
    let result = await accountsCollection.aggregate(pipeline);
    for await (const doc of result) {
      console.log(doc);
    }
  } catch (err) {
    console.error(`Error connecting to the database: ${err}`);
  } finally {
    await client.close();
  }
};

main();

// an aggregation pipeline that uses $match, $sort, and $project, and that will find checking accounts with a balance of greater than or equal to $1,500. Then, we sort the results by the balance in descending order and return only the account_id, account_type, balance, and a new computed field named gbp_balance, which stands for Great British Pounds (GBP) balance.

const pipeline2 = [
  // Stage 1: $match - filter the documents (checking, balance >= 1500)
  { $match: { account_type: "checking", balance: { $gte: 1500 } } },

  // Stage 2: $sort - sorts the documents in descending order (balance)
  { $sort: { balance: -1 } },

  // Stage 3: $project - project only the requested fields and one computed field (account_type, account_id, balance, gbp_balance)
  {
    $project: {
      _id: 0,
      account_id: 1,
      account_type: 1,
      balance: 1,
      // GBP stands for Great British Pound
      gbp_balance: { $divide: ["$balance", 1.3] },
    },
  },
];

// to run
const main = async () => {
  try {
    await client.connect();
    console.log(`Connected to the database 🌍\n ${uri}`);
    let accounts = client.db("bank").collection("accounts");
    let result = await accounts.aggregate(pipeline);
    for await (const doc of result) {
      console.log(doc);
    }
  } catch (err) {
    console.error(`Error connecting to the database: ${err}`);
  } finally {
    await client.close();
  }
};

main();
