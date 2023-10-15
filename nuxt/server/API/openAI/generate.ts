import axios from 'axios';




const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/engines/davinci/completions';
const OPENAI_AUTH_TOKEN = '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'; // Store this securely, never expose to client


const serverKey = 'AIzaSyAF5niDHCDCD640Vyx7Tv1u19-lUXL9jpw';
const fields = 'name,rating,formatted_phone_number,photos,reviews,address_components,icon,price_level,website,adr_address,formatted_address ,opening_hours, price_level';


async function getGptResponse(prompt: string) {
try {
const response = await axios.post(
OPENAI_API_ENDPOINT,
{ prompt },
{
headers: {
'Authorization': `Bearer ${OPENAI_AUTH_TOKEN}`,
'Content-Type': 'application/json',
},
}
);
return response.data.choices[0]?.text.trim();
} catch (err) {
if (axios.isAxiosError(err)) {
throw new Error(err.response?.data?.error || 'Unknown API error');
}
throw err;
}
}


export default defineEventHandler(async (event) => {
try {
const url = new URL(event.req.url ?? '', 'http://localhost');
const prompt = url.searchParams.get('prompt');
if (!prompt) {
throw new Error('Missing prompt parameter');
}
const gptResponse = await getGptResponse(prompt);
return { response: gptResponse };
} catch (error) {
console.error('Error in event handler:', error);
if (error instanceof Error) {
return { error: error.message };
} else {
return { error: 'An unknown error occurred' };
}
}
});
