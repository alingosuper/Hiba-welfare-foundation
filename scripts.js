// موبائل مینیو ٹوگل
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.onclick = () => {
    mobileMenu.classList.toggle('hidden');
};

// سیکشن سوئچنگ
function showSection(id) {
    document.querySelectorAll('main section').forEach(sec => {
        sec.classList.add('hidden');
        sec.classList.remove('section-active');
    });
    
    const target = document.getElementById(id);
    target.classList.remove('hidden');
    target.classList.add('section-active');
    
    // موبائل مینیو خودکار بند کریں
    mobileMenu.classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ایڈمن لاگ ان
function promptAdmin() {
    const pass = prompt("ایڈمن پاس ورڈ درج کریں:");
    if (pass === "admin123") {
        showSection('admin-panel');
    } else if (pass !== null) {
        alert("رسائی ممنوع ہے!");
    }
}

// سیٹنگز اپلائی
function applySettings() {
    const newTitle = document.getElementById('updateTitleInput').value;
    if (newTitle) {
        document.getElementById('displayTitle').innerText = newTitle;
        document.title = newTitle;
        alert("کامیابی سے اپڈیٹ ہو گیا!");
    }
}





async function getDetailedWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = "YOUR_FREE_API_KEY"; // اپنی فری API Key یہاں لگائیں
    
    if(!city) return alert("براہ کرم شہر کا نام لکھیں");

    try {
        // 1. موجودہ موسم کا ڈیٹا
        const currentRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=ur`);
        const currentData = await currentRes.json();

        if(currentData.cod !== 200) throw new Error("شہر نہیں ملا");

        // 2. 5 دن کی پیش گوئی (Forecast)
        const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
        const forecastData = await forecastRes.json();

        // UI اپڈیٹ کریں
        document.getElementById('weatherDisplay').classList.remove('hidden');
        document.getElementById('cityName').innerText = currentData.name;
        document.getElementById('mainTemp').innerText = Math.round(currentData.main.temp) + "°";
        document.getElementById('weatherDesc').innerText = currentData.weather[0].description;
        document.getElementById('humidity').innerText = currentData.main.humidity + "%";
        document.getElementById('windSpeed').innerText = Math.round(currentData.wind.speed * 3.6) + " km/h";

        // فورکاسٹ گریڈ صاف کریں اور نیا ڈیٹا ڈالیں
        const grid = document.getElementById('forecastGrid');
        grid.innerHTML = "";

        // ہر 8ویں انڈیکس پر ڈیٹا لیں (OpenWeather 3 گھنٹے کا ڈیٹا دیتا ہے، ہمیں روزانہ کا چاہیے)
        for (let i = 0; i < forecastData.list.length; i += 8) {
            const day = forecastData.list[i];
            const date = new Date(day.dt * 1000).toLocaleDateString('ur-PK', {weekday: 'short'});
            
            grid.innerHTML += `
                <div class="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <p class="font-bold text-blue-900">${date}</p>
                    <div class="text-2xl my-2">🌡️</div>
                    <p class="font-black text-lg">${Math.round(day.main.temp)}°</p>
                    <p class="text-[10px] text-gray-400 font-bold uppercase">${day.weather[0].main}</p>
                </div>
            `;
        }

    } catch (error) {
        alert("مسئلہ: شہر کا نام درست لکھیں یا انٹرنیٹ چیک کریں");
    }
}
