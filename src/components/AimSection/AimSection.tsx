import React, { useRef, useState, useEffect } from 'react';
import './AimSection.css';

interface AimCardData {
    number: string;
    icon: string;
    heading: string;
    text: string;
    className: string;
}

const aimCards: AimCardData[] = [
    {
        number: '01',
        icon: '/Icons/GSOC-Icon.svg',
        heading: 'GSoC Preparation',
        text: 'Guide students through Google Summer of Code selection — from finding the right orgs to crafting winning proposals and contributing effectively to open-source.',
        className: 'bento-span-2'
    },
    {
        number: '02',
        icon: '/Components/GithubPurpleBG.svg',
        heading: 'Open Source Contribution',
        text: 'Foster a culture of open-source collaboration. Members actively contribute to real-world projects, build public portfolios, and grow through peer code reviews.',
        className: 'bento-span-1'
    },
    {
        number: '03',
        icon: '/Icons/Gpu_Icon.svg',
        heading: 'Technical Skill Building',
        text: 'Bridge the gap between academics and industry through hands-on workshops, collaborative projects, and mentorship from experienced developers.',
        className: 'bento-span-1'
    },
    {
        number: '04',
        icon: '/Components/EventsPurpleBG.svg',
        heading: 'Community & Events',
        text: 'Host hackathons, seminars, and coding challenges that push boundaries — creating a platform for students to compete, collaborate, and celebrate innovation.',
        className: 'bento-span-1'
    },
    {
        number: '05',
        icon: '/Components/GroupPurpleBG.svg',
        heading: 'Peer Mentorship',
        text: 'Build a thriving mentorship network where seniors guide juniors, knowledge flows freely, and every member grows — both technically and professionally.',
        className: 'bento-span-1'
    },
    {
        number: '06',
        icon: '/Icons/Github.svg',
        heading: 'Research & Innovation',
        text: 'Encourage exploration beyond coursework — from machine learning experiments to developer tooling — turning curiosity into impactful, open projects.',
        className: 'bento-span-2'
    }
];

const MagicBentoCard = ({ card, index }: { card: AimCardData; index: number }) => {
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
            className={`magic-bento-card ${card.className}`}
            style={{ animationDelay: `${index * 120}ms` }}
        >
            <div
                className="magic-bento-border-spotlight"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(159, 83, 255, 0.4), transparent 40%)`,
                }}
            />
            <div
                className="magic-bento-spotlight"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(159, 83, 255, 0.08), transparent 40%)`,
                }}
            />
            
            <div className="magic-bento-content">
                <div className="aim-card-header">
                    <div className="aim-card-icon-wrapper">
                        <img src={card.icon} alt={card.heading} />
                    </div>
                    <span className="aim-card-number">{card.number}</span>
                </div>
                <div className="aim-card-text-content">
                    <h3 className="aim-card-heading">{card.heading}</h3>
                    <p className="aim-card-text">{card.text}</p>
                </div>
            </div>
        </div>
    );
};

// --- New Component for Glare/Glass Hover Banner ---
const GlareMissionBanner = ({ isVisible }: { isVisible: boolean }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        
        // Coordinates relative to the top-left of the card
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate rotation limits (e.g., max 10 degrees tilt)
        const rotateX = ((y / rect.height) - 0.5) * -10; 
        const rotateY = ((x / rect.width) - 0.5) * 10;

        setRotation({ x: rotateX, y: rotateY });
        
        // Calculate glare position as a percentage
        setMousePos({ 
            x: (x / rect.width) * 100, 
            y: (y / rect.height) * 100 
        });
    };

    const handlePointerLeave = () => {
        setIsHovered(false);
        // Reset tilt gently
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            className={`aim-mission-banner-wrapper ${isVisible ? 'animate-in-banner' : ''}`}
        >
            <div
                ref={ref}
                onPointerMove={handlePointerMove}
                onPointerEnter={() => setIsHovered(true)}
                onPointerLeave={handlePointerLeave}
                className="aim-mission-banner"
                style={{
                    transform: isHovered 
                        ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.02)` 
                        : 'rotateX(0deg) rotateY(0deg) scale(1)',
                    transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
                }}
            >
                {/* Dynamic Mouse Glare Layer */}
                <div 
                    className="aim-mission-glare"
                    style={{
                        opacity: isHovered ? 1 : 0,
                        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.25) 0%, transparent 50%)`,
                        transition: isHovered ? 'none' : 'opacity 0.5s ease'
                    }}
                />

                {/* Content lifted slightly off background for 3D parallax */}
                <div className="aim-mission-content-3d">
                    <img src="/Icons/GSOC-Icon.svg" alt="Mission" className="aim-mission-icon" />
                    <div className="aim-mission-text">
                        <span className="aim-mission-label">Our Mission</span>
                        <p className="aim-mission-quote">
                            To create a generation of open-source contributors who don't just write code — they shape the future of software.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function AimSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); 
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="aim-section" id="aim">
            <div className="aim-container">
                {/* Title */}
                <div className="aim-title-container">
                    <h2 className="aim-title">
                        Our <span className="highlight">Aim</span>
                    </h2>
                    <p className="aim-subtitle">
                        We exist to bridge the gap between learning and contributing — empowering students to make a real impact in the global open-source ecosystem.
                    </p>
                </div>

                {/* Magic Bento Grid */}
                <div className={`magic-bento-grid ${isVisible ? 'animate-in' : ''}`}>
                    {aimCards.map((card, index) => (
                        <MagicBentoCard key={card.number} card={card} index={index} />
                    ))}
                </div>

                {/* New Interactive Glare Hover Banner */}
                <GlareMissionBanner isVisible={isVisible} />
            </div>
        </section>
    );
}