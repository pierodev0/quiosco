import { formatearDinero } from '../helpers';
import useQuiosco from '../hooks/useQuiosco';

export default function ModalProducto() {
  const { producto, handleClickModal } = useQuiosco();
  const { imagen, nombre, precio } = producto;
  return (
    <div className='md:flex gap-10'>
      <div className='w-1/2'>
        <img
          src={`/public/img/${imagen}.jpg`}
          alt={`producto ${nombre}`}
        />
      </div>
      <div className='w-2/3'>
        <div className='flex justify-end'>
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
            <p className='font-black text-5xl text-amber-500'>{formatearDinero(precio)}</p>
            <button className='btn-primary'>Agregar al pedido</button>
        </div>
      </div>
    </div>
  );
}
