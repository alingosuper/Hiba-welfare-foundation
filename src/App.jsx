import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/* اگر کوئی پیج نہ ملے تو یہ چلے گا */}
        <Route path="*" element={<div style={{color: 'red'}}>404 - صفحہ دستیاب نہیں ہے</div>} />
      </Routes>
    </Router>
  );
}
