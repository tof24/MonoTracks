import React, {useEffect, useState} from 'react'
import fetchJsonp from "fetch-jsonp";
import {Row, Col, Container} from 'reactstrap'

function Trending() {

    const [chart, setChart] = useState([])
    useEffect(() => {
        const fetchhh3 = async () => {
            try {
                // const res = await fetchJsonp(
                //     "https://api.deezer.com/chart/0/artists"
                // )
                // let chart = await res.json();
                // console.log("estou aqui")
                // console.log(chart);
                // setChart(chart.data);

                fetchJsonp('https://api.deezer.com/chart/0/tracks&output=jsonp')
                    .then(response => response.json())
                    .then(json => {
                        console.log(json)
                        setChart(json.data)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });


                //setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchhh3();


    }, []);


    console.log(chart);


    // let imagemc=[];
    // let nomech=[];
    // if(chart!==undefined){
    //     for(let i=0; i<12; i++){
    //         nomech[i]=chart.data[i].name;
    //         //imagemc[i]=album.album[i].image[3]["#text"];
    //         console.log(nomech);
    //     }
    // }


    return (


        <div>

            <h1 className={'trendingtitulo'}> Trending </h1>

            <Container className={'trending'}>

                <Row>
                    {chart !== [] && chart.map((musica, i) => (

                        <Col className={'col-4'}>

                            <div>
                                <div key={i}>
                                    <div className={'mt-4'}>{[i + 1] + '  '} {musica.title}</div>
                                    <img src={musica.album.cover} alt={musica.title}/>
                                </div>
                            </div>

                        </Col>
                    ))}

                </Row>

            </Container>
        </div>
    )

}

export default Trending