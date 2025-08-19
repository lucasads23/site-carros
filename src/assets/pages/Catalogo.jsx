import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Style.css'

import CardProps from '../components/CardProps.jsx'


export default function Catalogo() {
  return (
    <div className= "container p-5">
        <h1 id="tituloConteudo">Catálogo de Carros</h1>
            <p id="descricaoConteudo">Conheça nossa frota!</p>
                <div className="row">
                    <div className="col-6 col-md-6 col-sm-12"><CardProps titulo="Porsche 911 Carrera 4s" imagem="imagens/modelo1.svg" modeloCar="Coupe" modeloMotor="3.0l Twin Turbo" cor="Szary" km="450 koni" valor="Valor: R$ 250.000" /></div>
                    <div className="col-6 col-md-6 col-sm-12"><CardProps titulo="Porsche 718 Cayman" imagem="imagens/modelo2.svg" modeloCar="Coupe" modeloMotor="2.0l Turbo" cor="Żółty" km="300 koni" valor="Valor: R$ 300.000" /></div>
                    <div className="col-6 col-md-6 col-sm-12"><CardProps titulo="Mercedes A45 AMG" imagem="imagens/modelo3.svg" modeloCar="Hothatch" modeloMotor="2.0l Turbo" cor="Żółty" km="421 koni" valor="Valor: R$ 310.000" /></div>
                    <div className="col-6 col-md-6 col-sm-12"><CardProps titulo="BMW M5 Competition" imagem="imagens/modelo4.svg" modeloCar="Coupe" modeloMotor="3.0l Twin Turbo" cor="Szary" km="450 koni" valor="Valor: R$ 280.000" /></div>
                    <div className="col-6 col-md-6 col-sm-12"><CardProps titulo="BMW M4" imagem="imagens/modelo5.svg" modeloCar="Coupe" modeloMotor="3.0l Twin Turbo" cor="Szary" km="450 koni" valor="Valor: R$ 290.000" /></div>
                    <div className="col-6 col-md-6 col-sm-12"><CardProps titulo="Nissan GT-R" imagem="imagens/modelo6.svg" modeloCar="Coupe" modeloMotor="3.0l Twin Turbo" cor="Szary" km="450 koni" valor="Valor: R$ 290.000" /></div>
                    <div className="col-6 col-md-6 col-sm-12"><CardProps titulo="Audi R8 V10 Plus" imagem="imagens/modelo7.svg" modeloCar="Coupe" modeloMotor="3.0l Twin Turbo" cor="Szary" km="450 koni" valor="Valor: R$ 290.000" /></div>
                    <div className="col-6 col-md-6 col-sm-12"><CardProps titulo="Lamborghini Gallardo" imagem="imagens/modelo8.svg" modeloCar="Coupe" modeloMotor="3.0l Twin Turbo" cor="Szary" km="450 koni" valor="Valor: R$ 290.000" /></div>
                    <div className="col-6 col-md-6 col-sm-12"><CardProps titulo="Lamborghini Huracan" imagem="imagens/modelo9.svg" modeloCar="Coupe" modeloMotor="3.0l Twin Turbo" cor="Szary" km="450 koni" valor="Valor: R$ 290.000" /></div>
                    <div className="col-6 col-md-6 col-sm-12"><CardProps titulo="Lamborghini Aventador" imagem="imagens/modelo10.svg" modeloCar="Coupe" modeloMotor="3.0l Twin Turbo" cor="Szary" km="450 koni" valor="Valor: R$ 290.000" /></div>
                </div>
      </div>
  )
}
