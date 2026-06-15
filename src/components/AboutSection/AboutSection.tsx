import React, { useRef, useState } from 'react';
import './AboutSection.css';

interface InfoCardData {
    icon: string;
    stat: string;
    description: string;
}

const infoCards: InfoCardData[] = [
    {
        icon: '/Components/GroupPurpleBG.svg',
        stat: '50+ Members',
        description: 'A group of highly motivated individuals, determined to make lasting change'
    },
    {
        icon: '/Components/GithubPurpleBG.svg',
        stat: '1+ Projects',
        description: 'Complex and Challenging Projects'
    },
    {
        icon: '/Components/EventsPurpleBG.svg',
        stat: '1+ Events',
        description: 'Events specifically designed around Open Source'
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

export function AboutSection() {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                {/* Section Title */}
                <div className="about-title-container">
                    <h2 className="about-title">
                        About <span className="highlight">Us</span>
                    </h2>
                    <p className="about-subtitle">
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
            </div>
        </section>
    );
}