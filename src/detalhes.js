import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./App.css";

function Detalhes() {
  const [marvel, setMarvel] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://127.0.0.1:8000/api/marvel/${id}`)
        .then((response) => {
          console.log("Resposta do Servidor:", response.data);
          const data = Array.isArray(response.data)
            ? response.data
            : [response.data];
          setMarvel(data);
        })
        .catch((error) => {
          console.error("Erro ao buscar os detalhes do personagem", error);
          navigate("/");
        });
    } else {
      axios
        .get("http://127.0.0.1:8000/api/marvel")
        .then((response) => {
          console.log("Resposta do Servidor (Todos os dados):", response.data);
          setMarvel(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar os detalhes do personagem", error);
          navigate("/");
        });
    }
  }, [id, navigate]);

  if (!Array.isArray(marvel) || marvel.length === 0) {
    return <p>Nenhum detalhe encontrado</p>;
  }

  return (
    <div className="App-detalhes">
      <header className="detalhes">
        <a href="/">
          <h1>Marvel</h1>
        </a>
        {/* <h1>Marvel</h1> */}
        {marvel.map((marvels) => (
          <div key={marvels.id}>
            <img
              className="imagemDetalhes"
              src={marvels.imagemDetalhes}
              alt={marvels.nome}
            />
            <div className="conteudoDetalhes">
              <h5>{marvels.nomeAtor} 
              </h5>
                <a className="trailer" href={marvels.trailer} target="_blank">
                  <h3>assistir o trailer</h3>
                </a>
              <h4>
                {marvels.sobreDetalhes}
              </h4>
              <p className="sobreTrailer">{marvels.sobreTrailer}</p>
            </div>
          </div>
        ))}
      </header>
    </div>
  );
}

export default Detalhes;
