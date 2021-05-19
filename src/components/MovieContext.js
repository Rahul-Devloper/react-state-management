import React, {useState, createContext} from 'react'

export const MovieContext = createContext();

export const MovieProvider = props => {
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
            <MovieContext.Provider value = {[movies, setMovies]}>
                {props.children}
            </MovieContext.Provider>
        </div>
    )
}


