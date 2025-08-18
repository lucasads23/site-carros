import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import Catalogo from './Catalogo.jsx'
import Contato from './Contato.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Style.css'

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
