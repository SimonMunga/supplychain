import React, { useState } from 'react';
import '../styles/modal.css';
import apiService from '../service/apiService';

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
    <div className="modal-overlay">
      <div className="modalProduct">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add Category</h2>
        <form onSubmit={handleSave}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required // Optional: add validation to make the field required
          />
          <div className="d-flex">
          <button type="button" className="btn btn-warning m-3" onClick={onClose}>Close</button>
          <button type="submit" className="btn btn-primary m-3"onClick={handleSave}>Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
