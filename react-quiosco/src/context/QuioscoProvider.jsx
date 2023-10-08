import { createContext } from 'react';

const QuiscoContext = createContext();

export default function QuioscoProvider({ children }) {
  const hola = 'Hola mundo';
  return (
    <QuiscoContext.Provider value={{ hola }}>{children}</QuiscoContext.Provider>
  );
}
