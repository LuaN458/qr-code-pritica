import React, { useState } from 'react';
import { Container } from './style';
import Qrcode from 'qrcode';

import {opts as options} from '../utils/option.js';

export default function Form() {

  const [value, setValue] = useState('');

  const handleClick = () => {
    const renderElement = document.querySelector('canvas');
    const inputValue = value;

    if(!inputValue) return alert('Necessário ter um texto para gerar um Qr Code');

    Qrcode.toCanvas(renderElement, inputValue, (er) => {
      if(er) return console.log(er);
    });
  }

  return (
    <>
      <Container className='form-qr-code'>

        <h2>Gerador de Qr Code</h2>

        <p>Coloque um texto para gerar um Qr Code!</p>

        <input type='text' name='qr-code' onChange={e => setValue(e.target.value)}></input>

        <canvas></canvas>

        <button type='button' onClick={handleClick}>Gerar Qr Code</button>


      </Container>
    </>
  );
}
