import React from 'react';
import './Modal.css'; // Import your CSS file for styling

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className='modal-close'>
        <button className="modal-close-button" onClick={onClose}>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.9142 11.9998L18.2072 7.70676C18.5982 7.31576 18.5982 6.68376 18.2072 6.29276C17.8162 5.90176 17.1842 5.90176 16.7933 6.29276L12.5002 10.5858L8.20725 6.29276C7.81625 5.90176 7.18425 5.90176 6.79325 6.29276C6.40225 6.68376 6.40225 7.31576 6.79325 7.70676L11.0862 11.9998L6.79325 16.2928C6.40225 16.6838 6.40225 17.3158 6.79325 17.7068C6.98825 17.9018 7.24425 17.9998 7.50025 17.9998C7.75625 17.9998 8.01225 17.9018 8.20725 17.7068L12.5002 13.4138L16.7933 17.7068C16.9882 17.9018 17.2443 17.9998 17.5002 17.9998C17.7562 17.9998 18.0122 17.9018 18.2072 17.7068C18.5982 17.3158 18.5982 16.6838 18.2072 16.2928L13.9142 11.9998Z" fill="#555F62"></path>
    <mask id="mask0_124_107351" maskUnits="userSpaceOnUse" x="6" y="5" width="13" height="13" style={{ maskType: 'luminance' }}>
      <path d="M13.9142 11.9998L18.2072 7.70676C18.5982 7.31576 18.5982 6.68376 18.2072 6.29276C17.8162 5.90176 17.1842 5.90176 16.7933 6.29276L12.5002 10.5858L8.20725 6.29276C7.81625 5.90176 7.18425 5.90176 6.79325 6.29276C6.40225 6.68376 6.40225 7.31576 6.79325 7.70676L11.0862 11.9998L6.79325 16.2928C6.40225 16.6838 6.40225 17.3158 6.79325 17.7068C6.98825 17.9018 7.24425 17.9998 7.50025 17.9998C7.75625 17.9998 8.01225 17.9018 8.20725 17.7068L12.5002 13.4138L16.7933 17.7068C16.9882 17.9018 17.2443 17.9998 17.5002 17.9998C17.7562 17.9998 18.0122 17.9018 18.2072 17.7068C18.5982 17.3158 18.5982 16.6838 18.2072 16.2928L13.9142 11.9998Z" fill="white"></path>
    </mask>
    <g mask="url(#mask0_124_107351)"></g>
  </svg>
        </button>
        </div>
        
        <div className='modal-text'>
        {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;