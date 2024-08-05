import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import apiService from '../service/apiService';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import AddCategoryModal from './AddCategoryModal';
import '../styles/App.css';
import Updatemodal from './Updatemodal'; 
import EditModal from './EditModal';
import { Link } from 'react-router-dom'; 

const Home = () => {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
  const [isUpdateVisible, setUpdateModal] = useState(false);
  const [isEditVisible, setEditModal] = useState(false);

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
  //       alert(error.response ? error.response.data.message : 'Error checking token');
  //       console.error('Error checking token:', error);
  //     });
  // }, [navigate]);

  // Fetch products and categories from the API when the component mounts
  const fetchProducts = async () => {
    try {
      const response = await apiService.getProducts();
      setInventory(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
      // Handle the error appropriately
    }
  };
  const fetchCategories = async () => {
    try{
      const response = await apiService.getcategories();
      setCategories(response.data.categories)
    }catch (error){
      console.error('error in fetching categories',error)
    }
  }
  
  useEffect(() => {
    fetchProducts();

    fetchCategories();
  }, []);

  // Function to delete an inventory item by id
  const deleteInventoryItem = (id) => {
    apiService.deleteProduct(id)
      .then(() => {
        setInventory(prevInventory => prevInventory.filter(item => item.id !== id));
      })
      .catch(error => {
        alert(error.response ? error.response.data.message : 'Error deleting product');
        console.error('Error deleting product:', error);
      });
  };

  // Function to toggle product modal visibility
  const toggleModal = () => setModalVisible(prev => !prev);

  // Function to toggle category modal visibility
  const toggleCategoryModal = () => setCategoryModalVisible(prev => !prev);

  const toggleUpdatemodal = () => setUpdateModal(prev => !prev);

  const toggleEditModal = () => setEditModal(prev => !prev);

  const selectProduct = (item) => {
    navigate(`/configuration?product=${encodeURIComponent(item)}`);
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Supply Chain</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><Link to="#" style={{ color: "blue" }}>Home</Link></li>
            <li><Link to="#">Products</Link></li>
            <li><Link to="/rawmaterials">Raw Materials</Link></li>
            <li><Link to="#">Categories</Link></li>
            <li><Link to="#">Suppliers</Link></li>
            <li><Link to="#">Customers</Link></li>
            <li><Link to="/PurchaseOrders">Purchase Orders</Link></li>
            <li><Link to="/admin">Admin</Link></li>  
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <h1 className="top-text"><i className="fas fa-home"></i>  Home</h1>
          <h1 className="top-text">Username</h1>

        </header>
        <div className="content">
          <div className="header-buttons">
            <button className="add-button mr-3" onClick={toggleModal}>
              Add New Product
            </button>
            <button className="add-button" onClick={toggleCategoryModal}>
              Add Category
            </button>
          </div>
          <section className="inventory-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Stock</th>
                  <th>Price</th>
                  <th>Actions</th>
                  <th>Configuration</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.category ? item.category.name : 'N/A'}</td>
                    <td>{item.quantity} <button className="update_button">Produce</button></td>
                    <td>${item.price ? item.price.toFixed(2) : 'N/A'}</td>
                    <td>
                      <button className='edit_button' onClick={toggleEditModal}>Edit</button>
                      <button className="delete_button mr-3" onClick={() => deleteInventoryItem(item.id)}>Delete</button>
                    </td>
                    <td>
                      <button className="add-button" onClick={() => selectProduct(item.id)}>
                        Configuration
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </main>

      <Modal
        isVisible={isModalVisible}
        onClose={toggleModal}
        categories={categories}
      />
      <AddCategoryModal
        isVisible={isCategoryModalVisible}
        onClose={toggleCategoryModal}
      />
      <Updatemodal
        isVisible={isUpdateVisible}
        onClose={toggleUpdatemodal}
      />
      <EditModal
        isVisible={isEditVisible}
        onClose={toggleEditModal}
      />
    </div>
  );
};

export default Home;
