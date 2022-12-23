import React,{useState, useMemo, useCallback} from 'react'
import { 
    Container, 
    ButtonLetf,
    ButtonRight,
    Wrapper, 
    Movie,
    MovieCard,
    Infos
    } from './style'
import {
    FaChevronLeft,
    FaChevronRight,
    FaHeart
    } from 'react-icons/fa';

export default function Movies({movies}){

    const [marginContent, setMarginContent] = useState(0);

    const MAX_WIDTH_CONTENT = useMemo(() => movies.length * 224, [movies]);

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
            <h1>Favoritos <FaHeart/></h1>
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
                                <span> {movie.relevance}% relevante</span>
                                <span> {movie.release.year} </span>
                                <span> {movie.country} </span>
                            </Infos>
                            <Infos>
                                <span style={{color: "#FFF"}}> Dirigido por: {movie.director} </span>
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