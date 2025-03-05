import React from "react";
import TermsModal from "./termsModal";

export const Footer = (props) => {
  const { isOpen, setIsOpen } = props;
  
  return (
    <div>
      <div id="footer">
      <hr />
        <div className="footer" >
          <div>         
          {/* <a href="/" alt="Terms and conditions">Terms and conditions</a> */}
          <a href="/" onClick={(e) => { e.preventDefault();
           setIsOpen(true)}} alt="Privacy Policy">Privacy Policy</a>
          </div>
          <p id="copyright">
           Copyright &copy; Lock In. All Rights Reserved.
          </p>


      {/* Modal */}
      <TermsModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    

        </div>
      </div>
    </div>
  );
};
