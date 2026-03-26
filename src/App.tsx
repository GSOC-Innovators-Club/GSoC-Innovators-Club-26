import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TeamPage } from './pages/TeamPage';
import { EventsPage } from './pages/EventsPage';
import { OpenSourcePage } from './pages/OpenSourcePage';
import { ScrollToTop } from './components/ScrollToTop';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/open-source" element={<OpenSourcePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

