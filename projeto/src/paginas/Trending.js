import React, {useEffect, useState} from 'react'
import fetchJsonp from "fetch-jsonp";

function Trending() {

    const[chart, setChart]=useState([])
    useEffect(()=>{
        const fetchhh3 = async() =>{
            try{
                // const res = await fetchJsonp(
                //     "https://api.deezer.com/chart/0/artists"
                // )
                // let chart = await res.json();
                // console.log("estou aqui")
                // console.log(chart);
                // setChart(chart.data);

                fetchJsonp('https://api.deezer.com/chart/0/albums&output=jsonp')
                    .then(function(response) {
                        return response.json();
                    })
                    .then(json => console.log(json))
                    .catch(function(error) { console.log(error); });



                //setIsLoading(false);
            }catch(error){
                console.log(error);
            }
        }
        fetchhh3();
    },[])

    let imagema=[];
    let nomeal=[];
    if(chart.data!==undefined){
        for(let i=0; i<12; i++){

            console.log(chart);
        }
    }



    return(
        <div>
            <h1 className={'titulos'}> Trending </h1>

        </div>
    )

}

export default Trending