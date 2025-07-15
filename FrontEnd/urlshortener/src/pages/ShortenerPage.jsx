import React, { useState } from 'react';
import URLForm from '../components/URLForm';
import URLList from '../components/URLList.jsx';
import { logEvent } from '../../../../middleware/logger.js';
import { urlData } from '../data/urls';

const ShortenerPage = () => {
  const [inputs, setInputs] = useState([{ id: 1, url: '', validity: '', shortcode: '' }]);
  const [results, setResults] = useState([]);

  const handleAddRow = () => {
    if (inputs.length >= 5) return;
    setInputs([...inputs, { id: Date.now(), url: '', validity: '', shortcode: '' }]);
  };

  const handleChange = (id, field, value) => {
    setInputs(inputs.map(i => i.id === id ? { ...i, [field]: value } : i));
  };

  const handleShorten = () => {
    const newResults = [];
    for (const input of inputs) {
      try {
        if (!input.url.trim()) throw new Error('Empty URL');
        new URL(input.url); 
        if (input.validity && isNaN(parseInt(input.validity))) throw new Error('Invalid validity');

        const shortcode = input.shortcode || Math.random().toString(36).substr(2, 6);
        const expiry = input.validity ? Date.now() + parseInt(input.validity) * 60000 : null;
        const shortUrl = `https://short.ly/${shortcode}`;

        const result = {
          original: input.url,
          shortUrl,
          expiry: expiry ? new Date(expiry).toLocaleString() : 'Never',
        };

        newResults.push(result);
        urlData.push(result); 
        logEvent(`Shortened: ${input.url} → ${shortUrl}`);
      } catch (err) {
        logEvent(`Validation error: ${err.message}`, 'warn');
        alert(`Error for "${input.url}": ${err.message}`);
        return;
      }
    }
    setResults(newResults);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Shorten URLs</h2>
      {inputs.map((input, idx) => (
        <URLForm key={input.id} input={input} onChange={handleChange} />
      ))}
      <button onClick={handleAddRow} disabled={inputs.length >= 5}>Add URL</button>
      <br /><br />
      <button onClick={handleShorten}>Shorten All</button>
      <URLList results={results} />
    </div>
  );
};

export default ShortenerPage;
