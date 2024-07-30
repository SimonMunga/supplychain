import React, { useState } from 'react';
import './updatemodal.css';
import apiService from './service/apiService';

const Modal = ({ isVisible, onClose, rawMaterialId }) => {
  const [quantity, setQuantity] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    apiService.updaterawmaterials({"id":rawMaterialId, "quantity":quantity })
      .then(response => {
        alert(response.data.message);
        setQuantity(''); // Clear the input field
        onClose(); // Close the modal
      })
      .catch(error => {
        alert(error);
      });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Update Raw Material Quantity</h2>
        <form onSubmit={handleSave}>
          <label>Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required 
          />
          <br />
          <br />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
