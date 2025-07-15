import React from 'react';

const URLForm = ({ input, onChange }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Long URL"
        value={input.url}
        onChange={(e) => onChange(input.id, 'url', e.target.value)}
        style={{ width: '300px', marginRight: '10px' }}
      />
      <input
        type="text"
        placeholder="Validity (minutes)"
        value={input.validity}
        onChange={(e) => onChange(input.id, 'validity', e.target.value)}
        style={{ width: '150px', marginRight: '10px' }}
      />
      <input
        type="text"
        placeholder="Preferred Shortcode"
        value={input.shortcode}
        onChange={(e) => onChange(input.id, 'shortcode', e.target.value)}
        style={{ width: '200px' }}
      />
    </div>
  );
};

export default URLForm;
