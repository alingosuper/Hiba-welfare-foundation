// Example using dummy data, replace with backend API call later
window.onload = () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Dummy API fetch example
            // Replace URL with your backend API for weather
            fetch(`http://localhost:5000/api/weather?lat=${lat}&lon=${lon}`)
            .then(res => res.json())
            .then(data => {
                document.getElementById("location").innerText = data.name;
                document.getElementById("temp").innerText = data.main.temp + "°C";
                document.getElementById("condition").innerText = data.weather[0].description;
            }).catch(err => console.log(err));
        });
    } else {
        alert("Geolocation not supported.");
    }
};
