import { Place } from "~~/types/Google/googlePlace.type";

const serverKey = 'AIzaSyAF5niDHCDCD640Vyx7Tv1u19-lUXL9jpw';
// const fields = 'name,rating,geometry,formatted_phone_number,photos,reviews,address_components,icon,price_level,website,adr_address,formatted_address,opening_hours,price_level';
const fields = 'name,geometry,formatted_address,opening_hours,place_id'

const findPlace = async (name: string) => {
  try {
    const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=${fields}&input=${name}&inputtype=textquery&key=${serverKey}`
      );

    if (!response.ok) {
      throw new Error(`Failed to fetch place details. Status: ${response.status}`);
    }

    const res = await response.json();
    return res as Place;
  } catch (error) {
    console.error('Error fetching place details:', error);
    throw error;
  }
};

export default defineEventHandler(async (event) => {
  try {
    const url = new URL(event.req.url ?? '', 'http://localhost');
    const name = url.searchParams.get('name');

    if (!name) {
      throw new Error('Missing name parameter');
    }
    
    const placeDetails = await findPlace(name);
    return placeDetails;
  } catch (error) {
    console.error('Error in event handler:', error);
    return { error: error };
  }
});
