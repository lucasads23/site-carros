export default function Card({ titulo, imagemPrincipal, descricao, dados }) {
  return (
    <div id="card">
      <h2>{titulo}</h2>
      <div className="conteudo-card">
        <img src={imagemPrincipal} alt={titulo} />
        <ul>
          {dados.map((item, index) => (
            <li key={index}>
              <img src={item.icone} alt={item.label} /> {item.texto}
            </li>
          ))}
        </ul>
      </div>
      <p>{descricao}</p>
    </div>
  );
}