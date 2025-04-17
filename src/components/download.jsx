import React from 'react';

export const Download = (props) => {
  return (
    <section id="download" className="text-center">
      <div className="download-text">
        <p> Available Now</p>
        <p>
          Download <span>LOCK IN! </span>
        </p>
        <div className="container-button">
          <button className="btn-apple-download"></button>
          <button className="btn-android-download"></button>
        </div>
      </div>
      <img src="img/download_img.png" alt="app available" />
    </section>
  );
};
