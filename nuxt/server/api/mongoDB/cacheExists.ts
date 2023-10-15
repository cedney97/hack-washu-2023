import { MongoClient } from 'mongodb';

 async function main( prompt_item : string) {
  const uri = 'https://us-east-2.aws.data.mongodb-api.com/app/data-xlilu/endpoint/data/v1'; // Replace with your MongoDB URI
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('previous_locations'); // Replace with your database name
    const collection = database.collection('cache'); // Replace with your collection name

    // Query data
    const queryResult = await collection.findOne({ prompt: prompt_item});
    if(queryResult) {
      
      return queryResult.response;
    }
  } finally {
    await client.close();
    return null;
  }
}

export default defineEventHandler(async (event) => {
    try {
      const url = new URL(event.req.url ?? '', 'http://localhost');
      const prompt = url.searchParams.get('Prompt');
      console.log(prompt)
      if(prompt) {
        return main(prompt);
      }
    } catch (error) {
      if (error instanceof MongoClient) {

      } else {
        // Non-API error
        console.log(error);
      }
    }
  });
  