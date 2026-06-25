import React, { useRef, useState, useEffect } from 'react';
import { useModal } from '../../context/useModal';
import './CommunitySection.css';

interface PlatformData {
    name: string;
    cta: string;
    icon: string;
    url: string;
}

const platforms: PlatformData[] = [
    {
        name: 'WhatsApp Community',
        cta: 'Join our active community group',
        icon: '/Icons/Whatsapp_Logo.svg',
        url: 'https://chat.whatsapp.com/DQgyDQcimxoEfvKFRbZtQr'
    },
    {
        name: 'Instagram',
        cta: 'Follow for events & updates',
        icon: '/Icons/Instagram_Logo.svg',
        url: 'https://www.instagram.com/gsoc_innovators_club/'
    },
    {
        name: 'LinkedIn',
        cta: 'Connect & grow professionally',
        icon: '/Icons/LinkedIn_Logo.svg',
        url: 'https://www.linkedin.com/company/gsoc-innovators/'
    },
    {
        name: 'Discord',
        cta: 'Chat, collaborate & code together',
        icon: '/Icons/Discord_Logo.svg',
        url: 'https://discord.gg/dJAqk6xCZ'
    }
];

const communityStats = [
    { target: 50, suffix: '+', label: 'Active Members' },
    { target: 4, suffix: '', label: 'Platforms' },
    { target: 2, suffix: '+', label: 'Events Hosted' },
];

// --- Count Up Animation Component ---
const AnimatedStat = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let startTime: number;
                    const duration = 1500; // 1.5 seconds

                    const animate = (time: number) => {
                        if (!startTime) startTime = time;
                        const progress = Math.min((time - startTime) / duration, 1);
                        // easeOutQuart for smooth deceleration
                        const ease = 1 - Math.pow(1 - progress, 4);
                        
                        setCount(Math.floor(ease * target));

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };
                    requestAnimationFrame(animate);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={ref} className="community-banner-stat">
            <span className="community-banner-number">{count}{suffix}</span>
            <span className="community-banner-label">{label}</span>
        </div>
    );
};

// --- Interactive Glare Banner Component ---
const InteractiveBanner = ({ openFollowModal }: { openFollowModal: () => void }) => {
    const bannerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!bannerRef.current) return;
        const rect = bannerRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div 
            ref={bannerRef}
            className="community-banner"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Spotlight Glow that follows the cursor */}
            <div 
                className="community-banner-glare"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(159, 83, 255, 0.15), transparent 40%)`
                }}
            />

            {/* Banner Content */}
            <div className="community-banner-content">
                <div className="community-banner-stats-group">
                    {communityStats.map((stat, index) => (
                        <React.Fragment key={stat.label}>
                            <AnimatedStat target={stat.target} suffix={stat.suffix} label={stat.label} />
                            {index < communityStats.length - 1 && (
                                <div className="community-banner-divider" />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <div className="community-banner-cta">
                    <p className="community-banner-text">
                        Be part of the movement — every line of code you contribute matters.
                    </p>
                    <button className="banner-join-btn" onClick={openFollowModal}>
                        Join Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export function CommunitySection() {
    const { openFollowModal } = useModal();

    return (
        <section className="community-section" id="community">
            <div className="community-container">
                {/* Title */}
                <div className="community-title-container">
                    <h2 className="community-title">
                        Join the <span className="highlight">Community</span>
                    </h2>
                    <p className="community-subtitle">
                        Connect with fellow contributors across platforms. Stay in the loop, share knowledge, and grow together.
                    </p>
                </div>

                {/* Platform Cards */}
                <div className="community-platforms-grid">
                    {platforms.map((platform) => (
                        <a
                            key={platform.name}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="community-platform-card"
                        >
                            <div className="community-platform-icon-wrap">
                                <img src={platform.icon} alt={platform.name} className="community-platform-icon" />
                            </div>
                            <div className="community-platform-text">
                                <span className="community-platform-name">{platform.name}</span>
                                <span className="community-platform-cta">{platform.cta}</span>
                            </div>
                            {/* Arrow indicator */}
                            <svg className="community-platform-arrow" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    ))}
                </div>

                {/* Enhanced Interactive Banner */}
                <InteractiveBanner openFollowModal={openFollowModal} />
            </div>
        </section>
    );
}