import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center features">
    <div className="container">
      <div className="section-title">
             </div>
      <div className="container">        
        {props.data
          ? props.data.map((d, i) => (
              <div key={i} className="card">
                <h2>Meu Card</h2>
                <p>Este é um exemplo de card com bordas arredondadas e sombra.</p>
              </div>
            ))
          : "loading"}
      </div>
    </div>
  </div>
  );
};
