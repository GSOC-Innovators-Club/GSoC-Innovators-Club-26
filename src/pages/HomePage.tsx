import { Header } from '../components/Header/Header';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { AboutSection } from '../components/AboutSection/AboutSection';
import { EventsSection } from '../components/EventsSection/EventsSection';
import { Footer } from '../components/Footer/Footer';

export function HomePage() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <EventsSection />
            </main>
            <Footer />
        </>
    );
}
