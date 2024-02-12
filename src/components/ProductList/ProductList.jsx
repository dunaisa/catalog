import React, { useState, useEffect } from 'react';
import './ProductList.css';
import Product from '../Product/Product';

const ProductList = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <ul className='product-list'>
      {
        products.map(item => (
          <Product key={item.id} props={item}/>
          ))

      }
      
    </ul>
  );
}

export default ProductList;
