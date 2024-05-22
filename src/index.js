import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import  NavBar  from './Components/NavBar/NavBar';
import { Banner } from './Components/Banner/Banner';
import RowPosts from './Components/RowPosts/RowPosts';

import { action,originals, trending } from './constants/url';
import { Footer } from "./Components/Footer/Footer";
import  SearchResult from "./Components/SearchResult/SearchResult"

export const searchContext = createContext();

const App = () => {
  const [searchValue, setSearchValue] = useState('');

//   const search = useCallback((searchValue) =>{
//     console.log(searchValue,'triggered')
//   },[searchValue])

  


   
  return (
    <searchContext.Provider value={{ searchValue, setSearchValue }}>
      <body className='bg-zinc-900'>
        <NavBar />
        {searchValue.length > 0 ? (
          <SearchResult  searchContext={searchValue} />
        ) : (
          <>
            <Banner />
            <RowPosts title="Now Trending" url={trending} />
            <RowPosts title="Action" url={action} />
            <RowPosts title="Netflix Orginals" url={originals} />
          </>
        )}
        <Footer />
      </body>
    </searchContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();