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

// ویدر API ڈیمو
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const result = document.getElementById('weatherResult');
    
    if(!city) return alert("شہر کا نام لکھیں");

    result.classList.remove('hidden');
    result.innerHTML = `
        <div class="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-3xl text-white text-center shadow-lg animate-fade-in">
            <h3 class="text-2xl font-bold">${city}</h3>
            <div class="text-7xl font-black my-4">22°C</div>
            <p class="opacity-80">صاف آسمان اور خوشگوار ہوا</p>
        </div>
    `;
}
