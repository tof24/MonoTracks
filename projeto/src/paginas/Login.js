import {React, useState, useEffect} from 'react'
import Rock from "../imagens/stones.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'reactstrap';



function Login() {

let i=0;

//*********** Api de artista *******************
const[artista, setArtista]=useState([])
    useEffect(()=>{
        const fetchhh = async() =>{
        try{
            const res = await fetch(
                "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Madona&api_key=acb24ec5f7bd68800c7bee59bdfac898&format=json"
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
let sumario="oii";
if(artista.name!==undefined){
    console.log(artista.image[1]);
    sumario=artista.bio.summary;
    imagem=artista.image[1]["#text"];
    console.log(imagem);
}


//*********** Api de Artista *******************
// *********** Api de Album *******************

    const[album, setAlbum]=useState([])
    useEffect(()=>{
        const fetchhh2 = async() =>{
            try{
                const res = await fetch(
                    "https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Madona&api_key=acb24ec5f7bd68800c7bee59bdfac898&format=json"
                )
                let album = await res.json();
                console.log("estou aqui")
                console.log(album);



                setAlbum(album.topalbums);




                //setIsLoading(false);
            }catch(error){
                console.log(error);
            }
        }
        fetchhh2();
    },[])

    let imagema=[];
    let nomeal=[];
    if(album.album!==undefined){
        for(let i=0; i<12; i++){
        nomeal[i]=album.album[i].name;
        imagema[i]=album.album[i].image[3]["#text"];
        console.log(nomeal);
        }
    }


    let sumario2= sumario.split('<a');

    return (
        <div className={"bg-light"}>
            <Container className={""}>
                <Row>
                    <Col className={"imagemMaster col-6"}>

                        <img className={"imagemMaster2"} src={imagem}></img>
                    </Col>
                    <Col classNmae={"col-6"}>
                        <h2 className={"imagemMaster3"}>{artista.name}</h2>
                        <h5 className={"text-justify"}>{sumario2[0]}</h5>

                    </Col>
                </Row>

            <h3 className={"py-5"}>Albuns</h3>
                <h5 className={"py-5"}>Top <span className={"font-weight-bold text-muted"}>{artista.name}'s</span> Albums</h5>
                <Row>
                    {nomeal.map((album,i)=>(
                        <Col>
                            <div className={"text-center"}>
                                <a href={"http://localhost:3000/albuns&" + nomeal[i] + "&" + artista.name}><img src={imagema[i]}/></a>
                                <p >{nomeal[i]}</p>
                            </div>
                        </Col>
                        ))}

                </Row>




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