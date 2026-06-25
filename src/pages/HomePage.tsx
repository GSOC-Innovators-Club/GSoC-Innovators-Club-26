import { HeroSection } from '../components/HeroSection/HeroSection';
import { SponsorsSection } from '../components/SponsorsSection/SponsorsSection';
import { EventsSection } from '../components/EventsSection/EventsSection';

export function HomePage() {
    return (
        <main>
            <HeroSection />
            <SponsorsSection />
            <EventsSection />
        </main>
    );
}