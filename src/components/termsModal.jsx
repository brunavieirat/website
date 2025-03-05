import PrivacyPolicy from "./privacyPolicy";

const TermsModal = ({isOpen, setIsOpen, onClose}) => {
return (
    <>
    {isOpen && (
      <div className="modal-overlay">
        <div className="modal-container">
          <div className="modal-header">
            <h2>Privacy Policy</h2>
            <button className="close-btn" onClick={onClose}>×</button>
          </div>
          <div className="modal-body">
            <PrivacyPolicy/>
          </div>
        </div>
      </div>
    )}
  </>
);
};

export default TermsModal;
