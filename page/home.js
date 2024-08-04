

const showLat = document.querySelector("#Lat");
const showLong = document.querySelector("#Long");

function getLocation(position)  {
    const {latitude, longitude} = position.coords;
    showLat.textContent = `Lat:${latitude}`;
    showLong.textContent = `Lat:${longitude}`;
    console.log(position)
}

function notGetLocation() {
    console.log("ther some it")
}

window.addEventListener('load', async () => {
    
    navigator.geolocation.getCurrentPosition(getLocation , notGetLocation)
})

/*function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Create a map centered at the user's location
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: latitude, lng: longitude },
    zoom: 14, // Adjust the zoom level as needed
  });

  // Add a marker at the user's location
  new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    map: map,
    title: 'Your Location',
  });
}

// Request the user's location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.error('Geolocation is not supported by this browser.');
}*/
