// unsplash API 
const count = 10;
const apiKey = 'Dj1o4voJrT_ACdrSG1ZANkPbTtUyGAOrGcQNYdculP8';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    console.log(data)

  } catch(error){
    //catch error
  }
}

//On load 
getPhotos();