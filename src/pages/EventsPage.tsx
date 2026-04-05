import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import './EventsPage.css';
import '../components/EventsSection/EventsSection.css';

interface EventData {
    name: string;
    date: string;
    venue: string;
    time: string;
    description?: string;
    highlights: string[];
    agenda?: string[];
    posterUrl?: string; 
}

const events: EventData[] = [
    {
        name: "Summer of CodeFest'25",
        date: 'April 13-14, 2025',
        venue: 'AB-2 Auditorium',
        time: '09:00 AM onwards',
        description: 'This event will have a Seminar and an innovative Hackathon. Learn how to prepare for GSOC and increase your chances of selection. Also compete in a hackathon with peers in building innovative projects.',
        highlights: [
            'Basic programming knowledge',
            'GitHub account',
            'Laptop with internet connection etc.'
        ],
        agenda: [
            'Introduction to GSOC',
            'Introduction to Github',
            'Fun Activities',
            'Hackathon'
        ],
    },
    {
        name: "Cinemaghar",
        date: 'February 28, 2026',
        venue: 'AB-2 Auditorium-2',
        time: '11:00 AM - 02:00 PM',
        description: ' Your Wait is Over! We are LIVE with your voted movie Chhichhore. Ab delay kyu? Register karo & apni seat confirm karo!',
        highlights: [
            'Leave all worries behind.',
            'Enjoy to your fullest',
        ],
        agenda: [
            'Join us for a cinematic experience like no other!',
            'Live DJ, Epic games and More...',
            'See you there!'
        ],
        posterUrl: '/Components/Cinemaghar.jpeg' 
    },
    {
        name: "Summer of CodeFest'26",
        date: 'upcoming',
        venue: 'upcoming',
        time: 'upcoming',
        description: 'Something exciting is brewing for Summer of CodeFest 2026! Stay tuned for updates on our upcoming event that promises to be bigger and better than ever before. Get ready for an unforgettable experience filled with learning, innovation, and fun!',
        highlights: [
            'upcoming'
        ],
    }
];

export function EventsPage() {
    return (
        <>
            <Header />
            <main className="events-page">
                {/* Background gradient overlay */}
                <div className="events-bg-gradient">
                    <img src="/Components/Gradient.svg" alt="" aria-hidden="true" />
                </div>

                <div className="events-page-container">
                    {/* Page Title */}
                    <div className="events-page-header">
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
                            <article key={index} className="event-card">
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



                                            <div className="event-highlights">
                                                <h4 className="agenda-title">Requirements</h4>
                                                {event.highlights.map((highlight, hIndex) => (
                                                    <div key={hIndex} className="event-highlight">
                                                        <img src="/Icons/Event-TickMark.svg" alt="Check" className="highlight-icon" />
                                                        <p className="highlight-text">{highlight}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            {event.agenda && (
                                                <div className="event-highlights">
                                                    <h4 className="agenda-title">Event Agenda</h4>
                                                    {event.agenda.map((item, aIndex) => (
                                                        <div key={aIndex} className="event-highlight">
                                                            <img src="/Icons/Event-TickMark.svg" alt="Check" className="highlight-icon" />
                                                            <p className="highlight-text">{item}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                        </div>
                                    </div>

                                    {/* Event Poster */}
                                    <div className="event-poster">
                                        {event.posterUrl ? (
                                            <img src={event.posterUrl} alt="Event Poster" className="poster-image" />
                                        ) : (
                                            <span className="poster-placeholder">Event Poster</span>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
