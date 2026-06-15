import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { RevealOnScroll } from './components/RevealOnScroll';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { PageLoader } from './components/PageLoader/PageLoader';
import { ModalProvider } from './context/ModalContext';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })));
const TeamPage = lazy(() => import('./pages/TeamPage').then((module) => ({ default: module.TeamPage })));
const EventsPage = lazy(() => import('./pages/EventsPage').then((module) => ({ default: module.EventsPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then((module) => ({ default: module.ProjectsPage })));
const OpenSourcePage = lazy(() => import('./pages/openSourcePage'));

function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <ScrollToTop />
          <RevealOnScroll />
          <Header />
          <div className="route-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/opensource" element={<OpenSourcePage />} />
              </Routes>
            </div>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;

