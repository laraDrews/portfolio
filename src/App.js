// Importa o módulo React do pacote react
import React from 'react';
import {Home} from './pages/home';
import {Sobre} from './pages/sobre';
import {Humanas} from './pages/humanas';
import {Linguagens} from './pages/linguagens';
import {Natureza} from './pages/natureza';
import {Matematica} from './pages/matematica';

function App() {
  // Retorna a estrutura de roteamento usando o BrowserRouter
  return (
    <div>
   <Home/>
   <Humanas/>
   <Linguagens/>
   <Matematica/>
   <Natureza/>
   <Sobre/>
   </div>
  );
}
// Exporta o componente App como padrão
export default App;
