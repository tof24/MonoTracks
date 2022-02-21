import React from 'react'
import {Container, Row, Col} from "reactstrap";
import './../bootstrap.min.css';
import {GenreLink, Box} from "../componentes/styles/Genresstyle";
import Jazz from '../imagens/jazz.jpg'
import Reggae from '../imagens/reggae.jpg'
import afro from '../imagens/afro.jpg'
import indie from '../imagens/indie.jpg'
import {NavBtnLink} from "../componentes/navbar/Navbarstyle";


function Index() {
    return (
        <div className={"geral"}>

            <div className={"main"}>
                <Container>
                    <div className={"content"}>

                        <div className={"title"}>
                            <h2>Welcome to MonoTracks </h2>
                        </div>

                        <div className={"text-center mt-5"}>
                            Discover new albums, trending artists and tracks, and know more about your favorites of all
                            time.
                            <p className={"mt-4"}>
                                Sign up now to explore all we have to offer!
                            </p>
                        </div>


                    </div>
                </Container>
            </div>

            <Row className={"d-flex justify-content-center"}>

                <Col className={"col-5 m-5 boxindex text-center p-5"}>
                    <p>
                        Create your own playlist based on your current mood. Select a song you really like and we will present you with a brand new playlist that you can listen to or save for ater.
                    </p>


                    <Box className={"text-center m-auto "} style={{backgroundImage: `url(${indie})`}}>
                        <GenreLink to="/playlists">Playlists</GenreLink>
                    </Box>


                </Col>
                <Col className={"col-5 m-5 p-5 boxindex text-center"}>
                    <p className={""}>
                        Find out about the trending artists, tracks and albums on the top charts at the moment!
                    </p>
                    <Row>
                        <Box className={"col-4 d-box"} style={{backgroundImage: `url(${Jazz})`}}>
                            <GenreLink to="/trending">Tracks</GenreLink>
                        </Box>
                        <Box className={"col-4 d-box"} style={{backgroundImage: `url(${Reggae})`}}>
                            <GenreLink to="/trending/albums">Albums</GenreLink>
                        </Box>
                        <Box className={"col-4 d-box"} style={{backgroundImage: `url(${afro})`}}>
                            <GenreLink to="/genres/afro">Artists</GenreLink>
                        </Box>
                    </Row>
                </Col>
                <Col className={"col-5 m-5 boxindex text-center p-5"}>
                    <p className={""}>
                        Search around in our endless library of music.
                    </p>
                    <button className={"botaosignup col-6 mt-3"}>
                        <a href="/search" className={"botaoindex"}>
                            Search Now
                        </a>
                    </button>
                </Col>

            </Row>

        </div>
    )
}

export default Index