import React from 'react';
import { urlData } from '../data/urls';

const StatsPage = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Statistics</h2>
      {urlData.length === 0 ? (
        <p>No URLs shortened yet.</p>
      ) : (
        <ul>
          {urlData.map((res, idx) => (
            <li key={idx}>
              <strong>Original:</strong> {res.original}<br />
              <strong>Shortened:</strong> <a href={res.shortUrl} target="_blank">{res.shortUrl}</a><br />
              <strong>Expires:</strong> {res.expiry}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StatsPage;
