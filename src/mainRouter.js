// No componente onde você configura as rotas (normalmente em App.js ou index.js)
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Detalhes from "./detalhes";

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
      </Routes>
    </Router>
  );
}

export default MainRouter;