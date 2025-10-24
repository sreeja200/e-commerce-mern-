import React from 'react';
import './Breadcrum.css';  // Import the styles for breadcrumb
import arrow_icon from '../Assets/breadcrum_arrow.png';  // Import the arrow icon

const Breadcrum = (props) => {
  const { product } = props;  // Destructure to get the 'product' prop
  
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" /> 
      SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
