import React, { Component } from 'react';

const numberA = 2
const numberB = 5
const result = 0

const handleMyEvent = (e) =>{

   console.log(numberA+numberB)
};

const Challenge = () => {

    return(
        <div>
            <h2>Esse é o primeiro numero: {numberA}</h2>
            <h2>Esse é o segundo numero: {numberB}</h2>



            <button onClick={handleMyEvent}>Essa é a soma de ambos: </button>
        </div>
    )
}

export default Challenge