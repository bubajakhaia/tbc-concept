import React from "react";
import "./ContactModal.css"; // Import CSS for modal styling

const SubscribeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 style={{borderBottom:"1px solid #eef1f1", paddingBottom:"30px"}}>გამოიწერე შენი ნაკრები</h2>
        <form className="contact-form">
            <p>გამოიწერე შენი ნაკრები</p>
          <input type="text" name="name" required placeholder="სახელი და გვარი:" />


          <input type="tel" name="phone" placeholder="მობილურის ნომერი:" />

          <select style={{ padding:"15px"}} >
            <option>ციფრული</option>
            <option>პრემიუმი</option>
            <option>360</option>
          </select>
            <label for="agree">ვეთანხმები წესებსა და პირობებს</label>
          <div className="checkbox-container">
            <input id="agree" type="checkbox" name="agree" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeModal;
