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
      <div className="open-source-page-container">
        <div className="open-source-page-header" data-reveal>
          <h1 className="open-source-page-title">
            <span className="highlight">Open Source</span>
          </h1>
          <p className="open-source-page-subtitle">
            Participate in leading open source events, contribute to impactful projects, and accelerate your skills.
          </p>
        </div>

        <div className="open-source-list">
          {events.map((event) => (
            <article key={event.name} className="open-source-card" data-reveal>
              <div className="open-source-card-header">
                <div className="open-source-event-icon">
                  <img src="/Icons/GSOC-Icon.svg" alt="" />
                </div>
                <div>
                  <p className="open-source-card-label">Open Source Program</p>
                  <h2 className="open-source-event-name">{event.name}</h2>
                </div>
              </div>

              <div className="open-source-card-content">
                <div className="open-source-detail open-source-description">
                  <h3>
                    <img src="/Icons/Home Icon.svg" alt="" />
                    Description
                  </h3>
                  <p>{event.description}</p>
                </div>

                <div className="open-source-meta-grid">
                  <div className="open-source-detail">
                    <h3>
                      <img src="/Icons/Calender.svg" alt="" />
                      Registration
                    </h3>
                    <p>{event.deadline}</p>
                  </div>
                  <div className="open-source-detail">
                    <h3>
                      <img src="/Icons/Calender.svg" alt="" />
                      Duration
                    </h3>
                    <p>{event.duration}</p>
                  </div>
                  <div className="open-source-detail">
                    <h3>
                      <img src="/Icons/GroupIcon.svg" alt="" />
                      Organization
                    </h3>
                    <p>{event.organization}</p>
                  </div>
                </div>
              </div>

              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="open-source-register-button"
              >
                Register Now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceEvents;
