import React from 'react';

const Detail = ({album, artists, name}) => {
    console.log(album.name);

    return (
        <div className="col-sm-4" >
            <div className="row col-sm-12 px-0">
                <a href={"http://localhost:3000/album?nameal="+album.name+"&artist="+artists[0].name}>
                    <div className={" imagemm w-100"}>
                <img src={album.images[0].url} className={"w-100"}></img>
                    </div>
                </a>
            </div>
            <div className="row col-sm-12 px-0">
                <label htmlFor={name} className="col-sm-12">
                    {name}
                </label>
            </div>
            <div className="row col-sm-12 px-0">
                <a href={"http://localhost:3000/artistas?artist="+artists[0].name} className="link col-sm-12">
                    {artists[0].name}
                </a>
            </div>
        </div>
    );
}

export default Detail;