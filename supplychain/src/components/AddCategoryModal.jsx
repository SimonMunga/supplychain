import React, { useState } from 'react';
<<<<<<< HEAD:supplychain/src/Updatemodal.js
import './updatemodal.css';
import apiService from './service/apiService';
=======
import '../styles/modal.css';
import apiService from '../service/apiService';
>>>>>>> 83f4626eac45926fa8e68b01f6f794eb58836c83:supplychain/src/components/AddCategoryModal.jsx

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
<<<<<<< HEAD:supplychain/src/Updatemodal.js
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
=======
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
>>>>>>> 83f4626eac45926fa8e68b01f6f794eb58836c83:supplychain/src/components/AddCategoryModal.jsx
        </form>
      </div>
    </div>
  );
};

export default Modal;
