import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center features">
    <div className="container">
      <div className="section-title">
        <h2>Key Features</h2>
             </div>
      <div className="container-card ">        
        {props.data
          ? props.data.map((item, i) => (
              <div key={i} className="card">
                <div className="grid-container">
                  <div className="icon">
                    <img src={item.icon} alt={item.title}/>
                    </div>
                    <div className="text">
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.text}</p>
                </div>
              </div>
              </div>
            ))
          : "loading"}
      </div>
    </div>
  </div>
  );
};
