import React from 'react';
import './SuccessModal.css';

const SuccessModal = ({ isOpen, onClose, frequency }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="success-modal">
        <div className="success-content">
          <div className="success-icon">🎉</div>
          <h2>Wonderful News!</h2>
          <p className="success-message">
            Get ready for an amazing adventure of learning and fun with your little one!
          </p>
          <div className="delivery-info">
            {frequency === 'daily' ? (
              <p>✨ Your daily dose of magic will arrive each evening at 8 PM! ✨</p>
            ) : (
              <p>📦 Your weekly treasure chest of activities will arrive every Sunday evening! 📦</p>
            )}
          </div>
          <p className="email-note">
            Please check your inbox for a special welcome message 📧
          </p>
          <div className="next-steps">
            <p>What's next?</p>
            <ul>
              <li>🎯 Set up a special play area</li>
              <li>⏰ Schedule your daily/weekly activity time</li>
              <li>📸 Get ready to capture magical moments</li>
            </ul>
          </div>
          <button className="close-button" onClick={onClose}>
            Let's Begin! 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal; 