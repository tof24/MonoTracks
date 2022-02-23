import React from 'react';

const Lista = props => {

    const clicked = e => {
        e.preventDefault();
        props.clicked(e.target.id);
    }

    return (
        <div className="col-sm-6 px-0">
            <div className="bg-light border border-dark">
                {
                    props.items.map((item, id) =>
                        <button key={id} onClick={clicked} className="ml-4 pl-1 bg-light list-group-item link border-left-0 border-right-0 border-bottom-0 border-top-0 pl-0" id={item.track.id}>{item.track.name} </button>)
                }
            </div>
        </div>


    );
}

export default Lista;