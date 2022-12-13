import React, { Component } from 'react';

const handleMyEvent = (e) =>{

    console.log(e);
    console.log("Ativou o evento");
};


const renderSomething = (x) =>
{
    if(x){
        return <h1>Renderizando isso!</h1>
    }else{
        return <h1>Também posso renderizar isso!</h1>
    }
}
    const Events = () => {

    return(
    <div>
        <div>
            <button onClick={handleMyEvent}>Clique Aqui</button>
        </div>
        <div>
            <button onClick={()=> console.log("Dedo sentado com sucesso")}>
                Senta o dedo ai, tiu!
            </button>
            <button onClick={()=>{
                if(true){
                    console.log("isso não deveria existir")
                } 
            }}>Clica pra nois ai</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
        
    )
}

export default Events;