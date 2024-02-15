import { Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import VitrineRestaurantes from "./paginas/VitrineRestaurantes";
import AdministracaoResturantes from "./paginas/Administracao/Resturantes/AdministracaoRestaurantes";
import FormularioRestaurantes from "./paginas/Administracao/Resturantes/FormularioRestaurantes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route
        path="/admin/restaurantes"
        element={<AdministracaoResturantes />}
      />
      <Route
        path="/admin/restaurantes/novo"
        element={<FormularioRestaurantes />}
      />
      <Route
        path="/admin/restaurantes/:id"
        element={<FormularioRestaurantes />}
      />
    </Routes>
  );
}

export default App;
