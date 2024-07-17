import React, { useState, useEffect } from 'react';
import './home.css';
import apiService from './service/apiService';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';


const Home = () => {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);


  // Check token when the component mounts
  useEffect(() => {
    apiService.checktoken(localStorage.getItem('token'))
      .then(response => {
        if (response.data.message !== 'valid') {
          navigate('/login');
        }
      })
      .catch(error => {
        navigate('/login');
        if (error.response) {
          alert(error.response.data.message);
        } else if (error.request) {
          alert('No response received from the server.');
        } else {
          alert(`Error: ${error.message}`);
        }
        console.error('Error checking token:', error);
      });
  }, [navigate]);

  // Fetch products from the API when the component mounts
  useEffect(() => {
    apiService.getproducts()
      .then(response => {
        console.log(response.data.products);
        setInventory(response.data.products);
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
  const deleteInventoryItem = (index) => {
    const updatedInventory = [...inventory];
    updatedInventory.splice(index, 1);
    setInventory(updatedInventory);
  };

  // Function to add a new category (for future implementation)
  const addCategory = () => {
    console.log('Adding a new category');
  };
// Function to toggle modal visibility
const toggleModal = () => {
  setModalVisible(!isModalVisible);
};

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>home</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>User</li>
            <li>Products</li>
            <li>Categories</li>
            <li>Supplies</li>
            <li>Customers</li>
            <li>purchase orders</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <h1>Inventory</h1>
          <div className="header-buttons">
            <button className="add-button" onClick={toggleModal}>
              Add product
            </button>
            <button className="add-button" onClick={addCategory}>
              Add Category
            </button>
          </div>
        </header>
        <section className="inventory-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item, index) => (
                <tr key={index}>
                <td>{item.name}</td>
                <td>{item.category ? item.category.name : 'N/A'}</td>
                <td>{item.quantity}</td>
                <td>${item.price ? item.price.toFixed(2) : 'N/A'}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => deleteInventoryItem(index)}>Delete</button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
      <Modal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        //onSave={addInventoryItem}
      />
    </div>
  );
};

export default Home;
