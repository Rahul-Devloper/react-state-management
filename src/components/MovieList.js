import React, {useState} from 'react'
import Movie from './Movie'

const MovieList = () => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 1
        },
        {
            name: 'The Matrix',
            price: '$20',
            id: 2
        },
        {
            name: 'Fast Five',
            price: '$30',
            id: 3
        }
    ]);

    return (
        <div>
            {
                movies.map(movie=>(
                    <Movie name={movie.name} price = {movie.price} key = {movie.id} />
                ))
            }
        </div>
    )
}

export default MovieList
