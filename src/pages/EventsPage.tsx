import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import './EventsPage.css';
import '../components/EventsSection/EventsSection.css';

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
    {
        name: "Exciting Event'2",
        date: 'DD/MM/YYYY',
        venue: 'Mount Olympus Mars',
        highlights: [
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur. Tellus non sed sollicitudin magna sit mattis urna.',
            'Lorem ipsum dolor sit amet consectetur. Tincidunt pharetra urna aenean sit dui arcu.',
            'Lorem ipsum dolor sit amet consectetur.'
        ]
    },
    {
        name: "Exciting Event'3",
        date: 'DD/MM/YYYY',
        venue: 'Mount Olympus Mars',
        highlights: [
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur. Tellus non sed sollicitudin magna sit mattis urna.',
            'Lorem ipsum dolor sit amet consectetur. Tincidunt pharetra urna aenean sit dui arcu.',
            'Lorem ipsum dolor sit amet consectetur.'
        ]
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
                </div>
            </main>
            <Footer />
        </>
    );
}
