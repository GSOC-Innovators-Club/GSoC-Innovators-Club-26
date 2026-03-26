import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TeamPage } from './pages/TeamPage';
import { EventsPage } from './pages/EventsPage';
import { OpenSourcePage } from './pages/OpenSourcePage';
import { ScrollToTop } from './components/ScrollToTop';
import { ModalProvider } from './context/ModalContext';
import './App.css';

function App() {
  return (
 dev
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/open-source" element={<OpenSourcePage />} />
      </Routes>
    </BrowserRouter>

    <ModalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </BrowserRouter>
    </ModalProvider>
 dev
  );
}

export default App;

