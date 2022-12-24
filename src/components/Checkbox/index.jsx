import React from 'react';
import {
    Container,
    HiddenCheckbox,
    StyledCheckbox,
    Text
} from './style'

export default function Checkbox({checked, setChecked, text})
{
    function handleCheckboxChange(){
        setChecked(!checked);
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