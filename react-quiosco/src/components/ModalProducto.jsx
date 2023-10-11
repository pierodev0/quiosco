import { useState, useEffect } from 'react';
import { formatearDinero } from '../helpers';
import useQuiosco from '../hooks/useQuiosco';

export default function ModalProducto() {
  const { producto, handleClickModal, handleAgregarPedido, pedido } =
    useQuiosco();
  const { imagen, nombre, precio } = producto;
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  useEffect(() => {
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      const productoEdicion = pedido.filter(
        (pedidoState) => pedidoState.id === producto.id,
      )[0];
      setCantidad(productoEdicion.cantidad);
      setEdicion(true)
    }
  }, [pedido]);

  return (
    <div className='flex flex-col md:flex-row p-6 md:p-3 gap-4 md:gap-10 relative md:static'>
      <div className='md:w-1/2'>
        <img
          className='h-[300px] md:h-auto w-full object-contain'
          src={`/public/img/${imagen}.jpg`}
          alt={`producto ${nombre}`}
        />
      </div>
      <div className='md:w-2/3'>
        <div className='absolute top-0 right-0 md:static flex justify-end'>
          <button
            className='justify-self-end'
            onClick={handleClickModal}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
        </div>
        <div className='flex flex-col gap-3 items-start'>
          <h1 className='text-2xl font-bold'>{nombre}</h1>
          <p className='font-black text-5xl text-amber-500'>
            {formatearDinero(precio)}
          </p>
          <div className='flex gap-4'>
            <button
              onClick={() => {
                if (cantidad <= 1) return;
                setCantidad(cantidad - 1);
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </button>
            <p className='text-2xl'>{cantidad}</p>
            <button
              onClick={() => {
                if (cantidad >= 5) return;
                setCantidad(cantidad + 1);
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </button>
          </div>
          <button
            className='btn-primary'
            onClick={() => {
              handleAgregarPedido({ ...producto, cantidad });
              handleClickModal();
            }}
          >
            {edicion ? 'Guardar cambios' : 'Agregar al pedido'}
          </button>
        </div>
      </div>
    </div>
  );
}
