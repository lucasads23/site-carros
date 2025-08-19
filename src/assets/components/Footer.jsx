function Footer() {
  return (
    <footer className= "center">
            <div id="barra-footer">
                <div>
                    <img src="imagens/flame-svg.svg" alt="fogo" />
                </div>
                <div className="direitos-autorais">
                  <p className="texto-negrito">@2020 Sexy Cars </p><p>All Rights Reserved. </p>
                </div>
                <div id= "lista-footer">
                  <ul>
                    <li><img src="imagens/Phone.png" alt="check" /> Telefone: (21) 9 9345-2234</li>
                    <li><img src="imagens/Pin.png" alt="check" /> Lokalizacja: ul. Marii i Bolesława Wysłouchów 49/6, 30-611 Kraków</li>
                    <li><img src="imagens/Mail.png" alt="check" /> Email: biuro@sexycars.pl</li>
                  </ul>
                </div>
                <p className ="TextoFooterVermelho">Auta sportowe na wynajem: Ferrari, Lamborghini, Bmw, Nissan, Ford, Audi, Porsche | Wypożyczalnia samochodów sportowych Kraków, Katowice, Warszawa, Wrocław, Rzeszów, Kielce, Częstochowa</p>
            </div>
            
    </footer>
  )
}
export default Footer;