import React from 'react';

import { categorias } from '../data/categorias.js';

export default function Sidebar() {
  return (
    <aside className='md:w-72'>
      <div>
        <img
          className='w-40'
          src='/public/img/logo.svg'
          alt='logotipo imagen'
        />
        <div className='mt-10'>
          {categorias.map(categoria =>(
            <p>{categoria.nombre}</p>
          ))}
        </div>
      </div>
    </aside>
  );
}
