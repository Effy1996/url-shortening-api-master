import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UrlList({ list }) {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

    const copyToClipboard = (url) => {
      navigator.clipboard.writeText(url);
      alert("Copied to clipboard!");
    };
  return (
    <>
    {list.map(({ longUrl, shortUrl }, index) => (
      <div key={index} className='url-result'>
        <p>Shortened URL: {shortUrl}</p>
        <button onClick={() => copyToClipboard(shortUrl)}>copy</button>
      </div>
       
    ))}
    {shortUrl && <p>Shortened URL: {shortUrl}</p>}
    </>
  )
}

export default UrlList;
