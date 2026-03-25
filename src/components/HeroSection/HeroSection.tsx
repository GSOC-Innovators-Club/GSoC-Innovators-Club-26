import { useRef } from 'react';
import './HeroSection.css';
import { NebulaSphere } from './NebulaSphere';
import { FloatingCard } from './FloatingCard';
import { useScrollAnimation } from './useScrollAnimation';
import { useModal } from '../../context/ModalContext';

const floatingCards = [
    {
        title: 'Machine Learning',
        subtitle: 'Applications',
        icon: '/Icons/Gpu_Icon.svg',
        position: 'ml' as const
    },
    {
        title: 'Events',
        subtitle: 'Challenges',
        icon: '/Icons/Calender.svg',
        position: 'events' as const
    },
    {
        title: 'GitHub',
        subtitle: 'Open Source',
        icon: '/Icons/Github.svg',
        position: 'github' as const
    },
    {
        title: 'GSoC',
        subtitle: 'Contribute',
        icon: '/Icons/GSOC-Icon.svg',
        position: 'gsoc' as const
    }
];

export function HeroSection() {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollProgress } = useScrollAnimation(heroRef, 600);
    const { openFollowModal } = useModal();

    // Calculate text animation values based on scroll progress
    const textOpacity = Math.max(0, 1 - scrollProgress * 2); // Fade out in first half
    const textTranslateY = scrollProgress * -100; // Move up as we scroll
    const floatingCardsOpacity = Math.max(0, 1 - scrollProgress * 1.5); // Fade slightly slower

    return (
        <section ref={heroRef} className="hero-section">
            {/* Nebula Background */}
            <div className="nebula-container">
                <NebulaSphere scrollProgress={scrollProgress} />
            </div>

            {/* Overlay Gradients */}
            <div className="hero-overlay">
                <div className="fade-left" />
                <div className="fade-right" />
            </div>

            {/* Floating Cards */}
            <div
                className="floating-cards"
                style={{
                    opacity: floatingCardsOpacity,
                    transform: `translateY(${textTranslateY * 0.5}px)`,
                    transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
                }}
            >
                {floatingCards.map((card) => (
                    <FloatingCard
                        key={card.position}
                        title={card.title}
                        subtitle={card.subtitle}
                        icon={card.icon}
                        position={card.position}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div
                className="hero-content"
                style={{
                    opacity: textOpacity,
                    transform: `translateY(${textTranslateY}px)`,
                    transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
                }}
            >
                <div className="text-content">
                    {/* Pretitle Badge */}
                    <div className="pretitle">
                        <span className="pretitle-text">Contribute the Change</span>
                    </div>

                    {/* Inner Contents */}
                    <div className="inner-contents">
                        <div className="text-block">
                            <h1 className="hero-title">
                                <span className="highlight">Build the future with{'\n'}GSoC Innovator's Club</span>
                            </h1>
                            <p className="hero-subtitle">
                                Join our community of passionate developers contributing to open-source
                                and preparing for Google Summer of Code.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="buttons">
                            <button 
                                className="btn btn-primary"
                                onClick={openFollowModal}
                            >
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
