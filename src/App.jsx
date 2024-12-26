import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResponsiveAppBar from './Menu'; 
import ItemListContainer from './ItemListContainer';

function App() {


  return (
    <>
    <ResponsiveAppBar />
     <ItemListContainer saudacao={"Bem vindo a loja!"} />
    </>
  )
}

export default App
