import React from 'react';
import {useState, useEffect} from'react';
import {Row, Col, Containerm, Input} from 'reactstrap';
import FormS from "../componentes/navbar/FormS";

function Search() {


    const[artista,setArtistas]=useState([]);
    const[album,setAlbum]=useState([]);
    const[search, setSearch]=useState('');
    const[isLoading,setIsLoading]=useState(true);



    useEffect(()=>{
        const buscaartista = async () =>{
         try{
             const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${search}&api_key=acb24ec5f7bd68800c7bee59bdfac898&format=json`)
             const artista= await res.json();
             setArtistas(artista);
             setIsLoading(false);
         }catch (error){
             console.log(error)
         }
        }
            buscaartista();
        }
    ,[search])

    useEffect(()=>{
            const buscaalbum = async () =>{
                try{
                    const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${search}&api_key=acb24ec5f7bd68800c7bee59bdfac898&format=json`)
                    const album= await res.json();
                    setAlbum(album);
                    console.log(album);
                    setIsLoading(false);
                }catch (error){
                    console.log(error)
                }
            }
            buscaalbum();
        }
        ,[search])


    let resultadoart=[];
    let resultadoalb=[];
    let resultadoalbart=[];


    try {
        if (artista.results !== undefined || album.results !== undefined){
        if  (artista.results !== undefined){
            for (let i = 0; i < 6; i++) {
                resultadoart[i]=artista.results.artistmatches.artist[i].name;
            }
        }
        if (album.results !== undefined){
            for (let i = 0; i < 6; i++) {
                resultadoalb[i]=album.results.albummatches.album[i].name;
                resultadoalbart[i]=album.results.albummatches.album[i].artist;
            }
        }
        }
    }catch (error){
        console.log(error)
    }finally
    {
        if (resultadoart[0]==undefined){
        resultadoart[0]="No match available";
        resultadoalb[0]="No match available";
        resultadoalbart[0]="No match available";
        }
    }


    return (
        <div className={"container-fluid bg-light mx-0 px-0"}>
        <div className={""}>
            <div className={"backii"}>
            <div className={'px-5 py-5'}>
                <h1 className={'px-5 pt-5 text-light'}>
                    What's on your mind?
                </h1>
                <h5 className={"text-secondary pb-5 px-5"}>Search for it</h5>
            </div>
            <div className={"container pb-5 pl-5"}>

                <FormS searchArtist={(procura) => setSearch(procura)}/>
            </div>

            </div>

            {isLoading ? (<h1>Loading...</h1>):(<h3 className={"pt-5 pl-5"}>Searching for <strong>{search}</strong></h3>)}
            <div className={"container bg-light"}>
            <div className={"pl-5 ml-5 "}>
                <h1 className={"py-5"}>Artistas</h1>
            {resultadoart.map((artista, i) => (
                <div key={i}>
                    <div className={"pl-5"}>
                        <p><a className={"link pr-5 mb-3"} href={"http://localhost:3000/artistas?artist="+resultadoart[i]}>{resultadoart[i]}</a></p>
                    </div>
                </div>
            ))}
            </div>


            <div className={"pl-5 ml-5"}>
                <h1 className={"py-5"}>Albuns</h1>
                {resultadoalb.map((album, i) => (
                    <div key={i}>
                        <div className={"pl-5"}>
                            <p className={""}><a className={"link pr-5 mb-3"} href={"http://localhost:3000/album?nameal="+resultadoalb[i]+"&artist="+resultadoalbart[i]}>{resultadoalb[i]} - {resultadoalbart[i]}</a></p>
                        </div>
                    </div>
                ))}
            </div>
            </div>


        </div>
        </div>
    )

}

export default Search;