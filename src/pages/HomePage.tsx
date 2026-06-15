import { Header } from '../components/Header/Header';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { AboutSection } from '../components/AboutSection/AboutSection';
import { AimSection } from '../components/AimSection/AimSection';
import { FacultySection } from '../components/FacultySection/FacultySection';
import { CommunitySection } from '../components/CommunitySection/CommunitySection';
import { Footer } from '../components/Footer/Footer';

export function HomePage() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <AimSection />
                {/* <EventsSection /> */}
                <FacultySection />
                <CommunitySection />
            </main>
            <Footer />
        </>
    );
}