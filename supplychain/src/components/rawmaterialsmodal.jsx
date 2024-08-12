import React, { useState } from 'react';
import '../styles/rawmaterialsmodal.css';
import apiService from '../service/apiService';

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
<<<<<<< HEAD:supplychain/src/rawmaterialsmodal.js
      <div className="modal">
        
=======
     
      <div className="modalRaw">
        <h2>Add New Raw Material</h2>
>>>>>>> 83f4626eac45926fa8e68b01f6f794eb58836c83:supplychain/src/components/rawmaterialsmodal.jsx
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
          <div className="d-flex">
          <button type="button" className="btn btn-warning m-3" onClick={onClose}>Close</button>
          <button type="submit" className="btn btn-primary m-3"onClick={handleAdd}>Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRawMaterialModal;
