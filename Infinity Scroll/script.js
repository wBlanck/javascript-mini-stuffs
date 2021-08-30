const imgContainer = document.getElementById('img-container');
const loader = document.getElementById('loader');

let photosArray = [];

// unsplash API 
const count = 10;
const apiKey = 'Dj1o4voJrT_ACdrSG1ZANkPbTtUyGAOrGcQNYdculP8';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// helper function to Set Attributes on DOM elements
function setAttributes(element, attributes){
  for(const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// create elements for links and photos, add to DOM
function displayPhotos() {
  // run function for each object in photosarray
  photosArray.forEach((photo) => {
    // create <a> to link to unsplash
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blanck',

    })
    // create <img> for photo 
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    })
/*     img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description); */
    // Put <img> inside <a>, then put both inside image container element
    item.appendChild(img);
    imgContainer.appendChild(item);
  });
}


// Get photos from unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    photosArray = await response.json();
    displayPhotos();
  } catch(error){
    //catch error
  }
}

//On load 
getPhotos();