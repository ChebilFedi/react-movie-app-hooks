import React from 'react';
import './MovieCard.css';
import Rate from '../Rate';
const MovieCard=({movie:{source,movieName,rating}})=>{
    return(
        <div className="container">
         <div className='movie-name'>
             <h1>{movieName}</h1>
         </div>
         <div className="movie-image">
             
             <img src={source} alt='image'></img>
         </div>
         <div className='movie-rating'>
          <Rate rating={rating} />
        </div>
       
        </div>
    )
}
export default MovieCard;