import React, { useState } from 'react';
import './rawmaterialsmodal.css'; 
import apiService from './service/apiService';

const AddRawMaterialModal = ({ isVisible, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    apiService.createRawMaterials({ name, price }) // Update API call as per your service
      .then(response => {
        alert('Successful');
        setName(''); // Clear the input field
        setPrice(''); // Clear the input field
        onClose(); // Optionally close the modal
      })
      .catch(error => {
        alert(error);
      });
  };


  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Raw Material</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input 
              type="text" 
              id="price" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
            />
          </div>
          <div className="modal-actions">
            <button type="button" onClick={handleAdd}>Add</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRawMaterialModal;
