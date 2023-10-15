
const serverKey = 'AIzaSyAF5niDHCDCD640Vyx7Tv1u19-lUXL9jpw';

const resolvePhoto = async (photoReference: string) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=${photoReference}&maxwidth=800&key=${serverKey}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch place details. Status: ${response.status}`);
    }
    return response
  } catch (error) {
    console.error('Error fetching place details:', error);
    throw error; // Rethrow the error to be handled by the calling code
  }
};

export default defineEventHandler(async (event) => {
  try {
    const url = new URL(event.req.url ?? '', 'http://localhost');
    const photoReference = url.searchParams.get('photoReference');

    if (!photoReference) {
      throw new Error('Missing photoReference parameter');
    }

    const photo = await resolvePhoto(photoReference);
    return photo
  } catch (error) {
    console.error('Error in event handler:', error);
    return { error: error }; // Return an error response
  }
});
