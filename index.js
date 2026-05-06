const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const dns = require("dns");
const { MongoClient, ServerApiVersion } = require("mongodb");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mydnlbl.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );

    const jobCollection = client.db("all-jobs").collection("jobs");

    app.get("/jobs", async (req, res) => {
      console.log("Job Fetching from serv....");

      const coursor = jobCollection.find();
      const result = await coursor.toArray();
      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("This is Job Server from /");
});

app.listen(port, (req, res) => {
  console.log(`This is server log in Terminl: ${port}`);
});
