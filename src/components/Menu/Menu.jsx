import React, { useState } from 'react';
import './Menu.css';
import SearchIcon from '../../img/icons/search.svg';
import { ReactComponent as CartIcon } from '../../img/icons/cart.svg';
import Search from '../Search/Search';
import Categories from '../Categories/Categories';

const Menu = ({categories, inputValue, setInputValue, isQueryValid}) => {

  const [isVisible, setVisible] = useState(false);

  const openSeashInput = () => {
    setVisible(true)
  }

  const closeSeashInput = () => {
    setVisible(false)
    setInputValue('')
  }

  return (
    <menu className='menu'>

      <button className='menu-btn menu__search-btn' onClick={openSeashInput}>
        <img src={SearchIcon} alt="Search icon" className='menu__search-btn-icon'/>
      </button>
      <Search isVisible={isVisible} closeSeashInput={closeSeashInput} inputValue={inputValue} setInputValue={setInputValue} isQueryValid={isQueryValid} />

      <Categories categories={categories}/>

      <button className='menu-btn menu__cart-btn'>
        <CartIcon className='menu__cart-btn-icon'/>
        cart
      </button>
      

    </menu>
  );
}

export default Menu;
