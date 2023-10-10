import { formatearDinero } from '../helpers';
import useQuiosco from '../hooks/useQuiosco';
export default function Producto({ producto }) {
  const { nombre, imagen, precio } = producto;
  const {handleClickModal} =  useQuiosco();

  return (
    <div className='border p-3 shadow bg-white flex flex-col'>
      <img
        src={`/img/${imagen}.jpg`}
        alt={`imagen ${nombre}`}
        className='w-full'
      />
      <div className='p-5  flex-1 flex flex-col gap-2'>
        <h3 className='text-2xl font-bold'>{nombre}</h3>
        <p className='font-black text-4xl text-amber-500'>
          {formatearDinero(precio)}
        </p>
        <button className='bg-indigo-600 hover:bg-indigo-800 mt-auto text-white w-full p-3 uppercase font-bold' onClick={()=> handleClickModal()}>
          Agregar
        </button>
      </div>
    </div>
  );
}
