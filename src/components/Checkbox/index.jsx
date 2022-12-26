import React from 'react';
import {
    Container,
    HiddenCheckbox,
    Text
} from './style'

export default function Checkbox({checked, setChecked, text, handleCheck})
{
    function handleCheckboxChange(){
        setChecked(!checked);
        handleCheck(text)
     }

    return(
        <Container>
            <HiddenCheckbox 
                onChange={handleCheckboxChange}
                checked={checked}/>
            <Text checked={checked}> {text} </Text>
        </Container>
    )
}