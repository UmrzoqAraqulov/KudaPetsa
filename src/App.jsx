import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import KorzinaPage from "./pages/KorzinaPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="korzina" element={<KorzinaPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
