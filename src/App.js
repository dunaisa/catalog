import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

const App = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isQueryValid, setQueryValid] = useState(true);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [fetching, setFetching] = useState(true);

  // const scrollHandler = (e) => {
  //   if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
  //     setFetching(true)
  //   }

  // }

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    if (searchQuery.length > 2) {
      fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
    // fetch(`https://dummyjson.com/products/search?q=${searchQuery}&limit=10&_page=${currentPage}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
    
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.length < 2) {
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
    
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.length === 0 || searchQuery.length > 2) {
      setQueryValid(true)
    } else {
      setQueryValid(false)
    }    
  }, [searchQuery]);

  // useEffect(() => {
  //   document.addEventListener('scroll', scrollHandler)
  //   return function() {
  //     document.removeEventListener('scroll', scrollHandler)
  //   }

  // }, [])

  return (
    <div className="page">
      <Menu
        categories={categories}
        inputValue={searchQuery}
        setInputValue={setSearchQuery}
        isQueryValid={isQueryValid}
        />
      <main className='page__content'>

        {
          products.length === 0 ? <span className='page__not-found'>Nothing was found, try changing your query.</span> : <ProductList products={products}/>

        }        

      </main>

      <Footer />
    </div>
  );
}

export default App;
