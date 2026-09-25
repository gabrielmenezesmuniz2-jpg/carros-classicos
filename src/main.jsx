import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./components/App"
import caixa from "./components/caixa"
import Rodape from "./components/Rodape"
import cabecalho from './components/cabecalho'
import conteudo from "./components/conteudo"
import Card from './components/card'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
   <Rodape />
   <Card />
   
  </StrictMode>,
)
