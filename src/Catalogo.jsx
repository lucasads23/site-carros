import Header from 'assets/components/Header.jsx'
import Footer from 'assets/components/Footer.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Style.css'


export default function Catalogo() {
  return (
    <div>
      <Header />
      <h1>Catálogo de Carros</h1>
      {/* Aqui você pode adicionar a lógica para exibir os carros disponíveis */}
      <Footer />
    </div>
  )
}
