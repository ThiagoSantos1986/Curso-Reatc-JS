import "./apresentacao.css";

function Apresentacao() {
  return (
    <section id="home" className="main">
      <div className="text-apresentacao">
        <h1>Servindo Massas à mais de 70 anos</h1>
        <p>qualidade passada por gerações</p>
      </div>
     
        <img
          id="img-apresentacao"
          src="/pizzaria2.png"
          alt="imagem da fachada de uma pizzaraia"
        />
     
    </section>
    
  );
}

export default Apresentacao;
