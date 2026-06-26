import React, { useRef, useState } from 'react';
import './EventsPage.css';

interface EventData {
    name?: string;
    date?: string;
    venue?: string;
    time?: string;
    description?: string;
    highlights?: string[];
    posterUrl?: string;
    socialLink?: string;
    registerLink?: string;
}

const events: EventData[] = [
    {
        name: "Summer of CodeFest '26",
        date: 'June 16, 2026',
        venue: 'Online',
        time: '12:00 AM onwards',
        description: 'Summer of CodeFest \'26 is our biggest hackathon yet — and the response has been overwhelming! With 1000+ registrations and counting, developers and innovators from across the country are gearing up to compete, collaborate, and create. Whether you are a first-time hacker or a seasoned builder, this is your stage to solve real-world problems, showcase your skills, and win exciting prizes. Spots are limited — secure yours before it\'s too late!',
        posterUrl: '/Components/SOCF_2026.avif',
        socialLink: 'https://hackindia.org/2026/summer-of-codesfest-20',
        registerLink: 'https://hackindia.org/2026/summer-of-codesfest-20',
    },
    {
        name: "Cinemaghar",
        date: 'February 28, 2026',
        venue: 'AB-2 Auditorium-2',
        time: '11:00 AM - 02:00 PM',
        description: ' Your Wait is Over! We are LIVE with your voted movie Chhichhore. Ab delay kyu? Register karo & apni seat confirm karo!',
        posterUrl: '/Components/Cinemaghar.jpeg',
        socialLink: 'https://www.linkedin.com/posts/gsoc-innovators_opensource-techcommunity-gsocinnovatorsclub-activity-7436354197416984576-43Z_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEYLyy0BAfljEsrWtQM_6WXPdyr3qIRneoQ',
    },
    {
        name: "Summer of CodeFest '25",
        date: 'April 13-14, 2025',
        venue: 'AB-2 Auditorium',
        time: '09:00 AM onwards',
        description: 'This event will have a Seminar and an innovative Hackathon. Learn how to prepare for GSOC and increase your chances of selection. Also compete in a hackathon with peers in building innovative projects.',
        posterUrl: '/Components/Summer of CodeFest \'25.png',
        socialLink: 'https://www.linkedin.com/posts/gsoc-innovators_summerofcodefest25-hackathon-coding-activity-7327258229762117632-WQJ1?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEYLyy0BAfljEsrWtQM_6WXPdyr3qIRneoQ',
    },
];

const EventSpotlightCard = ({ event }: { event: EventData }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <article
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={() => { setIsFocused(true); setOpacity(1); }}
            onBlur={() => { setIsFocused(false); setOpacity(0); }}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className="event-spotlight-card"
            data-reveal
        >
            {/* Outer border spotlight glow */}
            <div
                className="event-spotlight-border"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(159, 83, 255, 0.6), transparent 40%)`,
                }}
            />
            {/* Inner background spotlight glow */}
            <div
                className="event-spotlight-glow"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(159, 83, 255, 0.15), transparent 40%)`,
                }}
            />

            <div className="event-card-inner">
                <div className="event-content">
                    {/* Timeline Accent Element */}
                    <div className="event-element">
                        <div className="event-element-dot">
                            <div className="event-element-inner-dot" />
                        </div>
                        <div className="event-element-line" />
                    </div>

                    {/* Event Details */}
                    <div className="event-texts">
                        <div className="event-header">
                            <h3 className="event-name">{event.name}</h3>
                            <div className="event-meta-grid">
                                <p className="event-meta">
                                    <img src="/Icons/Calender.svg" alt="" className="meta-icon"/> 
                                    {event.date}
                                </p>
                                <p className="event-meta">
                                    <img src="/Icons/Home Icon.svg" alt="" className="meta-icon"/> 
                                    {event.venue}
                                </p>
                                <p className="event-meta">
                                    <img src="/Icons/Event-TickMark.svg" alt="" className="meta-icon"/> 
                                    {event.time}
                                </p>
                            </div>
                        </div>
                        
                        {event.description && (
                            <p className="event-description">{event.description}</p>
                        )}

                        <div className="event-social-links">
                            <a href={event.registerLink ?? event.socialLink} target="_blank" rel="noopener noreferrer" className={`event-link-button${event.registerLink ? ' event-register-button' : ''}`}>
                                {event.registerLink ? 'Register Now' : 'See More'}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Event Poster */}
                <div className="event-poster-wrapper">
                    {event.posterUrl ? (
                        <img
                            src={event.posterUrl}
                            alt={`${event.name} Poster`}
                            className="event-poster-image"
                            loading="lazy"
                            decoding="async"
                        />
                    ) : (
                        <div className="poster-placeholder">Event Poster</div>
                    )}
                </div>
            </div>
        </article>
    );
};

export function EventsPage() {
    return (
        <main className="events-page">
            {/* Background gradient overlay */}
            <div className="events-bg-gradient">
                <img src="/Components/Gradient.svg" alt="" aria-hidden="true" />
            </div>

            <div className="events-page-container">
                {/* Page Title */}
                <div className="events-page-header" data-reveal>
                    <h1 className="events-page-title">
                        Our <span className="highlight">Events</span>
                    </h1>
                    <p className="events-page-subtitle">
                        Explore our past and upcoming events. Join us for workshops, hackathons, and more!
                    </p>
                </div>

                {/* Events List */}
                <div className="events-list">
                    {events.map((event, index) => (
                        <EventSpotlightCard key={index} event={event} />
                    ))}

                    {/* Upcoming Event Placeholder Styled as a Pill */}
                    {/* <div className="upcoming-event-pill" data-reveal>
                        <div className="upcoming-glow"></div>
                        <span className="upcoming-text">Something Big is Loading.....</span>
                    </div> */}
                </div>
            </div>
        </main>
    );
}