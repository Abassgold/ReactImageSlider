import React, { useState } from 'react';
import Slider from './Component/Slider';

const App =()=>{
  const slides = [
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRETs-TvBr23FHfrIGuCVPFs0RzanFq8p8w_w&usqp=CAU', name: 'Azeez Abass'},
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdG2bmwtj6HYMCWta2cMmtXboFC_hdW2CDcw&usqp=CAU', name: 'Hafiz'},
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNJZq0Krrr-YD7hxx26qAV7e-hiLUkI5Emgg&usqp=CAU', name: 'Hikmah'}
  ]

  const styling ={
    width: '500px',
    height: '280px',
    margin: '0 auto'
  }
  return (
    <div>
      <h1>Names of collaborators</h1>
      <div style={styling}>
        <Slider slides={slides} />
      </div>
    </div>
  );
}

export default App;
