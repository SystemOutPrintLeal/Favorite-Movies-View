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
`

export const ButtonLetf = styled.button`
  left: 0;
`
export const ButtonRight = styled.button`
  right: 0;
`

export default {Container, Wrapper, Movie,ButtonLetf, ButtonRight}