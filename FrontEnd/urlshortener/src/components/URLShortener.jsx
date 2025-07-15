import React, { useState } from 'react';
import { logEvent } from '../../../../middleware/logger'; 

const URLShortener = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = () => {
    if (!originalUrl.trim()) {
      logEvent('Empty URL submitted', 'warn');
      return;
    }

    const id = Math.random().toString(36).substr(2, 5);
    const short = `https://short.ly/${id}`;
    setShortUrl(short);

    logEvent(`Shortened: ${originalUrl} ➝ ${short}`);
  };

  return (
    <div>
      <input
        type="text"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        placeholder="Enter long URL"
      />
      <button onClick={handleShorten}>Shorten</button>

      {shortUrl && (
        <div>
          Shortened URL: <a href={shortUrl}>{shortUrl}</a>
        </div>
      )}
    </div>
  );
};

export default URLShortener;