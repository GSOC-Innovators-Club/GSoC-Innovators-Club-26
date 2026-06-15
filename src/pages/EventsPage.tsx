import './EventsPage.css';
import '../components/EventsSection/EventsSection.css';

interface EventData {
    name?: string;
    date?: string;
    venue?: string;
    time?: string;
    description?: string;
    highlights?: string[];
    posterUrl?: string;
    socialLink?: string;
}

const events: EventData[] = [
    {
        name: "Summer of CodeFest '25",
        date: 'April 13-14, 2025',
        venue: 'AB-2 Auditorium',
        time: '09:00 AM onwards',
        description: 'This event will have a Seminar and an innovative Hackathon. Learn how to prepare for GSOC and increase your chances of selection. Also compete in a hackathon with peers in building innovative projects.',
        posterUrl: '/Components/Summer of CodeFest \'25.png',
        socialLink: 'https://www.linkedin.com/posts/gsoc-innovators_summerofcodefest25-hackathon-coding-activity-7327258229762117632-WQJ1?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEYLyy0BAfljEsrWtQM_6WXPdyr3qIRneoQ',
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
];

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
                            <span className="highlight">Our Events</span>
                        </h1>
                        <p className="events-page-subtitle">
                            Explore our past and upcoming events. Join us for workshops, hackathons, and more!
                        </p>
                    </div>

                    {/* Events List */}
                    <div className="events-list">
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
                                                <p className="event-meta">Time: {event.time}</p>
                                            </div>
                                            {event.description && (
                                                <p className="event-description">{event.description}</p>
                                            )}
                                            

                                            <div className="event-social-links">
                                                <a href={event.socialLink} target="_blank"  className="social-link">
                                                    <button className="Btn">See More
                                                        <svg className="svg" viewBox="0 0 512 512">
                                                        </svg>
                                                    </button>
                                                </a>
                                            </div>


                                            {/* <div className="event-highlights">
                                                <h4 className="agenda-title">Requirements</h4>
                                                {event.highlights?.map((highlight, hIndex) => (
                                                    <div key={hIndex} className="event-highlight">
                                                        <img src="/Icons/Event-TickMark.svg" alt="Check" className="highlight-icon" />
                                                        <p className="highlight-text">{highlight}</p>
                                                    </div>
                                                ))}
                                            </div> */}

                                        </div>
                                    </div>

                                    {/* Event Poster */}
                                    <div className="event-poster">
                                        {event.posterUrl ? (
                                            <img
                                                src={event.posterUrl}
                                                alt="Event Poster"
                                                className="poster-image"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        ) : (
                                            <span className="poster-placeholder">Event Poster</span>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="events-list justify-center">
                        <div className="event-card upcoming-event" data-reveal>
                            <div className="event-element">
                                <img src="/Icons/Event-DownMark.svg" alt="Event marker" className="event-element-dot" />
                                <div className="event-element-line" />
                                <div className="event-element-line-bg" />
                            </div>
                            <div className="upcoming-event-text">Something Big is Loading.....</div>
                        </div> 
                    </div>
                </div>
            </main>
    );
}
