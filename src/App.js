import './App.css';
import React,{useEffect, useState} from 'react';
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';
const API_URL='http://www.omdbapi.com?apikey=91023f02';

const App=()=>{
  const [movies,setMovies]=useState([]);
  const [searchTerm,setSearchTerm]=useState('');
  const searchMovies=async (title)=>{
  const response =await fetch(`${API_URL}&s=${title}`);
  const data=await response.json();
  console.log(data.Search)
  setMovies(data.Search);
  }
  console.log(movies)
  useEffect(()=>{
    searchMovies('SpiderMan');
  },[])
  return(
   <div className='app'>
    <h1>MovieLand</h1>
    <div className='search'>
      <input placeholder='Search for Movies'
      value={searchTerm}
      onChange={(e)=>{setSearchTerm(e.target.value)}}/>
      <img src={SearchIcon} alt="search" onClick={()=>{searchMovies(searchTerm)}}/>
    </div>
    {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
 
   </div>
  );
}

export default App;
