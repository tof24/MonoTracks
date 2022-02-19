import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from "./componentes/navbar/Navbar";
import Index from "./paginas/Index";
import Login from "./paginas/Login";
import CreatePlaylist from "./paginas/CreatePlaylist";
import Genres from "./paginas/Genres";
import Trending from "./paginas/Trending";
import Genrerock from "./paginas/Genrerock";
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'
import axios from "axios";
import {Container} from "reactstrap";


function App() {
    return (
        <Router>
            <Navbar/>
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
                <Route path="/genres/rock" element={<Genrerock/>}>

                </Route>

            </Routes>
        </Router>
    )
}

export default App;
