import React from 'react';
import {useState, useEffect} from'react';
import {Row, Col, Containerm, Input} from 'reactstrap';
import FormS from "../componentes/navbar/FormS";

function Search() {


    const[artistas,setArtistas]=useState([]);
    const[search, setSearch]=useState();
    const[isLoading,setIsLoading]=useState(true);



    useEffect(()=>{
        const buscaartista = async () =>{
         try{
             const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${search}&api_key=acb24ec5f7bd68800c7bee59bdfac898&format=json`)
                console.log("yooooooo");
             const artista= await res.json();
             setArtistas(artistas);
             setIsLoading(false);
             console.log(artista);
         }catch (error){
             console.log(error)
         }
        }
            buscaartista();
        }
    ,[search])




console.log(artistas);


    return (
        <div className={"container-fluid bg-light"}>
            <div className={'px-5 py-5'}>
                <h1 className={'px-5 py-5'}>
                    What's on your mind?
                </h1>
            </div>
            <div className={"container"}>
                <p>{search}</p>
                <FormS searchArtist={(procura) => setSearch(procura)}/>
            </div>

            {isLoading ? (<h1>Loading...</h1>):(<p>hellooo</p>)}






        </div>
    )

}

export default Search;