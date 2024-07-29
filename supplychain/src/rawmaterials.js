import React, { useState, useEffect } from 'react';
import './home.css';
import apiService from './service/apiService';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

import './App.css';
import Updatemodal from './Updatemodal'; 
import EditModal from './EditModal';
import { Link } from 'react-router-dom'; 


const Rawmaterials = () => {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isUpdateVisible, setUpdateModal]= useState(false);
  const [isEditVisible, setEditModal]=useState(false);

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

  // Fetch products and categories from the API when the component mounts
  useEffect(() => {
    apiService.getRawMaterials()
      .then(response => {
        
        setInventory(response.data.rawmaterials);
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else if (error.request) {
          alert('No response received from the server.');
        } else {
          alert(`Error: ${error.message}`);
        }
        console.error('Error fetching products:', error);
      });

  
  }, []);

  // Function to delete an inventory item by index
  const deleteInventoryItem = (id) => {
    apiService.deleteProduct(id)
    .then(response =>{
      
      window.location.href= window.location.href
    })
    .catch(error => {
      alert(error)
    })
  };

 

  // Function to toggle product modal visibility
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

 
  const toggleUpdatemodal = () => {
    setUpdateModal(!isUpdateVisible);
  };

  const toggleEditModal =() => {
    setEditModal(!isEditVisible)

  };

  

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Home</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="#">Products</Link></li>
            <li><Link to="/rawmaterials">Raw Materials</Link></li>
            <li><Link to="#">Categories</Link></li>
            <li><Link to="#">Suppliers</Link></li>
            <li><Link to="#">Customers</Link></li>
            <li><Link to="/PurchaseOrders">Purchase Orders</Link></li> 
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <h1>Raw Materials</h1>
          <div className="header-buttons">
            <button className="add-button mr-3" onClick={toggleModal}>
              Add New Raw Material
            </button>
           
          </div>
        </header>
        <section className="inventory-table">
            <h3>Raw Materials</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th> 
                <th>In Store</th>
                <th>Buying Price </th>
                <th>Actions</th>
                
              </tr>
            </thead>
            <tbody>
              {inventory.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}<button className="update_button" onClick={toggleUpdatemodal} > update </button></td>
                  <td>${item.price ? item.price.toFixed(2) : 'N/A'}</td>
                  <td>
                    <button className='edit_button' onClick={toggleEditModal}>Edit</button>
                    <button className="delete_button mr-3" onClick={() => deleteInventoryItem(item.id)}> Delete </button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    
     

      <Updatemodal
      onClose={toggleUpdatemodal}
      isVisible={isUpdateVisible}
      />
      
      <EditModal
      onClose={toggleEditModal}
      isVisible={isEditVisible}
      />

      
    </div>
  );
};

export default Rawmaterials;
