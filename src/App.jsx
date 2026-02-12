// Path: src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen'; // راستہ چیک کریں

function App() {
  return (
    <Router>
      <Routes>
        {/* یہ لائن یقینی بنائے گی کہ پہلا صفحہ AlinGo کا ہوم پیج ہو */}
        <Route path="/" element={<HomeScreen />} />
        
        {/* اگر کوئی غلط یو آر ایل لکھے تو یہ اسے ہوم پر بھیج دے گا یا میسج دے گا */}
        <Route path="*" element={<div style={{color: 'red', textAlign: 'center', marginTop: '50px'}}>
            <h1>404</h1>
            <p>AlinGo: Page Not Found</p>
            <a href="/" style={{color: 'white'}}>Go Back Home</a>
          </div>} />
      </Routes>
    </Router>
  );
}

export default App;
