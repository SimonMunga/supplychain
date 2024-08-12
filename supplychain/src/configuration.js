import React, {  } from 'react';
import './home.css';
import './App.css';
import { Link } from 'react-router-dom'; 
import apiService from './service/apiService';
import { useNavigate } from 'react-router-dom';



const Configuration = ()=> {
const navigate = useNavigate()
  // Get the query string from the URL
const queryString = window.location.search;

// Create a URLSearchParams object to parse the query string
const urlParams = new URLSearchParams(queryString);

// Extract the 'product' parameter
var item = urlParams.get('product');
if (item){
  console.log(item)
apiService.getProductRawMaterials(item) // Use this value as needed
.then(response =>{
  alert("Successfull")
})
.catch(error => {
  alert(error)
})
}
else{
  alert("No product found")
  navigate("/home")
}

    return ( <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Configuration</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="#" style={{color:"blue"}}>Products</Link></li>
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
          <h2 className='top-text'>Product Configuration</h2>
        </header>
        <div className='content'>

        </div>
        
      </main>
     
    </div>)
}
export default Configuration;