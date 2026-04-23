import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './pages/LandingPage';
import PrimeiroGrau from './pages/PrimeiroGrau';
import SegundoGrau from './pages/SegundoGrau';
import Mestre from './pages/Mestre';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/acesso/a7f3k9m2" element={<PrimeiroGrau />} />
          <Route path="/acesso/x4p8q1n6" element={<SegundoGrau />} />
          <Route path="/acesso/z2w7r5j0" element={<Mestre />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
