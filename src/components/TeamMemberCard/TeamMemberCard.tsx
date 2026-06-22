import React, { useRef, useState } from 'react';
import './TeamMemberCard.css';

interface SocialLink {
    platform: 'github' | 'linkedin' | 'instagram' | 'x';
    url: string;
}

interface TeamMemberCardProps {
    name: string;
    role: string;
    image?: string;
    socials?: SocialLink[];
}

const socialIcons: Record<string, string> = {
    github: '/Icons/Github.svg',
    linkedin: '/Icons/LinkedIn_Logo.svg',
    instagram: '/Icons/Instagram_Logo.svg',
    x: '/Icons/X_Logo.svg'
};

export function TeamMemberCard({ name, role, image = '/Icons/UserPIC.svg', socials = [] }: TeamMemberCardProps) {
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
            className="team-spotlight-card"
        >
            {/* Outer border spotlight glow */}
            <div
                className="team-spotlight-card-border"
                style={{
                    opacity,
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(159, 83, 255, 0.6), transparent 40%)`,
                }}
            />
            {/* Inner background spotlight glow */}
            <div
                className="team-spotlight-card-glow"
                style={{
                    opacity,
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(159, 83, 255, 0.15), transparent 40%)`,
                }}
            />

            <div className="team-spotlight-card-content">
                <div className="team-card-image">
                    <img src={image} alt={name} />
                </div>
                <div className="team-card-info">
                    <h3 className="team-card-name">{name}</h3>
                    <p className="team-card-role">{role}</p>
                </div>
                {socials.length > 0 && (
                    <div className="team-card-socials">
                        {socials.map((social) => (
                            <a
                                key={social.platform}
                                href={social.url}
                                className="team-card-social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.platform}
                            >
                                <img src={socialIcons[social.platform]} alt={social.platform} />
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}