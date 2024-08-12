<<<<<<< HEAD:supplychain/src/PurchaseOrders.js
import React, { useState, useEffect } from 'react';
import './home.css';
// import apiService from './service/apiService';
// import { useNavigate } from 'react-router-dom';
// import Modal from './Modal';
// import AddCategoryModal from './AddCategoryModal';
import './App.css';
//import Updatemodal from './Updatemodal'; 
// import EditModal from './EditModal';
=======
import React, {useState  } from 'react';
import '../styles/home.css';
import '../styles/App.css';
>>>>>>> 83f4626eac45926fa8e68b01f6f794eb58836c83:supplychain/src/pages/PurchaseOrders.jsx
import { Link } from 'react-router-dom'; 
import Aside from '../components/Aside';


const PurchaseOrders = () => {
  const [isNavVisible, setNavVisible] = useState(true);
  const toggleNavbar = () => {
    setNavVisible(!isNavVisible);
};

  // Check token when the component mounts
  // useEffect(() => {
  //   apiService.checktoken(localStorage.getItem('token'))
  //     .then(response => {
  //       if (response.data.message !== 'valid') {
  //         navigate('/login');
  //       }
  //     })
  //     .catch(error => {
  //       navigate('/login');
  //       if (error.response) {
  //         alert(error.response.data.message);
  //       } else if (error.request) {
  //         alert('No response received from the server.');
  //       } else {
  //         alert(`Error: ${error.message}`);
  //       }
  //       console.error('Error checking token:', error);
  //     });
  // }, [navigate]);

  

  return (
    <div className="dashboard-container">
       <Aside
      isNavVisible={isNavVisible}
      />
      <main className="main-content">
      <header className="main-header">
          <div className='d-flex'>
          <button className="toggle-btn mr-2" onClick={toggleNavbar}>
          <i style={{color:"aqua"}}className="fa-solid fa-bars"></i>
          </button>
          <h1 className="top-text"><i className="fas fa-home"></i>  Purchase Orders</h1>
          </div>
          <h1 className="top-text">Username</h1>

        </header>
        <div className='content'>
        <div className="header-buttons">
            <button className="add-button mr-3">
              New Purchase Order
            </button>
          </div>

        <section className="inventory-table">
          <table>
            <thead>
              <tr>
                <th>PO Number</th>
                <th>Supplier</th>
                <th>Date</th>
                
              </tr>
            </thead>
            {/* <tbody>
              {inventory.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.category ? item.category.name : 'N/A'}</td>
                  <td>{item.quantity}<button className="update_button" onClick={toggleUpdatemodal}> Update </button></td>
                  <td>${item.price ? item.price.toFixed(2) : 'N/A'}</td>
                  <td>
                    <button className='edit_button' onClick={toggleEditModal}>Edit</button>
                    <button className="delete_button" onClick={() => deleteInventoryItem(item.id)}> Delete </button>
                  </td>
                </tr>
              ))}
            </tbody> */}
          </table>
        </section>
        </div>
      </main>
     </div> 
  );
};

export default PurchaseOrders;
