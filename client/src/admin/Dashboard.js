import React, { useEffect } from 'react';
import Sidebar from './Sidebar';

import './admin.css';
const Dashboard = () => {

  return (
    // if the current mode is dark, then we set to dark. Otherwise, we set it to light (which is an empty string).
    <div className='clear__top'>
      <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white' style={{ width: '18rem', height: '100vh', position: 'fixed' }}>
        
      </div>
    </div>
  )
}
export default Dashboard;