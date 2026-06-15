import { HeroSection } from '../components/HeroSection/HeroSection';
import { AboutSection } from '../components/AboutSection/AboutSection';
import { AimSection } from '../components/AimSection/AimSection';
import { FacultySection } from '../components/FacultySection/FacultySection';
import { CommunitySection } from '../components/CommunitySection/CommunitySection';

export function HomePage() {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <AimSection />
            {/* <EventsSection /> */}
            <FacultySection />
            <CommunitySection />
        </main>
    );
}