import { HeroSection } from '../components/HeroSection/HeroSection';
import { AboutSection } from '../components/AboutSection/AboutSection';
import { EventsSection } from '../components/EventsSection/EventsSection';

export function HomePage() {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <EventsSection />
        </main>
    );
}
