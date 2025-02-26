import React, { useEffect, useState } from 'react';
import illustration from '../assets/images/illustration-working.svg';
import UrlList from './UrlList';


function Hero() {

  const [input, setInput] = useState({url: ""});
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.url) {
      setError(true);
    } else {
      setError(false);
    }
  }

  const shortenUrl = async (longUrl) => {
    try {
      const response = await fetch('https://cleanuri.com/api/v1/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ url: longUrl }),
      });

      const data = await response.json();
      if (data.result_url) {
        setList([...list, { longUrl, shortUrl: data.result_url }]);
        setInput({ url: "" }); // Clear input after shortening
      }
    } catch (error) {
      console.error("Error shortening URL:", error);
    }
  };

  return (
    <>
    <section id='hero'>
    <div className="header">
      <div className='hero-info'>
        <h1>More than just shorter links</h1>
        <p>Build your brand’s recognition and get detailed insights 
        on how your links are performing.</p>
        <button>Get Started</button>
      </div>
      <div className='hero-img'>
        <img src={illustration} alt="illustration image" />
      </div>
    </div>
      <form className="link-input" onSubmit={handleSubmit}>
        <div className="form">
          <input type="url" name='url' value={input.url || ""} onChange={(e) => setInput({ ...input, url: e.target.value })} placeholder='Shorten a link here...' className={error ? "url-error" : ""}/>
          <div className='button'>
            <button type="submit">Shorten It!</button>
            <div className='overlay'></div>
          </div>
        </div>
        {error && <div className='error'>Please add a link</div>}
      </form>
      <UrlList list={list} />
    </section>
    </>
  )
}

export default Hero;
