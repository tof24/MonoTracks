import {React, useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'reactstrap';



function Album() {

// *********** Api de Album info *******************

    const queryParams = new URLSearchParams(window.location.search);
    const namealbum = queryParams.get('nameal');
    const artista = queryParams.get('artist');
    console.log(namealbum);
    console.log(artista);

    const[album, setAlbum]=useState([])
    useEffect(()=>{
        const fetchhh2 = async() =>{
            try{
                const res = await fetch(
                    "https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=acb24ec5f7bd68800c7bee59bdfac898&artist="+artista+"&album="+namealbum+"&format=json"
                )
                let album = await res.json();
                console.log(album.album);

                setAlbum(album.album);




                //setIsLoading(false);
            }catch(error){
                console.log(error);
            }
        }
        fetchhh2();
    },[])


    return (
        <div className={"bg-light"}>
            <h1>hellooooooooo</h1>
        </div>
    )

}

export default Album



