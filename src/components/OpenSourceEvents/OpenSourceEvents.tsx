import React from 'react';
import './OpenSourceEvents.css';

const events = [
  {
    name: 'Nexus Spring of Code',
    description: 'A month-long open-source event by Nexus that helps students to get started with open source.',
    deadline: 'March 30, 2026',
    duration: '1st April - 30th April',
    organization: 'Nexus',
    link: 'https://nexus-soc.github.io/',
  },
  {
    name: 'Google Summer of Code',
    description: 'A global, online program focused on bringing new contributors into open source software development.',
    deadline: 'April 15, 2026',
    duration: 'May - August',
    organization: 'Google',
    link: 'https://summerofcode.withgoogle.com/',
  },
  {
    name: 'Social Summer of Code',
    description: 'A program for students to contribute to open-source projects under the guidance of mentors.',
    deadline: 'May 1, 2026',
    duration: 'June - August',
    organization: 'Social',
    link: 'https://www.socialsummerofcode.com/',
  },
];

const OpenSourceEvents: React.FC = () => {
  return (
    <section className="open-source-events">
      <h2 className="section-title">Ongoing Open Source Events</h2>
      <p className="section-subtitle">
        Participate in leading open source events, contribute to impactful projects, and accelerate your skills.
      </p>
      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <h3 className="event-name">
              <img src="/Icons/GSOC-Icon.svg" alt="diamond" className="event-icon" />
              {event.name}
            </h3>
            <div className="event-detail-section">
              <h4><img src="/Icons/Home Icon.svg" alt="description" className="detail-icon" /> Description</h4>
              <p>{event.description}</p>
            </div>
            <div className="event-detail-section">
              <h4><img src="/Icons/Calender.svg" alt="calendar" className="detail-icon" /> Registration</h4>
              <p>{event.deadline}</p>
            </div>
            <div className="event-detail-section">
              <h4><img src="/Icons/Calender.svg" alt="clock" className="detail-icon" /> Duration</h4>
              <p>{event.duration}</p>
            </div>
            <div className="event-detail-section">
              <h4><img src="/Icons/GroupIcon.svg" alt="organization" className="detail-icon" /> Organization</h4>
              <p>{event.organization}</p>
            </div>
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="register-button"
            >
              Register Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenSourceEvents;
