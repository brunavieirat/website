import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
              <div className="intro-text">
                <div className="intro-text-container">
                <h1>
                  <span>Lock In </span> {props.data && props.data.title}
                  <br></br>
                  {props.data && props.data.title2}
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p><div>
                <button className="btn-apple-download"></button>
                <button className="btn-android-download"></button>
                </div>
                
                </div>
                <img src="img/header_phone.png" alt="app"/>
        </div>
      </div>
    </header>
  );
};
