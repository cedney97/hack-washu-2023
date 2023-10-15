
import OpenAI from "openai";
import { config } from "dotenv";
// import { defineEventHandler } from 'h3';
const openai = new OpenAI({
  apiKey : process.env.OPENAI_API_KEY,
});
    

export default defineEventHandler(async () => {
    try {
    const getChatGptApiResponse = await openai.chat.completions.create({
        model : "gpt-3.5-turbo",
        messages:[
          {
            "role" : "system", "content" : "you are a helpful assistant"
          },
          { 
            "role" : "user", "content" : "give me an itinerary of Seattle for two days with addresses"
          }],
    });
    console.log(getChatGptApiResponse.choices);

  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      console.error(error.status);  // e.g. 401
      console.error(error.message); // e.g. The authentication token you passed was invalid...
      console.error(error.code);  // e.g. 'invalid_api_key'
      console.error(error.type);  // e.g. 'invalid_request_error'
      console.log("connected")
    } else {
      // Non-API error
      console.log(error);
    }
  }
});
