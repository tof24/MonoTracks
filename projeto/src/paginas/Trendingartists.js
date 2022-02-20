import React, {useEffect, useState} from 'react'
import fetchJsonp from "fetch-jsonp";
import {Row, Col, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css";

function Trendingartists() {

    const [artist, setArtist] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(prevState => !prevState);

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

                fetchJsonp('https://api.deezer.com/chart/0/artists&output=jsonp')
                    .then(response => response.json())
                    .then(json => {
                        console.log(json)
                        setArtist(json.data)
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


    console.log(artist);


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

            <div className="justify-content-center d-flex mb-5">
                <Dropdown isOpen={isOpen} toggle={toggle} className="mb-5 pb-5">
                    <DropdownToggle caret>
                        Choose your trend
                    </DropdownToggle>
                    <DropdownMenu
                    >
                        <DropdownItem href="/trending">
                            Tracks
                        </DropdownItem>
                        <DropdownItem href="/trending/artists">
                            Albums
                        </DropdownItem>
                        <DropdownItem href="/trending/albums">
                            Artists
                        </DropdownItem>

                    </DropdownMenu>
                </Dropdown>
            </div>


            <Container className={'trending'}>

                <Row>
                    {artist !== [] && artist.map((musica, i) => (

                        <Col className={'col-4'}>

                            <div>
                                <div key={i}>
                                    <div className={'mt-4 musicastrend'}>{[i + 1] + '  '} {musica.name}</div>
                                    {/*<a href={"http://localhost:3000/album?nameal=" + musica.album.title + "&artist=" + musica.artist.name}>*/}
                                    <img src={musica.picture} alt={musica.title}/>
                                    {/*</a>*/}
                                </div>
                            </div>

                        </Col>
                    ))}

                </Row>

            </Container>
        </div>
    )

}

export default Trendingartists