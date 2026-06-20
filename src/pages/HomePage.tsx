import { HeroSection } from '../components/HeroSection/HeroSection';
import { EventsSection } from '../components/EventsSection/EventsSection';

export function HomePage() {
    return (
        <main>
            <HeroSection />
            <EventsSection />
        </main>
    );
}