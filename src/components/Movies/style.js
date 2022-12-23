import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 40px 0;

    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;

    h1 {
        z-index: 7;
        svg {
          width: 25px;
          height: 25px;
          color: #ff0000;
        }
      }

      > button {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        z-index: 6;
        background: rgba(20, 20, 20, 0.8);
        border: 0;
        
        svg {
          width: 40px;
          height: 40px;
          color: #fff;
        }

        visibility: hidden;

        &:hover {
          svg {
            width: 45px;
            height: 45px;
          }
        }
      }

      &:hover {
        button {
          visibility: visible;
        }
      }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    transition: margin-left 1s;
`

export const Movie = styled.div`
    position: relative;
    height: auto;
    width: 200px;

    img {
        position: relative;
        z-index: 5;
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.6s;
    }
    
    &:hover {
      cursor: pointer;
      > div {
        top: 0;
        left: 10px;
        z-index: 10;
        width: 300px;
        height: 300px;
        transform: scale(1) translateX(90px);
        opacity: 1;
        border-radius: 0 8px 8px 0;
      }
      img {
        border-radius: 8px 0 0 8px;
        transform: scale(1) translateX(-100px);
      }
      &:last-child > div {
        top: 0;
        left: 10px;
        z-index: 10;
        width: 300px;
        height: 300px;
        transform: scale(1) translateX(-260px);
        opacity: 1;
        border-radius: 8px 0 0 8px;
      }

      &:last-child > img {
        border-radius:  0 8px 8px 0;
        transform: scale(1) translateX(50px);
      }
    }
`

export const MovieCard = styled.div`
  position: absolute;
  top: 15px;
  left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: 1;
  opacity: 0;
  margin: 0 auto;
  padding: 0 20px;
  width: 90%;
  height: 270px;
  background: rgba(26, 26, 26, 0.98);
  transition: all ease 0.6s;

  strong {
    font-size: 30px;
    text-align: center;
    margin-bottom: 5px;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 10px;


  span {
    font-size: 20px;
    & + span {
      margin-left: 20px;
    }
    &:nth-child(1) {
      color: #46d369;
      font-weight: 700;
    }
  }
`


export const ButtonLetf = styled.button`
  left: 0;
`
export const ButtonRight = styled.button`
  right: 0;
`

export default {Container, Wrapper, Movie, MovieCard, Infos, ButtonLetf, ButtonRight}