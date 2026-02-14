async function getDetailedWeather() {
    const city = document.getElementById('cityInput').value;
    const content = document.getElementById('weatherContent');
    const loader = document.getElementById('wLoader');
    
    // اپنی OpenWeatherMap API Key یہاں ڈالیں (فی الحال میں نے ڈیمو کے لیے چھپا دی ہے)
    const apiKey = "YOUR_API_KEY_HERE"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=en`;

    if (!city) return alert("براہ کرم شہر کا نام لکھیں");

    content.classList.add('hidden');
    loader.classList.remove('hidden');

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") throw new Error("شہر نہیں ملا");

        // ڈیٹا بھرنا
        document.getElementById('wCity').innerText = data.name + ", " + data.sys.country;
        document.getElementById('wTemp').innerText = Math.round(data.main.temp) + "°C";
        document.getElementById('wDesc').innerText = data.weather[0].description;
        document.getElementById('wHumidity').innerText = data.main.humidity + "%";
        document.getElementById('wWind').innerText = (data.wind.speed * 3.6).toFixed(1) + " km/h";
        
        // وقت کی تبدیلی (Unix to Readable Time)
        const formatTime = (unix) => {
            let date = new Date(unix * 1000);
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        };
        
        document.getElementById('wSunrise').innerText = formatTime(data.sys.sunrise);
        document.getElementById('wSunset').innerText = formatTime(data.sys.sunset);

        loader.classList.add('hidden');
        content.classList.remove('hidden');

    } catch (error) {
        loader.classList.add('hidden');
        alert("مسئلہ: " + error.message);
    }
}
