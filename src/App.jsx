import { useState } from 'react'

import './App.css'

import Agendamento from './pages/agendamento/Agendamento.jsx'

import Contato from './pages/contato/Contato.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    {/* header vem aqui */}
    {/* ligar ao header component */}
    <Router>

      <Routes>

        <Route path='/contato' element={<Contato />}/>
        <Route path='agendamento' element={<Agendamento />} />
      </Routes>

    </Router>

    {/* resto da página */}

  </div>
  )
}

export default App
