import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 20px 0;

    background: #000;
    transition: background 0.8s;
`
export const Items = styled.div`
    display: flex;
    align-items: center;

    ul{
        list-style: none;
        display: flex;
        align-items: center;

        li {
            font-size: 20px;
            color: #FFF;
            font-weight: 400;
            transition: 0.5s all;
            & + li {
                margin-left: 20px;
            }
            &:hover {
                color: rgba(255,255,255,0.7);
                cursor: pointer;
            }
        }
    }
`

export default {Container, Items}