import React, { useState } from 'react';
import apiService from './service/apiService';


const Modal = ({ isVisible, onClose,categories}) => {
  const [name, setName] = useState('');
  // const [categories, setcategories] = useState('');
  const [category, setCategory]= useState('')
  const [price, setPrice] = useState('')
  const handleSave = () => {
    
    apiService.createProduct({"name":name,"price":price,"category":category})
    .then (response => {
      alert("success")
      alert(response.data.message)
    })
    .catch(error => {
      alert("error")
      alert(error)
    });
    onClose();
  };

  if (!isVisible) {
    return null;
  }
if(isVisible){
  
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
          <label>Price</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          <br />
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="" disabled>Select a Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat.name}>{cat.name}</option>
            ))}
          </select>
          <br />
          <button type="button" onClick={handleSave}>Add</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
