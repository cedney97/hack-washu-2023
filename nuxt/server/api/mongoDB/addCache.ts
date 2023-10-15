import { MongoClient } from 'mongodb';
import { itinerary } from '~~/types/ChatGPT/gptData.type';

 async function main( Prompt : string, Response :itinerary) {
  const uri = 'https://us-east-2.aws.data.mongodb-api.com/app/data-xlilu/endpoint/data/v1'; // Replace with your MongoDB URI
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('previous_locations'); // Replace with your database name
    const collection = database.collection('cache'); // Replace with your collection name

    // Perform MongoDB operations here
    const document = { prompt : Prompt, response : Response };
    await collection.insertOne(document);
    console.log('Document inserted.');
  } finally {
    await client.close();
  }
}

export default defineEventHandler(async (event) => {
    try {
      const url = new URL(event.req.url ?? '', 'http://localhost');
      const prompt = url.searchParams.get('Prompt');
      const response = url.searchParams.get('response')
      console.log(prompt)
       //@ts-ignore
      main(prompt, response);
    } catch (error) {
      if (error instanceof MongoClient) {
      } else {
        // Non-API error
        console.log(error);
      }
    }
  });