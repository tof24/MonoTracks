import React, {useEffect, useState} from 'react'
import fetchJsonp from "fetch-jsonp";
import {Row, Col, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css";

function Trendingalbums() {

    const [album, setAlbum] = useState([]);
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

                fetchJsonp('https://api.deezer.com/chart/0/albums&output=jsonp')
                    .then(response => response.json())
                    .then(json => {
                        console.log(json)
                        setAlbum(json.data)
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


    console.log(album);


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

            <div className="justify-content-end d-flex pr-5 mr-5 mb-5">
                <Dropdown isOpen={isOpen} toggle={toggle}>
                    <DropdownToggle caret>
                        Choose your trend
                    </DropdownToggle>
                    <DropdownMenu
                    >
                        <DropdownItem href="/trending">
                            Tracks
                        </DropdownItem>
                        <DropdownItem href="/trending/albums">
                            Albums
                        </DropdownItem>
                        <DropdownItem href="/trending/artists">
                            Artists
                        </DropdownItem>

                    </DropdownMenu>
                </Dropdown>
            </div>


            <Container className={'trending'}>

                <Row>
                    {album !== [] && album.map((musica, i) => (

                        <Col className={'col-4'}>

                            <div>
                                <div className={"text-center"} key={i}>
                                    <div className={'mt-4 musicastrend'}>{[i + 1] + '  '} {musica.title}</div>
                                    <a href={"http://localhost:3000/album?nameal=" + musica.title + "&artist=" + musica.artist.name}>
                                        <img src={musica.cover} alt={musica.title}/>
                                    </a>
                                </div>
                            </div>

                        </Col>
                    ))}

                </Row>

            </Container>
        </div>
    )

}

export default Trendingalbums