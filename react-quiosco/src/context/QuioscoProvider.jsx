import { createContext, useState } from 'react';
import { categorias as categoriasDB } from '../data/categorias';

const QuiscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
  const [modal, setModal] = useState(false)


  const handleClickCategoria = (id) => {
    const categoria = categorias.filter(categoria => categoria.id === id);
    setCategoriaActual(categoria[0]);
  }

  const handleClickModal = () => {
    setModal(!modal);
  }

  return (
    <QuiscoContext.Provider value={{ categorias, categoriaActual,handleClickCategoria,modal,handleClickModal }}>
      {children}
    </QuiscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuiscoContext;
