import { useRef } from 'react';
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

export function EventsSection() {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -600, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 600, behavior: 'smooth' });
        }
    };

    return (
        <section className="events-section" id="events">
            <div className="events-container">
                {/* Section Title */}
                <div className="events-title-container">
                    <h2 className="events-title">
                        Upcoming <span className="highlight">Events</span>
                    </h2>
                    <p className="events-subtitle">
                        Here are Our Upcoming Events, buckle up for challenges and rewards
                    </p>
                </div>

                {/* Slider */}
                <div className="events-slider-container">
                    {/* Left Navigation */}
                    <button className="slider-nav left" onClick={scrollLeft} aria-label="Previous event">
                        <img src="/Icons/Slide_left.svg" alt="Previous" />
                    </button>

                    {/* Events Slider */}
                    <div className="events-slider" ref={sliderRef}>
                        {events.map((event, index) => (
                            <article key={index} className="event-card">
                                <div className="event-card-inner">
                                    {/* Event Content */}
                                    <div className="event-content">
                                        {/* Timeline Element */}
                                        <div className="event-element">
                                            <div className="event-element-dot" />
                                            <div className="event-element-line" />
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
                                                        <div className="highlight-icon" />
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

                    {/* Right Navigation */}
                    <button className="slider-nav right" onClick={scrollRight} aria-label="Next event">
                        <img src="/Icons/Slide_Right.svg" alt="Next" />
                    </button>
                </div>
            </div>
        </section>
    );
}
