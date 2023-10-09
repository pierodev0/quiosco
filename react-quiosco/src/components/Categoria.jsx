import useQuiosco from '../hooks/useQuiosco.js';

export default function Categoria({ categoria }) {

  const {handleClickCategoria,categoriaActual} = useQuiosco();
  const { icono, id, nombre } = categoria;
  return (
    <div className={`flex items-center gap-4 border w-full p-3 hover:bg-amber-300 cursor-pointer ${ categoriaActual.id === id ? 'bg-amber-400': ''}`}>
      <img
        src={`/img/icono_${icono}.svg`}
        alt='Imagen icono'
        className='w-12'
      />
      <button type='button' className="font-bold truncate" onClick={()=> handleClickCategoria(id)}>{nombre}</button>
    </div>
  );
}
