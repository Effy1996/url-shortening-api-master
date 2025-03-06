import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

function UrlList({ url }) {
  const [copied, setCopied] = useState(false);

  //Save the shortUrl to the clipboard and return state to false after delay
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(list.shortUrl);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      throw new Error("failed to copy:" + err);
    }
  };
  return (
    <>
    
      <div key={index} className='url-result'>
        <p className="max-md:border-b-2 border-ngray">{url.longUrl}</p>
        <span className="flex max-md:flex-col md:items-center gap-4">
          <p className="text-cyan">
            <a href={url.shortUrl} target="_blank">
              {url.shortUrl}
            </a>
          </p>
          <button onClick={handleCopy} className={copied ? "bg-navyblue" : "bg-cyan"}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </span>
        <button onClick={() => copyToClipboard(shortUrl)}>copy</button>
      </div>
       
    
    
    </>
  )
}

UrlList.propTypes = {
  link: PropTypes.shape({
    longUrl: PropTypes.string.isRequired,
    shortUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default UrlList;
