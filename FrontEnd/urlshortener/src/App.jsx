import React from 'react';
import URLShortener from './components/URLShortener';

const App = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>URL Shortener</h1>
      <URLShortener />
    </div>
  );
};

export default App;