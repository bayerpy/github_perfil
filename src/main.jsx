import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import './global.css';

//Dessa forma importamos a variavel PI para o arquivo main
//Conseguimos importar uma variavel e trocar o nome dela através do 'as' veja como feito no PI
// import {PI as numeroPi, GTM_BRASIL } from './teste.js'
//Assim consguimos importar no array de nomes
// import nomes from './nomes.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Assim conseguimos chamar a variavel atraves do nome que escolhemos para ela */}
    {/* {numeroPi} */}
    <App />
  </StrictMode>,
)
