//Components
import React, { Component } from 'react';
import FirstComponent from './components/FirstComponent';

//Styles CSS
import './App.css';
import TemplateExpressions from './components/TemplateExpression';
import Mycomponent from './components/MyComponent';

//Challenge
import Challenge from './components/Challenge';

//Eventos
import Events from './components/Events';

function App() {
      return (
      <div className="App">
       <h1>Fundamentos React</h1> 
       <FirstComponent/>
       <TemplateExpressions/>
       <Mycomponent/>
       <Events/>
       <Challenge/>
      </div>
    );
  }

export default App;
