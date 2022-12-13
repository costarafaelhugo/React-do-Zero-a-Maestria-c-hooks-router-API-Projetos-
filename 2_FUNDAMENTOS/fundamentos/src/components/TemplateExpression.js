import React, { Component } from 'react';


const TemplateExpressions = () =>{

    const name = "Hugo"
    const data = {
        age: 31,
        job: "Dev"
    };

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{4+4}</p>
        </div>
    )
}

export default TemplateExpressions