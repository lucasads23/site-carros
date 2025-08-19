import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './assets/components/Header.jsx'
import Footer from './assets/components/Footer.jsx'
import Home from './assets/pages/Home.jsx'
import Catalogo from './assets/pages/Catalogo.jsx'
import Contato from './assets/pages/Contato.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/Style.css'

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
