import React, { useEffect, useState } from 'react';
import illustration from '../assets/images/illustration-working.svg';
import UrlList from './UrlList';


function Hero() {

  const [longUrl, setLongUrl] = useState({ url:"" });
  const [error, setError] = useState(false);
  const [urls, setUrls] = useState(() => {
    const savedUrls = localStorage.getItem("shortenedLinks"); 
    return savedUrls ? JSON.parse(savedUrls) : [];
  });

  useEffect(() => {
    localStorage.setItem("shortenedLinks", JSON.stringify(urls));
  }, [urls]);

  const handleSubmit = (e) => {
    e.preventDefault();
    shortenUrl();
    if (!longUrl) {
      setError(true);
    } else {
      setError(false);
    }
  }

  const shortenUrl = async () => {
    setError(false);

    if (!longUrl.url.trim() || !longUrl.url.startsWith("https")) {
      setError("Please enter a valid URL");
      return;
    }

      try {
        const response = await fetch("/api/server", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: longUrl }),
        });
        if (!response.ok) {
          throw new Error("Failed to shorten URL");
        }

        const data = await response.json();
        setUrls((prev) => [
          { longUrl: inputUrl, shortUrl: data.result_url },
          ...prev,
        ]);
      } catch (err) {
        setError(err.message);
      }

      setLongUrl(""); //clear input on click
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
      <div className="link-input">
        <div className="form">
          <input type="url" name='url' value={longUrl.url || ""} onChange={(e) => setLongUrl({ ...longUrl, url: e.target.value })} placeholder='Shorten a link here...' className={error ? "url-error" : ""}/>
          <div className='button'>
            <button type="submit" onClick={handleSubmit}>Shorten It!</button>
            <div className='overlay'></div>
          </div>
        </div>
        {error && <div className='error'>Please add a link</div>}
      </div>
      <div className="link-list">
      {urls.map((url, index) => (
        <UrlList url={url} key={index}/>
      ))}
      </div>
      
    </section>
    </>
  )
}

export default Hero;
