import React, { useState, useEffect } from 'react';
import RawMaterialService from '../service/RawMaterialService';
import apiService from '../service/apiService';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';
import Updatemodal from '../components/Updatemodal';
import EditModal from '../components/EditModal';
import { Link } from 'react-router-dom';
import AddRawMaterialModal from '../components/rawmaterialsmodal'; // Import the new modal
import Aside from '../components/Aside';

const Rawmaterials = () => {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isUpdateVisible, setUpdateModal] = useState(false);
  const [isEditVisible, setEditModal] = useState(false);
  const [rawMaterial, setRawMaterial] = useState('');
  const [isNavVisible, setNavVisible] = useState(true);
  const toggleNavbar = () => {
    setNavVisible(!isNavVisible);
};

 
  useEffect(() => {
    // Define an async function inside useEffect
    const fetchRawMaterials = async () => {
      try {
        const rawMaterials = await RawMaterialService.getRawMaterials();
        setInventory(rawMaterials);
      } catch (error) {
        console.error('Error fetching raw materials:', error); // Better error handling
        // Optionally set an error state or display a user-friendly message
      }
    };

    fetchRawMaterials();

    // No cleanup needed here, so no return statement required
  }, []); // Empty dependency array ensures this effect runs once on mount

 
  const Deleterawmaterials = (id) => {
    apiService.deleterawmaterials(id)
    .then(response =>{
      
      window.location.href= window.location.href
    })
    .catch(error => {
      alert(error)
    })
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleUpdatemodal = (item) => {
    setUpdateModal(!isUpdateVisible);
    setRawMaterial(item)
  };

  const toggleEditModal = () => {
    setEditModal(!isEditVisible);
  };
  
  

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
          <h1 className="top-text"><i className="fas fa-boxes"></i>  Raw Materials</h1>
          </div>
          <h1 className="top-text">Username</h1>

        </header>
        <div className = "content">
        <div className="header-buttons">
            <button className="add-button mr-3" onClick={toggleModal}>
              Add New Raw Material
            </button>
          </div>
        <section className="inventory-table ">
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
                  <td>{item.quantity}<button className="update_button" onClick={() => toggleUpdatemodal(item.id)}> update </button></td>
                  <td>${item.price ? item.price.toFixed(2) : 'N/A'}</td>
                  <td>
                    <button className='edit_button'>Edit</button>
                    <button className="delete_button mr-3" onClick={() => Deleterawmaterials(item.id)}> Delete </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        </div>
      </main>
      
      <Updatemodal
        onClose={toggleUpdatemodal}
        isVisible={isUpdateVisible}
        item = {rawMaterial}
        
      />
      
      <EditModal
        onClose={toggleEditModal}
        isVisible={isEditVisible}
      />

      <AddRawMaterialModal
        onClose={toggleModal}
        isVisible={isModalVisible}
      />
    </div>
  );
};

export default Rawmaterials;
import React, { useState, useEffect } from 'react';
import './home.css';
import apiService from './service/apiService';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import './App.css';
import Updatemodal from './Updatemodal';
import EditModal from './EditModal';
import { Link } from 'react-router-dom';
import AddRawMaterialModal from './rawmaterialsmodal'; // Import the new modal

const Rawmaterials = () => {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isUpdateVisible, setUpdateModal] = useState(false);
  const [isEditVisible, setEditModal] = useState(false);
  const [selectedRawMaterialId, setSelectedRawMaterialId] = useState(null);




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

  const Deleterawmaterials = (id) => {
    apiService.deleterawmaterials(id)
    .then(response =>{
      
      window.location.href= window.location.href
    })
    .catch(error => {
      alert(error)
    })
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleUpdatemodal = (id) => {
    setSelectedRawMaterialId(id);
    setUpdateModal(!isUpdateVisible);
  };

  const toggleEditModal = () => {
    setEditModal(!isEditVisible);
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
                  <td>{item.quantity}<button className="update_button" onClick={() =>toggleUpdatemodal(item.id)}> update </button></td>
                  <td>${item.price ? item.price.toFixed(2) : 'N/A'}</td>
                  <td>
                    <button className='edit_button'>Edit</button>
                    <button className="delete_button mr-3" onClick={() => Deleterawmaterials(item.id)}> Delete </button>
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
        rawMaterialId  ={selectedRawMaterialId}
      />
      
      <EditModal
        onClose={toggleEditModal}
        isVisible={isEditVisible}
      />

      <AddRawMaterialModal
        onClose={toggleModal}
        isVisible={isModalVisible}
       
      />
    </div>
  );
};

export default Rawmaterials;
