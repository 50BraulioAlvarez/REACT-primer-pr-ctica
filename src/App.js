import React from 'react';
import Card from './component/Card'
import barbados from './Barbados_beach.jpg'
import palenque from './palenque.jpg'
import './App.css';

const App = () => {
  const a ='Chiapas';
  const b ='5';
  const c ='Palenque'
  // JSX => Implementacion a JS
  return (
    <div>
      <h1 className="text-red">Hola React</h1>
      <h2>Mi primer react</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adip</p>
      <Card image={barbados} title= 'Barbados' score='3' address='Playa de Barbados' />
      <Card image={barbados} title= {a} score={b} address={c} superhost />
    </div>
  );
}

export default App;
