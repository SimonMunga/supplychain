import React, { useState } from 'react';
<<<<<<< HEAD:supplychain/src/AddCategoryModal.js
import './modal.css';
import apiService from './service/apiService';
import { useNavigate } from 'react-router-dom';

=======
import '../styles/modal.css';
import apiService from '../service/apiService';
>>>>>>> 83f4626eac45926fa8e68b01f6f794eb58836c83:supplychain/src/components/EditModal.jsx

const Modal = ({ isVisible, onClose }) => {
  const [name, setName] = useState('');
  
  const navigate = useNavigate();
  const handleSave = (e) => {
    alert("called")
    e.preventDefault();
    apiService.createcategory({ name })
      .then(response => {
        if(response.data.message !='Created Successfully'){
        alert(response.data.message);}
      else{
        window.location.href = "/home"
      }
  
        setName(''); // Clear the input field
        onClose(); // Optionally close the modal
      })
      .catch(error => {
        alert('Error');
      });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Edit name </h2>
        <form onSubmit={handleSave}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required // Optional: add validation to make the field required
          />
          <h2>Edit price </h2>
          </form>
        <form onSubmit={handleSave}>
          <label>:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required // Optional: add validation to make the field required
          />
          <br />
          <br />
          <button type="submit" onClick={handleSave}>Add</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
