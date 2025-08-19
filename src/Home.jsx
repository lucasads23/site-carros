import CardProps from './assets/components/CardProps.jsx'

import './Style.css'

import { Link } from "react-router-dom"


function Home() {
  return (
      <main>
          <article>
              <div id="fundo">
                  <img src="imagens/carros.jpg" alt="carros" />
                          <h1>Wypożyczalnia marzeń</h1>
                          <p>Spełnimy Twoje!</p>
                      </div>
                      <div className= "container p-5">
                          <h1 id="tituloConteudo">Carros em Destaque!</h1>
                          <p id="descricaoConteudo">Clique em "saiba mais" e conheça todos os modelos.</p>
                          <div className="row">
                            <div className="col-6 col-md-6 col-sm-12"><CardProps titulo="Porsche 911 Carrera 4s" imagem="imagens/modelo1.svg" modeloCar="Coupe" modeloMotor="3.0l Twin Turbo" cor="Szary" km="450 koni" valor="Valor: R$ 250.000" /></div>
                            <div className="col-6 col-md-6 col-sm-12"><CardProps titulo="Porsche 718 Cayman" imagem="imagens/modelo2.svg" modeloCar="Coupe" modeloMotor="2.0l Turbo" cor="Żółty" km="300 koni" valor="Valor: R$ 300.000" /></div>
                            <div className="col-6 col-md-6 col-sm-12"><CardProps titulo="Mercedes A45 AMG" imagem="imagens/modelo3.svg" modeloCar="Hothatch" modeloMotor="2.0l Turbo" cor="Żółty" km="421 koni" valor="Valor: R$ 310.000" /></div>
                            <div className="col-6 col-md-6 col-sm-12"><CardProps titulo="BMW M5 Competition" imagem="imagens/modelo4.svg" modeloCar="Coupe" modeloMotor="3.0l Twin Turbo" cor="Szary" km="450 koni" valor="Valor: R$ 280.000" /></div>
                            <div className="col-6 col-md-6 col-sm-12"><CardProps titulo="BMW M4" imagem="imagens/modelo5.svg" modeloCar="Coupe" modeloMotor="3.0l Twin Turbo" cor="Szary" km="450 koni" valor="Valor: R$ 290.000" /></div>
                            <div className="col-6 col-md-6 col-sm-12"><CardProps titulo="Nissan GT-R" imagem="imagens/modelo6.svg" modeloCar="Coupe" modeloMotor="3.0l Twin Turbo" cor="Szary" km="450 koni" valor="Valor: R$ 290.000" /></div>
                          </div>
                      <Link to="/catalogo"><button className ="btn-personalizado"> Saiba mais </button></Link>
                      </div>
                      <div className="container p-5">
                          <h2>Wypożyczalnia samochodów luksusowych</h2>
                          <h3>Poznaj naszą flotę!</h3>
                          <p>
                            Wypożyczalnia samochodów sportowych i luksusowych SexyCars skupia się na jednym celu, a mianowicie na Twojej pełnej satysfakcji z wynajmu auta sportowego u nas. Zagwarantujemy Ci maksimum radości i komfortu użytkowania aut sportowych w naszej wypożyczalni. Staramy się także, aby ta przyjemność nie była zbyt kosztowna. 
                            Wynajmujemy swoje samochody sportowe w całej Polsce, a najczęściej w miastach: Kraków, Katowice, Wrocław, Warszawa bez pobierania kaucji i w dobrej cenie. Wypożyczamy nasze auta sportowe i luksusowe na dobę lub na dłuższy okres czyli długoterminowo. Wybierając wynajem w miastach Kraków, Warszawa, Katowice, Wrocław, Rzeszów, Częstochowa, Kielce, Częstochowa, Bydgoszcz, Białystok możesz spodziewać się od nas profesjonalnej obsługi. 
                          </p>
                          <img className="mapa" src="imagens/mapa.jpg" alt="mapa" />
                          <p>
                            Samochody sportowe to kategoria samochodów, w których większy nacisk kładziony jest na dynamikę jazdy niż na praktyczność. Jednocześnie są to samochody cywilne, które muszą spełniać wszystkie przepisy techniczne dotyczące ruchu na drogach publicznych.
                          </p>
                          <p>Mogą to być:</p>
                          <p>Auta zmodyfikowane z klasycznych nadwozi na nadwozia sportowe (np. w wyniku tuningu) </p>
                          <img className ="carros" src="imagens/carro1.jpg" alt="carro1" />
                          <p>2019 Toyota Corolla Hatchback (tuningowana)</p>
                          <p>Typowo sportowe auta produkowane do jazdy dającej frajdę</p>
                          <img className ="carros" src="imagens/carro2.jpg" alt="carro2" />
                          <p>2018 Lamborghini Huracan LP580</p>
                          <p>Auta ekstremalne, przeznaczone do jazdy wyczynowej, wyścigowej</p>
                          <img className ="carros" src="imagens/carro3.jpg" alt="carro3" />
                          <p>2016 Aston Martin Vulcan</p>
                          <p>Zatem zanim wybierzesz auta sportowe do wypożyczenia czy kupienia, dowiedz się, który z nich warto najbardziej wybrać. My natomiast zapewnimy odpowiednie przygotowanie i profesjonalną obsługę:</p>
                          <div className="row" id="checklist">
                            <ul>
                              <li className="col-6"><img src="imagens/check.png" alt="check" />Przygotowanie samochodu do jazdy</li>
                              <li className="col-6"><img src="imagens/check.png" alt="check" />Pełne ubezpieczenie</li>
                              <li className="col-6"><img src="imagens/check.png" alt="check" />Brak limitu kilometrów</li>
                              <li className="col-6"><img src="imagens/check.png" alt="check" />Podstawienie pod wskazany adres</li>
                              <li className="col-6"><img src="imagens/check.png" alt="check" />Możliwość wynajmu bez kaucji</li>
                              <li className="col-6"><img src="imagens/check.png" alt="check" />Możliwość wynajmu z kierowcą</li>
                              <li className="col-6"><img src="imagens/check.png" alt="check" />Możliwość wynajmu z kierowcą</li>
                              <li className="col-6"><img src="imagens/check.png" alt="check" />Możliwość wynajmu z kierowcą</li>
                            </ul>
                          </div>

                          <Link to="/contato"><button className="btn-personalizado"> Clique aqui! </button></Link>

                      </div>
          </article>
      </main>
  );
}
export default Home;