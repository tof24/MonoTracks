import {React, useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'reactstrap';


function Album() {

    let catchh=0;

// *********** Api de Album info *******************

    const queryParams = new URLSearchParams(window.location.search);
    const namealbum = queryParams.get('nameal');
    const artista = queryParams.get('artist');
    const mbid = queryParams.get('mbid');


    const [album, setAlbum] = useState([])
    useEffect(() => {
        const fetchhh2 = async () => {
            try {
                const res = await fetch(
                    "https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=acb24ec5f7bd68800c7bee59bdfac898&artist=" + artista + "&album=" + namealbum + "&format=json"
                )
                let album = await res.json();
                console.log(album.album);

                setAlbum(album.album);


                //setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        if (artista !== null) {
            fetchhh2();
        }
    }, [])

    // *********** Api de Album se for por Mbid *******************

    useEffect(() => {
        const fetchhh3 = async () => {
            try {
                const res = await fetch(
                    "https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=acb24ec5f7bd68800c7bee59bdfac898&mbid=" + mbid + "&format=json"
                )
                let album = await res.json();
                console.log(album.album);

                setAlbum(album.album);


                //setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        if (mbid !== null) {
            fetchhh3();
        }
    }, [])


    let sumario;
    let sumario2;
    let imagema;
    let trackis = [];


try {


    if (album.artist !== undefined) {
        if (album.wiki !== undefined) {
            sumario = album.wiki.summary;
            sumario2 = sumario.split('<a');
            sumario2.pop();
        } else {
            sumario = "No summary available";
            sumario2 = "No summary available";
        }


        if (album.tracks.track == "") {
        }
        imagema = album.image[5]["#text"];
        trackis = album.tracks.track;


        if (trackis.map !== []) {
            trackis = Array.from(trackis);
            console.log("oi")
            console.log(trackis);
            if (trackis.length == 0) {

                trackis = [{
                    name: album.tracks.track.name,
                    duration: album.tracks.track.duration
                }
                ]


                console.log(album.tracks.track.name);
            }
        }

    }
}
catch (error){
    console.log(error);
    catchh=1;

}
finally {
    if (catchh==1){
        trackis = [{
            name: "No match found",
            duration: 0
        }
        ]
        imagema="https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png";
    }
}


    function tempomuica(tempo) {
        const sec = parseInt(tempo, 10);
        let horas = Math.floor(sec / 3600);
        let minutos = Math.floor((sec - (horas * 3600)) / 60);
        let segundos = sec - (horas * 3600) - (minutos * 60);
        if (horas < 10) {
            horas = "0" + horas;
        }
        if (minutos < 10) {
            minutos = "0" + minutos;
        }
        if (segundos < 10) {
            segundos = "0" + segundos;
        }
        return horas + ':' + minutos + ':' + segundos; // Return is HH : MM : SS
    }

    return (

        <div className={"bg-light"}>
            <div className={"container-fluid bg-gradient bg-dark"}>
                <Container className={"py-5"}>
                    <Row className={"pb-5"}>
                        <Col className={"imagemMaster col-6"}>

                            <img className={"imagemMaster2 border border-warning"} src={imagema}></img>
                        </Col>
                        <Col className={"col-6"}>
                            <h2 className={"imagemMaster3 "}>{album.name}</h2>
                            <h5 className={"text-muted border-bottom mb-4 pb-1"}>{album.artist}</h5>
                            <p className={"text-justify text-light fw-light"}>{sumario2}</p>

                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>

                <h3 className={"py-5"}>Tracks</h3>
                <div className={"pb-5 mb-5"}>
                    {trackis.map((faixa, i) => (
                        <div key={i}>
                            <div className={""}>

                                <Row className={"text-right border-bottom py-3"}>
                                    <Col className={"w-100 text-left "}>
                                        <span>{i + 1} - {trackis[i].name}</span>
                                    </Col>
                                    <Col className={"text-right"}>
                                        <span>{tempomuica(trackis[i].duration)}</span>
                                    </Col>
                                </Row>

                            </div>
                        </div>
                    ))}

                </div>
            </Container>
        </div>


    )

}

export default Album



