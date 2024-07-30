import React, { useState } from 'react';
import './rawmaterialsmodal.css'; 
import apiService from './service/apiService';

const AddRawMaterialModal = ({ isVisible, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    apiService.createRawMaterials({ name, price })
      .then(response => {
        setName('');
        setPrice('');
        alert(response.data.message); // Update inventory in parent component
        onClose();
      })
      .catch(error => {
        alert(error);
      });
  };

  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        
        <form>
        <h2>Add New Raw Material</h2>
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
