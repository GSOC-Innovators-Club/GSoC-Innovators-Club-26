import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TeamPage } from './pages/TeamPage';
import { EventsPage } from './pages/EventsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import OpenSourcePage from './pages/openSourcePage';
import { ScrollToTop } from './components/ScrollToTop';
import { ModalProvider } from './context/ModalContext';
import './App.css';

function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/opensource" element={<OpenSourcePage />} />
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;

