import React, {  } from 'react';
import '../styles/home.css';
import '../styles/App.css';
import { Link } from 'react-router-dom'; 


const Admin = () => {
  

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
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Supply Chain</h2>
        </div>
        <nav className="sidebar-nav">
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/rawmaterials">Raw Materials</Link></li>
            <li><Link to="#">Categories</Link></li>
            <li><Link to="#">Suppliers</Link></li>
            <li><Link to="#">Customers</Link></li>
            <li><Link to="/PurchaseOrders">Purchase Orders</Link></li> 
            <li><Link to="/admin" style={{color:"blue"}}>Admin</Link></li> 
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <h1><i className="fas fa-user-shield"></i>  Admin</h1>
          <h1>Username</h1>
        </header>
        <div className='content'>

        <section className="inventory-table">
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Verified</th>
                <th>Status</th>
                <th>Remove user</th>
                
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

export default Admin;
