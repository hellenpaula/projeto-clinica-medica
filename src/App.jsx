import { useState } from 'react'

import './App.css'

// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Agendamento from './pages/agendamento/Agendamento.jsx'

import Contato from './pages/contato/Contato.jsx'



// components:
import Header from './components/Header/Header.jsx'


import SectionHome from './components/principal/SectionHome/SectionHome.jsx'

import SectionSobre from './components/principal/SectionSobre/SectionSobre.jsx'

import SectionEspecialidades from './components/principal/SectionEspecialidades/SectionEspecialidades.jsx'

import SectionConquistas from './components/principal/SectionConquistas/SectionConquistas.jsx'

import SectionExames from './components/principal/SectionExames/SectionExames.jsx'

import Footer from './components/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='ContainerMain'>
    {/* header vem aqui */}
    
    {/* ligar ao header component */}
    <Router>
      <Header />
      
      <Routes>

        <Route path='/' element={
          <>
            <SectionHome />
            <SectionSobre />
            <SectionEspecialidades />
            <SectionConquistas />
            <SectionExames />
          </>
        }
        />
          

        <Route path='/contato' element={<Contato />}/>
        {/* <Route path='agendamento' element={<Agendamento />} /> */}
      </Routes>
      <Footer />
    </Router>

    {/* resto da página */}

  </div>
  )
}

export default App;
