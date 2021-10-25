import React from 'react';
import './loader.css';

const Loader = () => {
   return (
      <div className="loader-bg">
         <div className="loader-track">
            <div className="loader-fill" />
         </div>
      </div>
   );
};

export default Loader;