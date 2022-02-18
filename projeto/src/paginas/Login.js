import React from 'react'
import Rock from "../imagens/stones.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'reactstrap'




function Login() {
    return (
        <div className={"bg-light"}>
            <Container className={""}>
                <Row>
                    <Col className={"imagemMaster"}>
                        <img className={"imagemMaster2"} src={require('../imagens/afro.jpg')}></img>
                    </Col>
                    <Col>
                        <h2 className={"imagemMaster3"}>Nome do Artista</h2>
                        <h5 className={"text-justify"}> The Dark Side of the Moon is the eighth studio album by the English rock band Pink Floyd, released on 1 March 1973 by Harvest Records. Primarily developed during live performances, the band premiered an early version of the suite several months before recording began. The record was conceived as an album that focused on the pressures faced by the band during their arduous lifestyle, and dealing with the apparent mental health problems suffered by former band member Syd Barrett, who departed the group in 1968. New material was recorded in two sessions in 1972 and 1973 at Abbey Road Studios in London.</h5>
                    </Col>
                </Row>

            <h3 className={"py-5"}>Albuns</h3>




            </Container>

        </div>
    )
}

export default Login



/*
<Row>
<Col>

</Col>
<Col className={"imagemMaster"}>
<h3>hellooo</h3>
</Col>
</Row>

<h1>Nome do artista</h1>*/