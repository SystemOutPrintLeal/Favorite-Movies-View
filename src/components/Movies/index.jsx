import React,{useState, useMemo, useCallback} from 'react'
import favoriteMovies from '../../services/movies'
import Checkbox from '../Checkbox'
import { 
    Container, 
    ButtonLetf,
    ButtonRight,
    Wrapper, 
    Movie,
    MovieCard,
    Infos, 
    relevances,
    HeaderMovies,
    Filter,
    } from './style'
import {
    FaChevronLeft,
    FaChevronRight,
    FaHeart
    } from 'react-icons/fa';

export default function Movies(){

    const [marginContent, setMarginContent] = useState(0);
    const [movies, setMovies] = useState(favoriteMovies)

    var widthScreen = window.screen.width;

    const MAX_WIDTH_CONTENT = useMemo(() => movies.length * (widthScreen/6), [movies]);

    const relevanceColor = (relevance) => {
        if(relevance <= 25) 
            return relevances["low"]; 
        else if(relevance <= 50) 
            return relevances["mediumLow"]; 
        else if(relevance <= 75) 
            return relevances["medium"]; 
        else if(relevance <= 100) 
            return relevances["hight"]; 
    }

    const handleInput = (event) => {
        console.log(event.target.value)
    }

    

    const handleScroll = useCallback(
        direction => {
          setMarginContent(stateMargin => {
            const newValue = stateMargin + (direction === 'left' ? -400 : 400);
    
            const isError =
              MAX_WIDTH_CONTENT + newValue < window.innerWidth || newValue === 400;
    
            return isError ? stateMargin : newValue;
          });
        },
        [MAX_WIDTH_CONTENT],
      );

    return(
        <Container>
            <HeaderMovies>
                <h1>Favoritos <FaHeart/></h1>
                <Filter >
                    <span>
                        <Checkbox text="Nome"/>
                        <Checkbox text="Lançamento"/>
                        <Checkbox text="País"/>
                    </span>

                    <input className='text-input' onChange={handleInput}/>
                </Filter>
                
            </HeaderMovies>

            <ButtonLetf type="button" onClick={() => handleScroll('right')}>
                <FaChevronLeft />
            </ButtonLetf>

            <Wrapper style={{ marginLeft: marginContent, width: MAX_WIDTH_CONTENT}}>
                {movies.map((movie,key) => (
                    <Movie id={`${key}`}>
                        <img src={movie.image} alt={`Capa do filme ${movie.name}`}/>
                        <MovieCard>
                            <strong>{movie.name}</strong>
                            <Infos>
                                <span style={{color: relevanceColor(movie.relevance)}}> {movie.relevance}% relevante</span>
                                <span> {movie.release.year} </span>
                                <span> {movie.country} </span>
                            </Infos>
                            <Infos style={{flexDirection: "column"}}>
                                <span style={{color: "#FFF"}}> Dirigido por: </span>
                                <span style={{color: "#FFF"}}> {movie.director} </span>
                            </Infos>
                        </MovieCard>
                    
                    </Movie>
                ))}
            </Wrapper>

            <ButtonRight type="button" onClick={() => handleScroll('left')}>
                <FaChevronRight />
            </ButtonRight>
        </Container>
    )
}