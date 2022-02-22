import React from 'react';
import {useState} from 'react';
import {Input, Row, Col} from "reactstrap";


const FormS = ({searchArtist}) =>{
    const[procura, setProcura]=useState('')
    const handleSubmit = (e) =>{
        e.preventDefault();
        searchArtist(procura);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col md="8">
                <Input type="text" onChange={(e) => setProcura(e.target.value)}/>
                    </Col>
                    <Col md="4">
                <button type="submit" className={"btn btn-dark"}>Search</button>
                    </Col>
                </Row>
            </form>
        </div>
    )


}

export default FormS;