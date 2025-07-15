import './App.css'; // ✅ Import global CSS
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShortenerPage from './pages/ShortenerPage';
import StatsPage from './pages/StatsPage';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Shorten URLs</Link>
        <Link to="/stats">Statistics</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<ShortenerPage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
