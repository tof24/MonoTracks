import React from 'react';
import {GenreLink, Box} from "../componentes/styles/Genresstyle";
import Rock from '../imagens/stones.jpg'
import Jazz from '../imagens/jazz.jpg'
import Reggae from '../imagens/reggae.jpg'
import afro from '../imagens/afro.jpg'
import classical from '../imagens/classical.jpg'
import country from '../imagens/country.jpg'
import edm from '../imagens/edm.jpg'
import funk from '../imagens/funk.jpg'
import indie from '../imagens/indie.jpg'
import kpop from '../imagens/kpop.jpg'
import metal from '../imagens/metal.jpg'
import pop from '../imagens/pop.jpg'
import punk from '../imagens/punk.jpg'
import rnb from '../imagens/rnb.jpg'
import soul from '../imagens/soul.jpg'


function Genres() {
    return (
        <div>
            <h1 className={'titulos'}>
                Know more about your favorite genre
            </h1>
            <div className={'genres'}>
                <Box style={{backgroundImage: `url(${Rock})`}}>
                    <GenreLink to="/genres/rock">Rock</GenreLink>
                </Box>
                <Box style={{backgroundImage: `url(${Jazz})`}}>
                    <GenreLink to="/genres/jazz">Jazz</GenreLink>
                </Box>
                <Box style={{backgroundImage: `url(${Reggae})`}}>
                    <GenreLink to="/genres/reggae">Reggae</GenreLink>
                </Box>
                <Box style={{backgroundImage: `url(${punk})`}}>
                    <GenreLink to="/genres/punk">Punk</GenreLink>
                </Box>
                <Box style={{backgroundImage: `url(${rnb})`}}>
                    <GenreLink to="/genres/rnb">R&B</GenreLink>
                </Box>
            </div>
            <div className={'genres'}>
                <Box style={{backgroundImage: `url(${indie})`}}>
                    <GenreLink to="/genres/indie">Indie</GenreLink>
                </Box>
                <Box style={{backgroundImage: `url(${funk})`}}>
                    <GenreLink to="/genres/funk">Funk</GenreLink>
                </Box>
                <Box style={{backgroundImage: `url(${soul})`}}>
                    <GenreLink to="/genres/soul">Soul</GenreLink>
                </Box>
                <Box style={{backgroundImage: `url(${metal})`}}>
                    <GenreLink to="/genres/metal">Metal</GenreLink>
                </Box>
                <Box style={{backgroundImage: `url(${country})`}}>
                    <GenreLink to="/genres/country">Country</GenreLink>
                </Box>
            </div>
            <div className={'genres'}>
                <Box style={{backgroundImage: `url(${classical})`}}>
                    <GenreLink to="/genres/classical">Classical</GenreLink>
                </Box>
                <Box style={{backgroundImage: `url(${afro})`}}>
                    <GenreLink to="/genres/afro">Afro</GenreLink>
                </Box>
                <Box style={{backgroundImage: `url(${edm})`}}>
                    <GenreLink to="/genres/EDM">EDM</GenreLink>
                </Box>
                <Box style={{backgroundImage: `url(${pop})`}}>
                    <GenreLink to="/genres/pop">Pop</GenreLink>
                </Box>
                <Box style={{backgroundImage: `url(${kpop})`}}>
                    <GenreLink to="/genres/K-pop">K-Pop</GenreLink>
                </Box>
            </div>
        </div>
    )
}

export default Genres