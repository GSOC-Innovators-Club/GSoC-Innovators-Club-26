import { useNavigate } from 'react-router-dom';
import './EventsSection.css';

interface EventData {
    name: string;
    date: string;
    venue: string;
    highlights: string[];
}

const events: EventData[] = [
    {
        name: "Summer of CodeFest'25",
        date: 'DD/MM/YYYY',
        venue: 'AB-2 Auditorium',
        highlights: [
            'Secrets to Crack GSoC',
            'Win Tech Quiz for exciting prizes',
            'Qualify in Hackathon for Trophies, Certificates etc/'
        ]
    },
    
];

export function EventsSection() {
    const navigate = useNavigate();

    return (
        <section className="events-section" id="events">
            <div className="events-container">
                {/* Section Title */}
                <div className="events-title-container" data-reveal>
                    <h2 className="events-title">
                        Upcoming <span className="highlight">Events</span>
                    </h2>
                    <p className="events-subtitle">
                        Here are Our Upcoming Events, buckle up for challenges and rewards
                    </p>
                </div>

                {/* Single Event Display */}
                <div className="events-display">
                    {events.map((event, index) => (
                            <article key={index} className="event-card" data-reveal>
                                <div className="event-card-inner">
                                    {/* Event Content */}
                                    <div className="event-content">
                                        {/* Timeline Element */}
                                        <div className="event-element">
                                            <img src="/Icons/Event-DownMark.svg" alt="Event marker" className="event-element-dot" />
                                            <div className="event-element-line" />
                                            <div className="event-element-line-bg" />
                                        </div>

                                        {/* Event Texts */}
                                        <div className="event-texts">
                                            <div className="event-header">
                                                <h3 className="event-name">{event.name}</h3>
                                                <p className="event-meta">Date: {event.date}</p>
                                                <p className="event-meta">Venue: {event.venue}</p>
                                            </div>

                                            <div className="event-highlights">
                                                {event.highlights.map((highlight, hIndex) => (
                                                    <div key={hIndex} className="event-highlight">
                                                        <img src="/Icons/Event-TickMark.svg" alt="Check" className="highlight-icon" />
                                                        <p className="highlight-text">{highlight}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Event Poster */}
                                    <div className="event-poster">
                                        <span className="poster-placeholder">Event Poster</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                </div>

                <div className="events-view-more" data-reveal>
                    <button
                        className="btn btn-secondary"
                        onClick={() => navigate('/events', { viewTransition: true })}
                    >
                        View More
                    </button>
                </div>
            </div>
        </section>
    );
}
