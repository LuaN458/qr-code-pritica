import React, { useState } from 'react';
import { Container } from './styles.js';

import Qrcode from 'qrcode';
import html2pdf from 'html2pdf.js';
import { opt } from '../utils/options-pdf.js';
import { toast } from 'react-toastify';

export default function Form() {

  const check = {
    checkGeraQrCode: false,
  };

  const [value, setValue] = useState('');

  const handleClick = () => {
    const renderElement = document.createElement('canvas');
    const inputElement = document.querySelector('.teste');
    const insertElement = document.querySelector('.render-qr-code');
    const qrcodes = document.querySelectorAll('canvas');
    const inputValue = value;

    if (!inputValue) return toast.error('Necessário ter um texto para gerar um qr code');

    Qrcode.toCanvas(renderElement, inputValue, (er) => {
      if (qrcodes.length > 0) qrcodes.forEach(el => el.remove());
      toast.success('Código gerado com sucesso!');
      check.checkGeraQrCode = !check.checkGeraQrCode;
      inputElement.value = '';
      insertElement.appendChild(renderElement);
      setValue('');
      if (er) toast.error(er.message);
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  const handleClickPdf = () => {
    const element = document.querySelector('canvas');

    if(!element) {
      return toast.error('Sem qr code para gerar um pdf');
    }

    html2pdf().set(opt).from(element).save();
  }

  return (
    <>
      <Container className='form-qr-code' onSubmit={e => handleSubmit(e)}>

        <h2>Gerador de Qr Code</h2>

        <p>Coloque um texto para gerar um Qr Code!</p>

        <input type='text' className='teste' name='qr-code' onChange={e => setValue(e.target.value)}></input>

        <div className='render-qr-code'></div>

        <div className='form-buttons'>
          <button type='button' onClick={handleClick}>Gerar Qr Code!</button>
          <button type='button' onClick={handleClickPdf}>Salvar Qrcode!</button>
        </div>

      </Container>
    </>
  );
}
