import React from 'react';
import {useState} from 'react';


const FormS = ({searchArtist}) =>{
    const[procura, setProcura]=useState('')
    const handleSubmit = (e) =>{
        e.preventDefault();
        searchArtist(procura);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setProcura(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )


}

export default FormS;