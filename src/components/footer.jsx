import React from 'react';
import TermsModal from './termsModal';
import { Link } from 'react-router-dom';

export const Footer = (props) => {
  const { isOpen, setIsOpen } = props;

  return (
    <div id="footer" style={{ padding: '20px 0', width: '100%' }}>
      <hr />
      <div
        className="footer"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px',
          fontSize: '14px',
          padding: '10px 20px',
        }}>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
          }}>
          <Link
            to="/terms-of-service"
            style={{
              cursor: 'pointer',
              textDecoration: 'none',
            }}>
            Terms of Service
          </Link>
          <Link
            to="/privacy-policy"
            style={{
              cursor: 'pointer',
              textDecoration: 'none',
            }}>
            Privacy Policy
          </Link>
        </div>

        <p id="copyright" style={{ margin: 0 }}>
          Copyright &copy; Lock In. All Rights Reserved.
        </p>
      </div>

      {/* Modal */}
      <TermsModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
