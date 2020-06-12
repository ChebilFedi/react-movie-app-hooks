import React,{useState} from 'react';

import './App.css';
import {moviesData} from './components/moviesData'
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie/AddMovie'
import Search from './components/Search/Search';


function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [newMovieName, setNewMovieName] = useState('');
  const [src, setSrc] = useState('')
  const [nameSearch,setNameSearch]=useState('')
  
  const [ratingSearch, setRatingSearch] = useState(1);
  const [rating, setRating] = useState("");
  const addMovie = e => {
    e.preventDefault();
    let newMovie = {
      movieName: newMovieName,      
      source: src,
      rating: rating,
    };
    return setMoviesList([...moviesList, newMovie]);
  }
  return (
    <div className="App">
      <Search setNameSearch={setNameSearch}  setRatingSearch={setRatingSearch}
        ratingSearch={ratingSearch}/>
      <MoviesList moviesData={moviesList} nameSearch={nameSearch}  ratingSearch={ratingSearch}/>
      <AddMovie addMovie={addMovie} setNewMovieName={setNewMovieName} setSrc={setSrc} setRating={setRating}/>
    </div>
  );
}

export default App;
