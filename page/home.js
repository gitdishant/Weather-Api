const button = document.getElementById('getLocation');

const showLat = document.querySelector("#Lat");
const showLong = document.querySelector("#Long");

function getLocation(position)  {
    const {latitude, longitude} = position.coords;
    console.log(position)
}

function notGetLocation() {
    console.log("ther some itss")
}

button.addEventListener('click', async () => {
    navigator.geolocation.getCurrentPosition(getLocation , notGetLocation)
})

