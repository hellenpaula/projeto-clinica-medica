import { useState } from 'react'

import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



import Agendamento from './pages/agendamento/Agendamento.jsx'

import Contato from './pages/contato/Contato.jsx'



// components:
import Header from './components/Header/Header.jsx'

import SectionHome from './components/principal/SectionHome/SectionHome.jsx'

import SectionSobre from './components/principal/SectionSobre/SectionSobre.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    {/* header vem aqui */}
    
    {/* ligar ao header component */}
    <Router>
      <Header />
      <SectionHome />
      <SectionSobre />
      <Routes>

        <Route path='/contato' element={<Contato />}/>
        <Route path='agendamento' element={<Agendamento />} />
      </Routes>

    </Router>

    {/* resto da página */}

  </div>
  )
}

export default App;
