import React, { useState, useEffect } from 'react';
import './home.css';
import apiService from './service/apiService';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import AddCategoryModal from './AddCategoryModal';
import './App.css';
import Updatemodal from './Updatemodal'; 
import EditModal from './EditModal';
import { Link } from 'react-router-dom'; 


const Home = () => {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState([]);
  const [categories, setCategories] = useState([]); // <-- Added this line
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
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

    apiService.getcategories() // <-- Added this line
      .then(response => {
        console.log(response.data.categories);
        setCategories(response.data.categories);
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else if (error.request) {
          alert('No response received from the server.');
        } else {
          alert(`Error: ${error.message}`);
        }
        console.error('Error fetching categories:', error);
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

  // Function to add a new category
  const addCategory = (newCategory) => {
    console.log('Adding a new category:', newCategory);
    // Here you can implement the logic to add the new category
  };

  // Function to toggle product modal visibility
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Function to toggle category modal visibility
  const toggleCategoryModal = () => {
    setCategoryModalVisible(!isCategoryModalVisible);
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
            <li>User</li>
            <li>Products</li>
            <li>Supplier</li>
            <li>Customers</li>
            <li><Link to="/PurchaseOrders">Purchase Orders</Link></li> 
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <h1>Inventory</h1>
          <div className="header-buttons">
            <button className="add-button mr-3" onClick={toggleModal}>
              Add Product
            </button>
            <button className="add-button" onClick={toggleCategoryModal}>
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
                  <td>{item.quantity}<button className="update_button" onClick={toggleUpdatemodal}> Update </button></td>
                  <td>${item.price ? item.price.toFixed(2) : 'N/A'}</td>
                  <td>
                    <button className='edit_button' onClick={toggleEditModal}>Edit</button>
                    <button className="delete_button" onClick={() => deleteInventoryItem(item.id)}> Delete </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
      <Modal
        isVisible={isModalVisible}
        onClose={toggleModal}
        categories={categories} // <-- Added this line
        
      />
      <AddCategoryModal
        isVisible={isCategoryModalVisible}
        onClose={toggleCategoryModal}
        onSave={addCategory}
      />

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

export default Home;
