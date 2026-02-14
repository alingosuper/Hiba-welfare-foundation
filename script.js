async function getWeather(city) {
    const apiKey = "YOUR_FREE_API_KEY";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        // یہاں ڈیٹا کو HTML میں شو کریں
        console.log(`درجہ حرارت: ${data.main.temp}°C`);
    } catch (error) {
        console.error("موسم کی معلومات حاصل کرنے میں ناکامی");
    }
}
