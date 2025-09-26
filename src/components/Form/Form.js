import React, { useState } from 'react';
import { Container } from './styles.js';

import Qrcode from 'qrcode';
import { toast } from 'react-toastify';

export default function Form() {

  const check = {
    checkGeraQrCode: false,
  };

  const [value, setValue] = useState('');

  const handleClick = () => {
    const renderElement = document.querySelector('canvas');
    const inputElement = document.querySelector('.teste');
    const inputValue = value;

    if (!inputValue) return toast.error('Necessário ter um texto para gerar um qr code');

      Qrcode.toCanvas(renderElement, inputValue, (er) => {
        toast.success('Código gerado com sucesso!');
        check.checkGeraQrCode = !check.checkGeraQrCode;
        inputElement.value = '';
        if (er) return console.log(er.message, er.cause);
        return;
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <Container className='form-qr-code' onSubmit={e => handleSubmit(e)}>

        <h2>Gerador de Qr Code</h2>

        <p>Coloque um texto para gerar um Qr Code!</p>

        <input type='text' className='teste' name='qr-code' onChange={e => setValue(e.target.value)}></input>

        <canvas></canvas>

        <button type='button' onClick={handleClick}>Gerar Qr Code</button>

      </Container>
    </>
  );
}
