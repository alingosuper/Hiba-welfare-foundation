function initMap() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 14,
                center: userLocation
            });

            new google.maps.Marker({
                position: userLocation,
                map: map,
                title: "You are here"
            });
        });
    } else {
        alert("Geolocation not supported by your browser.");
    }
}

window.onload = initMap;

document.getElementById("bookRide").addEventListener("click", () => {
    const pickup = document.getElementById("pickup").value;
    const drop = document.getElementById("drop").value;
    alert(`Ride booked from ${pickup} to ${drop}`);
});
