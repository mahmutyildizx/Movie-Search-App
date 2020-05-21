import React from 'react';
import './App.css';
import SearchMovies from './Components/SearchMovies.js'

function App() {
    return (
      <>
      <div className="container">
      <h1 className="title">Search Movies</h1>
       <SearchMovies/>
      </div>
        
      </>
    );
  }

export default App;
