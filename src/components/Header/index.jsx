import React from 'react'
import {Container, Items} from './style'

export default function Header(){

    return(
        <Container>
            <Items>
                <ul>
                    <li>Inicio</li>
                    <li>Filmes</li>
                    <li style={{ fontWeight: 'bold' }}>Favoritos</li>
                    <li>Novidades</li>
                </ul>
            </Items>
        </Container>
    )

}