export default function Card1({titulo, imagem, modeloCar, modeloMotor, cor, km, valor }) {
  return (
    <div id="card">
      <h2>{titulo}</h2>
      <div className="conteudo-card"> 
        <img src={imagem} alt={titulo} />
        <ul>
            <li><img src="imagens/carlogo.png" alt="carlogo" />{modeloCar}</li>
            <li><img src="imagens/motor.png" alt="motor" />{modeloMotor}</li>
            <li><img src="imagens/cor.png" alt="cor" />{cor}</li>
            <li><img src="imagens/km.png" alt="km" />{km}</li>
        </ul>
      </div>
      <p>{valor}</p>
    </div>
  );
}