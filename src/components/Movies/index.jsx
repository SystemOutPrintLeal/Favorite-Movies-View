import React,{useState, useMemo, useCallback, useEffect} from 'react'
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
    const [filter, setFilter] = useState("Nome")
    const [input, setInput] = useState("")
    const [nameCheckbox, setNameCheckbox] = useState(true)
    const [releaseCheckbox, setReleaseCheckbox] = useState(false)
    const [countryCheckbox, setCountryCheckbox] = useState(false)

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

    const filterTypes = {
        Nome :function(event){
            setMovies(
                favoriteMovies.filter(movies => (
                   movies.name.toLowerCase().includes(event.toLowerCase())
                ))
            )
        },
        Lançamento :function(event){
            setMovies(
                favoriteMovies.filter(movies => (
                   movies.release.year.toString().includes(event.toLowerCase())
                ))
            )
        },
        País :function(event){
            setMovies(
                favoriteMovies.filter(movies => (
                   movies.country.toLowerCase().includes(event.toLowerCase())
                ))
            )
        }
    }

    useEffect(()=>{movies.sort(sortByName)},[])

    useEffect(()=>{
        filterTypes[filter](input)
    },[input])

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const sortByName = (a,b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
            return 0;
    }
    
    const sortByRelease = (a,b) => {
        if (a.release.year < b.release.year) {
            return 1;
        }
        if (a.release.year > b.release.year) {
            return -1;
        }
            return 0;
    }

    const sortByCountry = (a,b) => {
        if (a.country > b.country) {
            return 1;
        }
        if (a.country < b.country) {
            return -1;
        }
            return 0;
    }

    const handleCheck = (event) => {
        if(event === "Nome"){
            setFilter("Nome")
            movies.sort(sortByName)
            setReleaseCheckbox(false)
            setCountryCheckbox(false)
        }
        else if(event === "Lançamento"){
            setFilter("Lançamento")
            movies.sort(sortByRelease)
            setNameCheckbox(false)
            setCountryCheckbox(false)
        }
        else{
            setFilter("País")
            movies.sort(sortByCountry)
            setNameCheckbox(false)
            setReleaseCheckbox(false)
        }
    }

    const handleScroll = useCallback(
        direction => {
          setMarginContent(stateMargin => {
            const newValue = stateMargin + (direction === 'left' ? -400 : 400);
    
            const isError = MAX_WIDTH_CONTENT + newValue < window.innerWidth || newValue === 400;
    
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
                    <span>Filtrar por </span>
                    <span>
                        <Checkbox checked={nameCheckbox} setChecked={setNameCheckbox} text="Nome" handleCheck={handleCheck}/>
                        <Checkbox checked={releaseCheckbox} setChecked={setReleaseCheckbox} text="Lançamento" handleCheck={handleCheck}/>
                        <Checkbox checked={countryCheckbox} setChecked={setCountryCheckbox} text="País" handleCheck={handleCheck}/>
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