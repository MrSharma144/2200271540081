import React from 'react';

const URLList = ({ results }) => {
  if (!results.length) return null;

  return (
    <div>
      <h3>Shortened URLs:</h3>
      <ul>
        {results.map((res, index) => (
          <li key={index}>
            <strong>Original:</strong> {res.original}<br />
            <strong>Shortened:</strong> <a href={res.shortUrl} target="_blank">{res.shortUrl}</a><br />
            <strong>Expires:</strong> {res.expiry}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default URLList;