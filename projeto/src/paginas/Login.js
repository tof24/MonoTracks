import {React, useState, useEffect} from 'react'
import Rock from "../imagens/stones.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'reactstrap'


function Login() {

let i=0;


const[artista, setArtista]=useState([])
    useEffect(()=>{
        const fetchhh = async() =>{
        try{
            const res = await fetch(
                "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Radiohead&api_key=acb24ec5f7bd68800c7bee59bdfac898&format=json"
            )
            let artista = await res.json();
            console.log(artista);
            console.log(artista.artist.name);


                setArtista(artista.artist);




            //setIsLoading(false);
        }catch(error){
            console.log(error);
        }
    }
        fetchhh();
    },[])

    let imagem="oii";
if(artista.name!==undefined){
    let objeto=artista.image[1];
    console.log(artista.image[1]);

    imagem=artista.image[1]["#text"];
    console.log(imagem);
}

    return (
        <div className={"bg-light"}>
            <Container className={""}>
                <Row>
                    <Col className={"imagemMaster col-6"}>

                        <img className={"imagemMaster2"} src={imagem}></img>
                    </Col>
                    <Col classNmae={"col-6"}>
                        <h2 className={"imagemMaster3"}>{artista.name}</h2>
                        <h5 className={"text-justify"}>{artista.bio.summary}</h5>
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