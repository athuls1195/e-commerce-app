import React from 'react'
import './Breadcrumb.css';
import breadcrum_arrow from '../Assets/breadcrum_arrow.png'
function Breadcrumb(props) {
    const {product} =props;
  return (  
  <div className="breadcrumb">HOME
  <img src={breadcrum_arrow} alt="" /> SHOP <img src={breadcrum_arrow} alt="" />{product.category} <img src={breadcrum_arrow} alt="" />{product.name}
  </div>
  )  
}
export default Breadcrumb