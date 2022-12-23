import React from 'react'
import {Container, Items} from './style'

import Logo from '../../assets/logo.png';

export default function Header(){

    return(
        <Container>
            <Items>
                <img src={Logo} alt="Logo" />
                <ul>
                    <li>Inicio</li>
                    <li>Filmes</li>
                    <li>Séries</li>
                    <li style={{ fontWeight: 'bold' }}>Favoritos</li>
                    <li>Novidades</li>
                </ul>
            </Items>
        </Container>
    )

}