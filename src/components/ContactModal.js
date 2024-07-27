import React from "react";
import "./ContactModal.css"; // Import CSS for modal styling

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 style={{borderBottom:"1px solid #eef1f1", paddingBottom:"30px"}}>დაგვიკავშირდით</h2>
        <form className="contact-form">
            <p>დაგვიკავშირდით</p>
          <input type="text" name="name" required placeholder="სახელი:" />

          <input type="email" name="email" required placeholder="ელფოსტა:" />

          <input type="text" name="phone" placeholder="კომპანია:" />

          <textarea name="message" required placeholder="ტექსტი:"></textarea>
            <label for="agree">ვეთანხმები წესებსა და პირობებს</label>
          <div className="checkbox-container">
            <input type="checkbox" name="agree" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
