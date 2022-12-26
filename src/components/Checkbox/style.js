import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        all: unset;
        background-color: #fff;
        border-radius: 5px;
        width: 17px;
        height: 17px;
        margin: 0 25px;
    }

    input:checked{
        background-color: #FF6600;
      }
`

export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`

`

export const Text = styled.label`
    ${props =>(
         props.checked ? 'font-weight: bold': ""
    )}
`



export default {Container, HiddenCheckbox, Text}