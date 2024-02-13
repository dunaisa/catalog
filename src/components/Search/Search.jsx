import React, { useEffect } from 'react';
import './Search.css';
import CloseIcon from '../../img/icons/close-icon.svg';

const Search = ({isVisible, closeSeashInput, inputValue, setInputValue, isQueryValid}) => {

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      {
        isVisible ? <div className='search-wrapper'>
        <input
          placeholder='Search...'
          className='search-input'
          value={inputValue}
          onChange={handleInputChange}
        />
        {!isQueryValid && <span className='search-error'>The request must contain at least three characters.</span>}
        <button className='search-btn' onClick={closeSeashInput}>
          <img src={CloseIcon} alt="Close icon" />
        </button>
      </div> : ''        
      }     
      
    </> 
    
  );
}

export default Search;
