export default function Registro() {
  return (
    <>
      <h1 className='text-4xl font-black'>Crea tu cuenta</h1>
      <p>Crea tu cuenta llenando el formulario</p>
      <div className='bg-white shadow-md rounded-md mt-10 px-5 py-10'>
        <form action=''>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='text-slate-800'
            >
              Nombre:
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='mt-2 block p-3 bg-gray-50 w-full'
            />
          </div>
        </form>
      </div>
    </>
  );
}
