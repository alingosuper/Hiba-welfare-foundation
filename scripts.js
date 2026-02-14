// سائیڈ بار کنٹرول
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    if (sidebar.classList.contains('translate-x-full')) {
        sidebar.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
    } else {
        sidebar.classList.add('translate-x-full');
        overlay.classList.add('hidden');
    }
}

// اوورلے پر کلک کر کے بند کرنا
document.getElementById('overlay').onclick = toggleSidebar;

// سیکشنز دکھانا
function showSection(id) {
    document.querySelectorAll('main section').forEach(sec => {
        sec.classList.add('hidden');
        sec.classList.remove('active-section');
    });
    
    const target = document.getElementById(id);
    target.classList.remove('hidden');
    target.classList.add('active-section');
    
    // موبائل پر سائیڈ بار خودکار بند ہونا
    if (window.innerWidth < 1024) toggleSidebar();
}

// ایڈمن لاگ ان
function promptAdmin() {
    const pass = prompt("ایڈمن پاس ورڈ درج کریں:");
    if (pass === "admin123") {
        showSection('admin-panel');
    } else if (pass !== null) {
        alert("غلط پاس ورڈ!");
    }
}

// سیٹنگز اپلائی کرنا
function applySettings() {
    const newTitle = document.getElementById('updateTitleInput').value;
    if (newTitle) {
        document.getElementById('displayTitle').innerText = newTitle;
        alert("ٹائٹل کامیابی سے بدل دیا گیا!");
    }
}

// ویدر API (OpenWeatherMap)
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const display = document.getElementById('weatherDisplay');
    
    if (!city) return alert("براہ کرم شہر کا نام لکھیں");

    // میں یہاں ڈیمو کے لیے فرضی ڈیٹا ڈال رہا ہوں کیونکہ API Key آپ کو لگانی ہوگی
    display.classList.remove('hidden');
    display.innerHTML = `
        <h3 class="text-2xl font-bold">${city}</h3>
        <div class="text-6xl font-black my-4">24°C</div>
        <p class="font-medium opacity-80">صاف آسمان اور ٹھنڈی ہوا</p>
        <div class="grid grid-cols-2 mt-6 text-sm border-t border-white/20 pt-4">
            <div>نمی: 45%</div>
            <div>ہوا: 12km/h</div>
        </div>
    `;
}
