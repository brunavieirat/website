import React from "react";

export const Footer = (props) => {
  
  return (
    <div>
      <div id="footer">
      <hr />
        <div className="footer" >
          <div>         
          {/* <a href="/" alt="Terms and conditions">Terms and conditions</a> */}
          <a href="/" alt="Privacy Policy">Privacy Policy</a>
          </div>
          <p id="copyright">
           Copyright &copy; Lock In. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
