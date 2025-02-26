import React from "react";

export const Download = (props) => {
  return (
    <section id="download" className="text-center">
      <div className="download-text">
        <p> Available Now</p>
        <p>Download <span>LOCK IN! </span></p>
        <button className="btn-apple-download"></button>
                <button className="btn-android-download"></button>
      </div>
      <img src="img/download_img.png" alt="app available"/>
      {/* <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div> */}
    </section>
  );
};
