import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

const App = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isQueryValid, setQueryValid] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  // const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [isLoading, setLoading] = useState(false);
    

  useEffect(() => {

    const queryParam = searchParams.get('category');
    
    if (queryParam !== 'all') {
    fetch(`https://dummyjson.com/products/category/${queryParam}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
    // if (queryParam === 'all' || queryParam === null || searchQuery.length < 3)

    if (fetching && page < 101) {
      console.log('fetching')
      console.log(page)
      fetch(`https://dummyjson.com/products?limit=10&skip=${page}`)
        .then(res => res.json())
        .then(data => {
          setLoading(true)
          setTimeout(() => {
            setProducts([...products, ...data.products])
            setLoading(false)
            setPage(prev => prev + 10)
          }, 2000)
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          setFetching(false)
        });
    }
  }, [searchParams, searchQuery, fetching, page, products])

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

  // useEffect(() => {
  //   if (searchQuery.length < 3) {
  //     fetch(`https://dummyjson.com/products?limit=${limit}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setProducts([data.products])

  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  //   }
    
  // }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.length === 0 || searchQuery.length > 2) {
      setQueryValid(true)
    } else {
      setQueryValid(false)
    }    
  }, [searchQuery]);

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function() {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <div className="page">
      <Menu
        categories={categories}
        inputValue={searchQuery}
        setInputValue={setSearchQuery}
        isQueryValid={isQueryValid}
        setSearchParams={setSearchParams}
        />
      <main className='page__content'>

        {
          !isLoading && products.length === 0 ? <span className='page__not-found'>Nothing was found, try changing your query.</span> : <ProductList products={products} />

        }

      </main>

      {isLoading && <div>загрузка...</div>}

      <Footer />
    </div>
  );
}

export default App;
