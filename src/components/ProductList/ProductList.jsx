import './ProductList.css';
import Product from '../Product/Product';

const ProductList = ({products}) => {

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
