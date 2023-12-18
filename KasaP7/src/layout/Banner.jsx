import React from 'react'
import "../styles/Banner.scss";

function Banner() {
  return (
    <div className="banner">
      <img src="IMG1.png" alt="Photo falaise" />
      <div className='banner_text'>
          <h1 className='line-mobile'>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Banner;