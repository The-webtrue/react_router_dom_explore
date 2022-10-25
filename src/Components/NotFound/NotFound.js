import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const NotFound = () => {
    const styel = {
        width:'80%'
    }

    
    return (
        <div>
            <Header/>
          <div>
          <img style={styel} src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page_1150-48326.jpg?w=2000" alt="" /> 
          </div>
          <button><Link to='home'>Go back</Link> </button>
        </div>
        
    );
};

export default NotFound;