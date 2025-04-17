import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Navigation = (props) => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };
  return (
    <nav id="menu" className="navbar navbar-default">
      <div className="navbar-header">
        <img
          src="img/lockin_logo-removebg.png"
          style={{
            cursor: 'pointer',
          }}
          onClick={() => goToHome()}
          className="navbar-brand page-scroll"
          href="#page-top"
          alt="logo lock in"
        />
        <a href="#download" className="btn-download">
          Download
        </a>
      </div>
    </nav>
  );
};
