import React, { Component } from 'react';

const handleMyEvent = (e) =>{

    console.log(e);
    console.log("Ativou o evento");
};

const Events = () => {

    return(
        <div>
            <button onClick={handleMyEvent}>Clique Aqui</button>
        </div>
    )
}

export default Events;