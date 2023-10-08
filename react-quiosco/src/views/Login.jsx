import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <h1 className='text-4xl font-black'>Iniciar Sesión</h1>
      <p>Para crear un pedido debes iniciar sesion</p>
      <div className='bg-white shadow-md rounded-md mt-10 px-5 py-10'>
        <form action=''>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='text-slate-800'
            >
              Email:
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='mt-2 block p-3 bg-gray-50 w-full'
              placeholder='Ingresa tu email'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='text-slate-800 capitalize'
            >
              password:
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='mt-2 block p-3 bg-gray-50 w-full'
              placeholder='Ingresa tu password'
            />
          </div>
          <input
            type='submit'
            value='Iniciar Sesion'
            className='bg-indigo-600 mt-5 hover:bg-indigo-800 text-white w-full p-3 rounded-md font-bold uppercase  cursor-pointer'
          />
        </form>
      </div>
      <nav className='mt-5'>
        <Link to='/auth/registro '>¿No tienes cuenta? Crea una</Link>
      </nav>
    </>
  );
}
