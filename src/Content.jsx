import { BrowserRouter, Routes, Route } from "react-router-dom";


function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}
