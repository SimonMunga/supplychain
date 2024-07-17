import React, { useState } from 'react';

const Modal = ({ isVisible, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleSave = () => {
    const newItem = {
      name: name,
      category: { name: category }, // Assuming category is an object
      stock: 0, // Default values for stock and price
      price: 0.0,
    };
    onSave(newItem);
    onClose();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add Product</h2>
        <form>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
          <br />
          <button type="button" onClick={handleSave}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
