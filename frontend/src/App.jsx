import { useState } from 'react';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShortUrl('');
    setError('');
    try {
      const res = await fetch('/url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: longUrl })
      });
      const data = await res.json();
      if (data.shortId) {
        setShortUrl(`${window.location.origin}/${data.shortId}`);
      } else {
        setError(data.error || 'Error creating short URL');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Server error');
    }
  };

  return (
    <div style={{ margin: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          value={longUrl}
          onChange={e => setLongUrl(e.target.value)}
          placeholder="Enter long URL"
          required
          style={{ width: '300px', padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px', marginLeft: '8px' }}>Shorten</button>
      </form>
      {shortUrl && (
        <div style={{ marginTop: '20px' }}>
          Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </div>
      )}
      {error && (
        <div style={{ marginTop: '20px', color: 'red' }}>{error}</div>
      )}
    </div>
  );
}

export default App;