import { Place } from "~~/types/Google/googlePlace.type";

const serverKey = 'AIzaSyAF5niDHCDCD640Vyx7Tv1u19-lUXL9jpw';
const fields = 'name,rating,formatted_phone_number,photos,reviews,address_components,icon,price_level,website,adr_address';

const getPlaceDetails = async (placeId: string) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?fields=${fields}&place_id=${placeId}&key=${serverKey}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch place details. Status: ${response.status}`);
    }

    const res = await response.json();
    console.log('res: ', res);

    return res as Place;
  } catch (error) {
    console.error('Error fetching place details:', error);
    throw error; // Rethrow the error to be handled by the calling code
  }
};

export default defineEventHandler(async (event) => {
  try {
    const url = new URL(event.req.url ?? '', 'http://localhost');
    const placeId = url.searchParams.get('placeId');

    if (!placeId) {
      throw new Error('Missing placeId parameter');
    }

    const placeDetails = await getPlaceDetails(placeId);
    return placeDetails;
  } catch (error) {
    console.error('Error in event handler:', error);
    return { error: error }; // Return an error response
  }
});
