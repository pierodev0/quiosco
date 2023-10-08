import { createContext } from 'react';

const QuiscoContext = createContext();

const  QuioscoProvider = ({ children }) =>{
  const hola = 'Hola mundo';
  return (
    <QuiscoContext.Provider value={{ hola }}>{children}</QuiscoContext.Provider>
  );
}

export {
    QuioscoProvider
}

export default QuiscoContext