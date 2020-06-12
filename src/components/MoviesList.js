import React from 'react';
import MovieCard from './MovieCard/MovieCard'
import '../App.css'
const MoviesList=({moviesData,nameSearch,ratingSearch})=>{
    return(<div className='movie-list-conatiner'>
        {moviesData.filter((el)=>el.rating >= ratingSearch && el.movieName.toLowerCase().includes(nameSearch.toLowerCase())).map((el,i)=>(
            <MovieCard key={i} movie={el}></MovieCard>))}
    </div>
    )
}
export default MoviesList;