import React, { useContext,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {id}=useParams();
  const product = all_product.find((e)=>e.id==Number(id))
  return (
    <div>
      <Breadcrumb product={product}/>
      <ProductDisplay product={product}/>
      </div>
  )
}

export default Product