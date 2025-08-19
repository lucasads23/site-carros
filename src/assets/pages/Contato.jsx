import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Style.css'

export default function Contato() {
  return (
    <div className= "container p-5">
        <h1 id="tituloConteudo">Entre em contato</h1>
            <p id="descricaoConteudo">Conheça nossa frota!</p>

          <div id="contatos" className="row">

              <div className="col-md-4">
                <h1>Endereço:</h1>
                <p>Avenida das Nações Unidas, 12901 - São Paulo, SP</p>

                <h2>Telefone:</h2>
                <p>(11) 1234-5678</p>

              </div>
              <div className="col-md-4">
                <h1>Horário de Funcionamento:</h1>
                <p>Das 09:00 às 18:00</p>

                <h2>E-mail:</h2>
                <p>contato@wypozyczalnia.pl</p>
              </div>
              <div className="col-md-4">
                  <img id="mapamenor" src="imagens/mapamenor.png" alt="mapa" />
              </div>

          </div>
    </div>
  )
}
