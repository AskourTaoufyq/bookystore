const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());


app.get('/' , (req, res) => {
    res.send('bookystore')
})

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://yatagara:yatagara1a@cluster0.t7xbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // collect database
    const bookcollection = client.db("BookInventory").collection('books');

    app.post('/upload-book', async(req, res) => {
        const data = req.body;
        const result = await bookcollection.insertOne(data);
        res.send(result);
    })

    app.get("/all-books", async(req, res) => {
      const books = bookcollection.find();
      const result = await books.toArray();
      res.send(result);
    })

    //update books
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id)};
      const updatedDoc = {
          $set: {
              ...updateBookData
          }
      }
      const options = { upsert: true };

      // update now
      const result = await bookcollection.updateOne(filter, updatedDoc, options);
      res.send(result);
  })

        // delete
        app.delete("/book/:id", async (req, res) => {
          const id = req.params.id;
          const filter = { _id: new ObjectId(id) };
          const result = await bookcollection.deleteOne(filter);
          res.send(result);
      })


      // get a single book
      app.get("/book/:id", async (req, res) => {
          const id = req.params.id;
          const filter = { _id: new ObjectId(id) };
          const result = await bookcollection.findOne(filter);
          res.send(result)
      })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    
  }
}
run().catch(console.dir)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})