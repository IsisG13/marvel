import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [marvel, setMarvel] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/marvel")
      .then((response) => {
        console.log("Resposta do Servidor:", response.data);
        setMarvel(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar o personagem", error);
      });
  }, []);

  const navigateToDetails = (id) => {
    navigate(`/detalhes/${id}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <a href="/"><h1>Marvel</h1></a>
        {/* <h1>Marvel</h1> */}
        {marvel.map((marvels) => (
          <div key={marvels.id} onClick={() => navigateToDetails(marvels.id)}>
            <div className="card">
              <img src={marvels.imagem} alt={marvels.nome} />
              <div className="conteudo">
                <p>{marvels.nome}</p>
                <p>{marvels.sobre}</p>
                <h5>Filme: </h5>
                <a href={marvels.urlFilme}>{marvels.filme}</a>
                <p>{marvels.lançamentoF}</p>
                <h5>Serie: </h5>
                <a href={marvels.urlSerie}>{marvels.serie}</a>
                <p>
                  {marvels.temporada} - {marvels.lancamentoS}
                </p>
              </div>
            </div>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
