import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Categories.css';

const Categories = ({ categories, setSearchParams }) => {

  const location = useLocation();
  const urlParam = new URLSearchParams(location.search).get('category');

  return (
    <div className='categories-wrapper'>
      <ul className='categories-list'>
        <li className='categories-list__item'>
          <Link className={urlParam === 'all' ||  urlParam === null ? 'categories-list__link select' : 'categories-list__link'}
            to={{
              search: '?category=all',
            }}
            onClick={() => setSearchParams({category: 'all'})}>
            all
          </Link>
        </li>
        {
          categories.map(cat => (
            <li key={cat} className='categories-list__item'>
              <Link
                className={urlParam === cat ? 'categories-list__link select' : 'categories-list__link'}
                to={{
                  search: `?category=${cat}`,
                }}
                onClick={() => setSearchParams({category: `${cat}`})}
              >
                {cat}
              </Link>
            </li>
          ))
        }

        
      </ul>

    </div>
  );
}

export default Categories;
