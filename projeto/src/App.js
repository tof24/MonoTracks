import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from "./componentes/navbar/Navbar";
import Index from "./paginas/Index";
import Login from "./paginas/Login";
import Album from "./paginas/Album";
import CreatePlaylist from "./paginas/CreatePlaylist";
import Genres from "./paginas/Genres";
import Trending from "./paginas/Trending";
import Trendingalbums from "./paginas/Trendingalbums";
import Trendingartists from "./paginas/Trendingartists";
import Genrerock from "./paginas/Genrerock";
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'
import Search from "./paginas/Search";



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
                <Route path="/trending/artists" element={<Trendingartists/>}>

                </Route>
                <Route path="/trending/albums" element={<Trendingalbums/>}>

                </Route>


                <Route path="/genres" element={<Genres/>}>

                </Route>
                <Route path="/genres/rock" element={<Genrerock/>}>

                </Route>
                <Route path="/album" element={<Album/>}>

                </Route>
                <Route path="/search" element={<Search/>}>

                </Route>

            </Routes>
        </Router>
    )
}

export default App;
