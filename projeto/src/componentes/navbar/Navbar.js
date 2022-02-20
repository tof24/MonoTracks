import React from 'react'
import {
    Nav, NavLink, NavMenu, NavBtn, NavBtnLink
} from "./Navbarstyle";

function Navbar() {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h2> Mono Tracks</h2>
                </NavLink>
                <NavMenu>
                    <NavLink to="/genres" >
                        Genres
                    </NavLink>
                    <NavLink to="/trending" >
                        Trending
                    </NavLink>
                    <NavLink to="/playlists" >
                        Playlists
                    </NavLink>
                    <NavLink to="/search" >
                        Search
                    </NavLink>

                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/login">
                        Login
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar