const showLat = document.querySelector("#Lat");
const showLong = document.querySelector("#Long");
const Api_key = "8285fc8ca80d301e32029d1b1f619b07";
const api_url = "https://api.openweathermap.org/data/2.5/weather?";



function getLocation(position) {
  const { latitude, longitude } = position.coords;
  showLat.textContent = `Lat:${latitude}`;
  showLong.textContent = `Lat:${longitude}`;
    console.log(latitude +","+ longitude)
/////////////////////////////////////////////////
const location = { lat: latitude, lng: longitude };

  // Create a map centered at the user's location
  const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: location
  });

  // Add a marker at the user's location
  const marker = new google.maps.Marker({
      position: location,
      map: map
  });
}

const name = document.querySelector('#name');
const Wind_speed = document.getElementById('windSpeed');
const humidity = document.getElementById('humid');
const time_zome = document.getElementById('gmt');
const pressure = document.getElementById('pressure');
const wind_direc = document.getElementById('wind_D');
const uv = document.getElementById('uv');
const feel = document.getElementById('feel');

navigator.geolocation.getCurrentPosition(mylocation, noLocation);

async function mylocation(position) {
  const { latitude, longitude } = position.coords;
  //console.log(latitude +","+ longitude)
  const response = await fetch(api_url + `lat=${latitude}&lon=${longitude}&appid=${Api_key}`)
  let data = await response.json();
  //console.log(data);
  name.textContent = `Location : ${data.name}`;
  windSpeed.textContent = `Wind Speed: ${data.wind.speed}kmph`;
  humid.textContent = `Humidity : ${data.main.humidity}`;
  gmt.textContent = `Time zome : ${data.timezone}`;
  pressure.textContent = `Pressure : ${data.main.pressure}`;
  wind_D.textContent = `wind Direction : ${data.wind.deg}`;
  uv.textContent = `UV Index : ${data.clouds.cod}`;
  feel.textContent = `Feels like : ${data.main.feels_like}`; 



}
mylocation();
function noLocation() {}

function notGetLocation() {
  console.log("defolt");
}

window.addEventListener("load", async () => {
  navigator.geolocation.getCurrentPosition(getLocation, notGetLocation);
});


































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
