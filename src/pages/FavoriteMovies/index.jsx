import React from 'react'
import Header from '../../components/Header'
import Movies from '../../components/Movies'
import favoriteMoviesList from '../../services/movies'
import styles from './style'

export default function FavoriteMovies(){
    return (
        <>
            <Header/>
            <Movies movies={favoriteMoviesList}/>
        </>
    )
}