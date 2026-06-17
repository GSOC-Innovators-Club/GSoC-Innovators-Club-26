import React, { useRef, useState } from 'react';
import { AimSection } from '../components/AimSection/AimSection';
import { FacultySection } from '../components/FacultySection/FacultySection';
import { CommunitySection } from '../components/CommunitySection/CommunitySection';
import './AboutPage.css';

interface InfoCardData {
    icon: string;
    stat: string;
    description: string;
}

const infoCards: InfoCardData[] = [
    {
        icon: '/Icons/GroupIcon.svg',
        stat: '50+ Members',
        description: 'A group of highly motivated individuals, determined to make lasting change.'
    },
    {
        icon: '/Icons/Projects.svg',
        stat: '1+ Projects',
        description: 'Complex and Challenging Open Source Projects.'
    },
    {
        icon: '/Icons/Calender.svg',
        stat: '1+ Events',
        description: 'Events specifically designed around Open Source.'
    }
];

// Interactive Spotlight Card Component
const SpotlightCard = ({ card }: { card: InfoCardData }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="spotlight-card"
        >
            {/* Outer border spotlight glow */}
            <div
                className="spotlight-card-border"
                style={{
                    opacity,
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(159, 83, 255, 0.6), transparent 40%)`,
                }}
            />
            {/* Inner background spotlight glow */}
            <div
                className="spotlight-card-glow"
                style={{
                    opacity,
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(159, 83, 255, 0.15), transparent 40%)`,
                }}
            />

            <div className="spotlight-card-content">
                <div className="spotlight-card-icon-wrapper">
                    <img src={card.icon} alt={card.stat} />
                </div>
                <div className="spotlight-card-text">
                    <span className="spotlight-card-stat">{card.stat}</span>
                    <p className="spotlight-card-description">{card.description}</p>
                </div>
            </div>
        </div>
    );
};

export function AboutPage() {
    return (
        <main className="about-page">
            {/* Background gradient overlay */}
            <div className="about-bg-gradient">
                <img src="/Components/Gradient.svg" alt="" aria-hidden="true" />
            </div>

            <div className="about-page-container">
                {/* Page Title */}
                <div className="about-page-header" data-reveal>
                    <h1 className="about-page-title">
                        About <span className="highlight">Us</span>
                    </h1>
                    <p className="about-page-subtitle">
                        Make your data invisible by generating unlimited identities.
                        The next-level in privacy protection for online and travel.
                    </p>
                </div>

                {/* Info Cards Grid */}
                <div className="about-cards-grid">
                    {infoCards.map((card, index) => (
                        <SpotlightCard key={index} card={card} />
                    ))}
                </div>

                {/* Expanded Story/Vision Section */}
                <div className="about-story-section" data-reveal>
                    <h2 className="about-story-title">Our <span className="highlight">Vision</span></h2>
                    <p className="about-story-text">
                        The GSoC Innovators Club is dedicated to fostering a culture of open-source contribution and technical excellence. We bridge the gap between academic learning and real-world software development by preparing students for prestigious programs like Google Summer of Code (GSoC) and other major open-source initiatives. Every line of code matters here.
                    </p>
                </div>
            </div>

            {/* Everything else we built */}
            <AimSection />
            <FacultySection />
            <CommunitySection />
        </main>
    );
}