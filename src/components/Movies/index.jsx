import React,{useMemo} from 'react'
import { 
    Container, 
    ButtonLetf,
    ButtonRight,
    Wrapper, 
    Movie
    } from './style'
import {
    FaChevronLeft,
    FaChevronRight,
    } from 'react-icons/fa';

export default function Movies({movies}){

    const MAX_WIDTH_CONTENT = useMemo(() => movies.length * 220, [movies]);

    return(
        <Container>
            <h1>Favoritos</h1>
            <ButtonLetf type="button">
                <FaChevronLeft />
            </ButtonLetf>

            <Wrapper style={{ marginLeft: 0, width: MAX_WIDTH_CONTENT}}>
                {movies.map((movie,key) => (
                    <Movie id={`${key}`}>
                        <img src={movie.image} alt={`Capa do filme ${movie.name}`}/>
                    </Movie>
                ))}
            </Wrapper>

            <ButtonRight type="button">
                <FaChevronRight />
            </ButtonRight>
        </Container>
    )
}