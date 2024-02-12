import React from 'react';
import './Product.css';
import { ReactComponent as RatingStar } from '../../img/icons/star.svg';
import { ReactComponent as CartIcon } from '../../img/icons/cart.svg';

const Product = ({props}) => {

  const string = 'An apple mobile which is nothing like apple An apple mobile which is nothing like apple An';

  console.log(string.length)


  return (
    <li className='product'>
      <div className='product__sale-wrapper sale'>
        <span className='sale__value'>{`${props.discountPercentage}%`}</span>
        <span className='sale__text'>off sale</span>
      </div>
      <img src={props.thumbnail} alt={props.title} className='product__img'/>
      <div className='product__content'>
        <div className='product__rating-wrapper rating'>
          <RatingStar className='rating__icon'/>
          <span className='rating__value'>{props.rating}</span>
        </div>
        <h1 className='product__name'>{props.title}</h1>
        <div className='product__description'>
          <span className='product__description-text'>
          {props.description.slice(0, 90)}
          <span className='product__read-more'>Read more</span>
          </span>
        </div>
        <div className='product__price-wrapper'>
          <button className='product__btn-default default-btn'>
            <CartIcon className='default-btn__icon'/>
            {`$${Math.round(props.price * (100 - props.discountPercentage) / 100)}`}
          </button>
          <span className='product__cost'>{`$${props.price}`}</span>
        </div>
      </div>   
      
    </li>
  );
};

export default Product;
