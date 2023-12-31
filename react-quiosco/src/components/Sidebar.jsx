import Categoria from './Categoria.jsx';
import useQuiosco from '../hooks/useQuiosco.js';

export default function Sidebar() {
  const {categorias} = useQuiosco();
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
            <Categoria key={categoria.id} categoria={categoria}/>
          ))}
        </div>
        <div className='my-5 px-5'>
          <button className='text-center bg-red-500 hover:bg-red-600 w-full p-3 font-bold text-white truncate'>Cancelar orden</button>
        </div>
      </div>
    </aside>
  );
}
