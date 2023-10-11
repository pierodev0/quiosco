import { createContext, useState } from 'react';
import { categorias as categoriasDB } from '../data/categorias';
import { useEffect } from 'react';

const QuiscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
  const [modal, setModal] = useState(false);
  const [producto,setProducto] = useState({});
  const [pedido,setPedido] = useState([]);  

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((categoria) => categoria.id === id);
    setCategoriaActual(categoria[0]);
  };

  const handleClickModal = () => {
    setModal(!modal);
  };

  const handleSetProducto = (producto) => {
    setProducto(producto)
  }

  const handleAgregarPedido = ({categoria_id,imagen,...producto}) => {
    setPedido([...pedido,producto])
  }

  return (
    <QuiscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        modal,
        handleClickModal,
        producto,
        handleSetProducto,
        pedido,
        handleAgregarPedido
      }}
    >
      {children}
    </QuiscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuiscoContext;
