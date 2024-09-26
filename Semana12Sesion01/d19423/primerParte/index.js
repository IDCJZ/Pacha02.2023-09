const { MongoClient } = require('mongodb')

var url = "mongodb+srv://rpineda:pacha2023@cluster0.tk3tvfe.mongodb.net/";
const client = new MongoClient(url);
const database = client.db("sample_mflix");
const movies = database.collection("movies");

async function consultarUno() {
    try {

        const query = { title: 'Back to the Future' };
        const options = {
            // Sort matched documents in descending order by rating
            sort: { "imdb.rating": -1 },
            // Include only the `title` and `imdb` fields in the returned document
            projection: { _id: 0, title: 1, imdb: 1 },
        };
        // Execute query
        const movie = await movies.findOne(query, options);
        // Print the document returned by findOne()
        console.log(movie);
    } finally {
        await client.close();
    }
}

async function consultarVarios() {

    try {
        const query = { runtime: { $lt: 15 } };
        const options = {
            // Sort returned documents in ascending order by title (A->Z)
            sort: { title: 1 },
            // Include only the `title` and `imdb` fields in each returned document
            projection: { _id: 0, title: 1, imdb: 1 },
        };
        // Execute query
        const cursor = movies.find(query, options);


        if ((await movies.countDocuments(query)) === 0) {
            console.log("No documents found!");
        }
        // Print returned documents
        for await (const doc of cursor) {
            console.dir(doc);
        }
    } finally {
        await client.close();
    }
}
async function insertatUno() {
    try {
        // Connect to the "insertDB" database and access its "haiku" collection
        const database = client.db("insertDB");
        const haiku = database.collection("haiku");

        // Create a document to insert
        const doc = {
            title: "Record of a Shriveled Datum",
            content: "No bytes, no problem. Just insert a document, in MongoDB",
        }
        // Insert the defined document into the "haiku" collection
        const result = await haiku.insertOne(doc);
        // Print the ID of the inserted document
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
        // Close the MongoDB client connection
        await client.close();
    }
}
async function insertarVarios() {
    try {
      // Get the database and collection on which to run the operation
      const database = client.db("insertDB");
      const foods = database.collection("foods");
      // Create an array of documents to insert
      const docs = [
        { name: "cake", healthy: false },
        { name: "lettuce", healthy: true },
        { name: "donut", healthy: false }
      ];
      // Prevent additional documents from being inserted if one fails
      const options = { ordered: true };
      // Execute insert operation
      const result = await foods.insertMany(docs, options);
     
      // Print result
      console.log(`${result.insertedCount} documents were inserted`);
    } finally {
      await client.close();
    }
  }

  async function actualizarUno() {
    try {
      const database = client.db("sample_mflix");
      const movies = database.collection("movies");
      // Create a filter for movies with the title "Random Harvest"
      const filter = { title: "Random Harvest" };
      /* Set the upsert option to insert a document if no documents match
      the filter */
      const options = { upsert: true };
      // Specify the update to set a value for the plot field
      const updateDoc = {
        $set: {
          plot: `A harvest of random numbers, such as: ${Math.random()}`
        },
      };
      // Update the first document that matches the filter
      const result = await movies.updateOne(filter, updateDoc, options);
      
      // Print the number of matching and modified documents
      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
      );
    } finally {
      // Close the connection after the operation completes
      await client.close();
    }
  }
  async function actualizarVarios() {
    try {
      // Get the "movies" collection in the "sample_mflix" database
      const database = client.db("sample_mflix");
      const movies = database.collection("movies");
      // Create a filter to update all movies with a 'G' rating
      const filter = { rated: "G" };
      // Create an update document specifying the change to make
      const updateDoc = {
        $set: {
          random_review: `After viewing I am ${
            100 * Math.random()
          }% more satisfied with life.`,
        },
      };
      // Update the documents that match the specified filter
      const result = await movies.updateMany(filter, updateDoc);
      console.log(`Updated ${result.modifiedCount} documents`);
    } finally {
      // Close the database connection on completion or error
      await client.close();
    }
  }



  async function modificarUno() {
    try {
      
      // Get the database and collection on which to run the operation
      const database = client.db("sample_mflix");
      const movies = database.collection("movies");
      // Create a query for documents where the title contains "The Cat from"
      const query = { title: { $regex: "The Cat from" } };
      
      // Create the document that will replace the existing document
      const replacement = {
        title: `The Cat from Sector ${Math.floor(Math.random() * 1000) + 1}`,
      };
      // Execute the replace operation
      const result = await movies.replaceOne(query, replacement);
      
      // Print the result 
      console.log(`Modified ${result.modifiedCount} document(s)`);
    } finally {
      await client.close();
    }
  }

  async function borrarUno() {
    try {
      const database = client.db("sample_mflix");
      const movies = database.collection("movies");
      /* Delete the first document in the "movies" collection that matches
      the specified query document */
      const query = { title: "Annie Hall" };
      const result = await movies.deleteOne(query);
      /* Print a message that indicates whether the operation deleted a
      document */
      if (result.deletedCount === 1) {
        console.log("Successfully deleted one document.");
      } else {
        console.log("No documents matched the query. Deleted 0 documents.");
      }
    } finally {
      // Close the connection after the operation completes
      await client.close();
    }
  }
  // Run the program and print any thrown exceptions
  async function borrarVarios() {
    try {
      const database = client.db("sample_mflix");
      const movies = database.collection("movies");
      /* Delete all documents that match the specified regular
      expression in the title field from the "movies" collection */
      const query = { title: { $regex: "Santa" } };
      const result = await movies.deleteMany(query);
      // Print the number of deleted documents
      console.log("Deleted " + result.deletedCount + " documents");
    } finally {
      // Close the connection after the operation completes
      await client.close();
    }
  }
  // Run the program and print any thrown exceptions
  borrarVarios().catch(console.dir);

  //  borrarUno().catch(console.dir);
  
//  modificarUno().catch(console.dir);
//  actualizarVarios().catch(console.dir);
  
//  actualizarUno().catch(console.dir);
//  insertarVarios().catch(console.dir);
//insertatUno().catch(console.dir);
// consultarUno().catch(console.dir);
//consultarVarios().catch(console.dir());
