import { MongoClient } from 'mongodb';

async function main() {
  const uri = 'https://us-east-2.aws.data.mongodb-api.com/app/data-xlilu/endpoint/data/v1'; // Replace with your MongoDB URI
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('previous_locations'); // Replace with your database name
    const collection = database.collection('cache'); // Replace with your collection name

    // Perform MongoDB operations here
    const document = { prompt : "This is a test chatgpt prompt", response : "" };
    await collection.insertOne(document);
    console.log('Document inserted.');

    // Query data
    const queryResult = await collection.findOne({ name: 'John' }, );
    console.log('Query result:', queryResult);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
