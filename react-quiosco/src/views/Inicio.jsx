import Producto from '../components/Producto';
import { productos } from '../data/products';
import useQuiosco from '../hooks/useQuiosco';

export default function Inicio() {

   const {categoriaActual} = useQuiosco();

  return (
    <>
      <h1 className='text-4xl font-black'>{categoriaActual.nombre}</h1>
      <p className='text-2xl my-10'>Elige y personaliza tu pedido a continuacion</p>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {productos.map(producto => (
          <Producto key={producto.id} producto={producto}/>
        ))}
      </div>
    </>
  );
}
