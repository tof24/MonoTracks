import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from "./componentes/navbar/Navbar";
import Index from "./paginas/Index";
import Login from "./paginas/Login";
import CreatePlaylist from "./paginas/CreatePlaylist";
import Genres from "./paginas/Genres";
import Trending from "./paginas/Trending";
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'
import {Container} from "reactstrap";

const CLIENT_ID = "36bda1e027224da29154f586f03b0e47"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"


function App() {
    return (
        <Router>
            <Navbar/>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
            <Routes>
                <Route path="/" element={<Index/>}>

                </Route>
                <Route path="/login" element={<Login/>}>

                </Route>
                <Route path="/playlists" element={<CreatePlaylist/>}>

                </Route>
                <Route path="/trending" element={<Trending/>}>

                </Route>
                <Route path="/genres" element={<Genres/>}>

                </Route>
            </Routes>
        </Router>
    )
}

export default App;
