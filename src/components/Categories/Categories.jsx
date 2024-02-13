import React from 'react';
import './Categories.css';

const Categories = ({categories}) => {

  return (
    <div className='categories-wrapper'>
      <ul className='categories-list'>
        <li className='categories-list__item'>
          <button className='categories-list__btn'>all</button>
        </li>
        {
          categories.map(cat => (
            <li key={cat} className='categories-list__item'>
              <button className='categories-list__btn'>{cat}</button>
            </li>
          ))
        }

        
      </ul>

    </div>
  );
}

export default Categories;
