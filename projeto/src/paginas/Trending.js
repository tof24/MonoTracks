import React, {useEffect, useState} from 'react'

function Trending() {

    fetch("https://spotfiy-charts.p.rapidapi.com/?type=regional&country=global&recurrence=weekly&date=latest", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spotfiy-charts.p.rapidapi.com",
            "x-rapidapi-key": "eac7f954a5mshca607d23fc03be2p1e4d9fjsn0aca8590ae0e"
        }
    })
        .then(response => {
            console.log(response.json());
        })
        .catch(err => {
            console.error(err);
        });





    return(
        <div>
            <h1 className={'titulos'}> Trending </h1>

        </div>
    )

}

export default Trending