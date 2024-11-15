/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';




function App(){
  return(
    <div className="container">
      <Foto />
      <div className='data'>
        <Apresentacao />
        <ListaSkill/>
      </div>
    </div>
  )
}

function Foto(){
  return(
      <img className='foto' src="tenta2.jpg"></img>
  )
}

function Apresentacao(){
  return(
    <div className="apresentacao">
      <h1>
      Raissa Luna
    </h1>
    <p>
      Desenvolvedora Front-end. Quando não estou codando, gosto de tocar violino e jogar Northgard. Especialista em React, next.js e typescript. LOREM LOREM LOEM IPSUm
    </p>
    </div>
  )
}

function ListaSkill(){
    return(
      <div className='listaskills'>
        <Skill skill='React' emoji='💪' color='#1234' />
        <Skill skill='Typescript' emoji='🫡' color='yellow'/>
        <Skill skill='Next.js' emoji='🥰' color='blue'/>
        <Skill skill='HTML+CSS' emoji='🥸' color='green'/>
      </div>
    )
}

function Skill(props){
  return(
    <div className='skill' style={{backgroundColor:props.color}}>
      <span>
        {props.skill}
      </span>
      <span>
        {props.emoji}
      </span>
      </div>
  )

}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

