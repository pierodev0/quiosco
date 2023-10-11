import React from 'react';
import useQuiosco from '../hooks/useQuiosco';
import ResumenProducto from './ResumenProducto';
import { formatearDinero } from '../helpers';

export default function Resumen() {
  const { pedido, total } = useQuiosco();

  const comprobarPedido = () => pedido.length === 0;
  return (
    <aside className='md:w-72 h-screen overflow-x-scroll p-5'>
      <h1 className='text-4xl font-black'>Mi pedido</h1>
      <p className='text-lg my-5'>
        Aqui podras ver el resumen y totales de tu pedido
      </p>
      <div className='py-10'>
        {pedido.length === 0 ? (
          <p>No hay elementos en tu pedido aun</p>
        ) : (
          pedido.map((producto) => (
            <ResumenProducto
              producto={producto}
              key={producto.id}
            />
          ))
        )}

        <p className='my-5 text-xl'>Total: {formatearDinero(total)}</p>
        <form
          action=''
          className='flex flex-col gap-5'
        >
          <div>
            <input
              type='submit'
              value='Confirmar pedido'
              className={`btn-primary w-full ${
                comprobarPedido() ? '!bg-indigo-100 cursor-not-allowed' : ''
              }`}
              disabled={comprobarPedido()}
            />
          </div>
        </form>
      </div>
    </aside>
  );
}
