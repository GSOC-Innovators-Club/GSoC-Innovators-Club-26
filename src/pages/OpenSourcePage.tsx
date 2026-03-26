import './OpenSourcePage.css';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export function OpenSourcePage() {
  return (
    <div className="opensource-page">
      <Header />
      <main className="opensource-main">
        <section className="opensource-hero">
          <p className="opensource-kicker">Open Source</p>
          <h1 className="opensource-title">Contribute Beyond the Classroom</h1>
          <p className="opensource-subtitle">
            The GSoC Innovators Club is built on open collaboration. Explore our projects,
            learn how we work, and ship real-world contributions to the open source ecosystem.
          </p>
        </section>

        <section className="opensource-section">
          <h2 className="opensource-section-title">Why Open Source?</h2>
          <div className="opensource-grid">
            <article className="opensource-card">
              <h3>Real-World Impact</h3>
              <p>
                Your code powers tools used by developers and communities worldwide. Every merged PR
                is a step towards better software for everyone.
              </p>
            </article>
            <article className="opensource-card">
              <h3>Learn by Building</h3>
              <p>
                Work with modern stacks, real codebases, and collaborative workflows &mdash; version
                control, reviews, CI, and more.
              </p>
            </article>
            <article className="opensource-card">
              <h3>Stand Out in GSoC</h3>
              <p>
                Consistent contributions help you build a strong profile for GSoC and other
                fellowships, internships, and research opportunities.
              </p>
            </article>
          </div>
        </section>

        <section className="opensource-section">
          <h2 className="opensource-section-title">Our Open Source Projects</h2>
          <p className="opensource-section-description">
            We maintain and contribute to multiple repositories under the club organization. Start
            with issues tagged <code>good first issue</code> or <code>help wanted</code>.
          </p>
          <div className="opensource-grid projects-grid">
            <article className="opensource-card project-card">
              <h3>Club Website</h3>
              <p>
                The site you are viewing right now is fully open source. Help us improve the
                landing page, animations, accessibility, and performance.
              </p>
              <a
                href="https://github.com/Fatemasaifyy/GSoC-Innovators-Club-26"
                target="_blank"
                rel="noreferrer"
                className="opensource-link"
              >
                View Repository
              </a>
            </article>
            <article className="opensource-card project-card">
              <h3>Tooling &amp; Starter Kits</h3>
              <p>
                Templates and starter projects to help new contributors ramp up quickly with React,
                TypeScript, and common GSoC tech stacks.
              </p>
              <a
                href="https://github.com/search?q=GSoC+Innovators+Club&type=repositories"
                target="_blank"
                rel="noreferrer"
                className="opensource-link"
              >
                Explore Projects
              </a>
            </article>
          </div>
        </section>

        <section className="opensource-section">
          <h2 className="opensource-section-title">Ongoing Open Source Events</h2>
          <p className="opensource-section-description">
            Join one of our signature programs and contribute to real-world open source projects while growing your skills.
          </p>
          <div className="events-grid">
            <a
              href="https://summerofcode.withgoogle.com/"
              target="_blank"
              rel="noreferrer"
              className="event-card-link"
            >
              <article className="event-card">
                <div className="event-header">
                  <h3 className="event-title">✧ Google Summer of Code (GSoC 2026)</h3>
                </div>
                <div className="event-detail">
                  <span className="event-label">✦ Description</span>
                  <p className="event-value">
                    A global open-source program where contributors work with international organizations under expert mentorship and receive a stipend.
                  </p>
                </div>
                <div className="event-detail">
                  <span className="event-label">⌁ Registration</span>
                  <p className="event-value">16 March – 31 March 2026</p>
                </div>
                <div className="event-detail">
                  <span className="event-label">⧗ Duration</span>
                  <p className="event-value">25 May – 16 August 2026</p>
                </div>
                <div className="event-detail">
                  <span className="event-label">◈ Organization</span>
                  <p className="event-value">Google</p>
                </div>
              </article>
            </a>

            <a
              href="https://www.nsoc.in/"
              className="event-card-link"
                target="_blank"
                rel="noreferrer"
            >
              <article className="event-card">
                <div className="event-header">
                  <h3 className="event-title">✧ Nexus Spring of Code (NSoC 2026)</h3>
                </div>
                <div className="event-detail">
                  <span className="event-label">✦ Description</span>
                  <p className="event-value">
                    A college-level open-source program designed for beginners to start contributing to real-world projects with mentorship and community support.
                  </p>
                </div>
                <div className="event-detail">
                  <span className="event-label">⌁ Registration</span>
                  <p className="event-value">Expected by March 2026 (Tentative)</p>
                </div>
                <div className="event-detail">
                  <span className="event-label">⧗ Duration</span>
                  <p className="event-value">March – April 2026</p>
                </div>
                <div className="event-detail">
                  <span className="event-label">◈ Organization</span>
                  <p className="event-value">Nexus Open Source / College Tech Community</p>
                </div>
              </article>
            </a>

            <a
              href="https://socialsummerofcode.com/"
              target="_blank"
              rel="noreferrer"
              className="event-card-link"
            >
              <article className="event-card">
                <div className="event-header">
                  <h3 className="event-title">✧ Social Summer of Code (SSoC 2026)</h3>
                </div>
                <div className="event-detail">
                  <span className="event-label">✦ Description</span>
                  <p className="event-value">
                    A beginner-friendly open-source program focused on learning GitHub, collaboration, and building impactful projects with guidance from mentors.
                  </p>
                </div>
                <div className="event-detail">
                  <span className="event-label">⌁ Registration</span>
                  <p className="event-value">Expected by May – June 2026 (Tentative)</p>
                </div>
                <div className="event-detail">
                  <span className="event-label">⧗ Duration</span>
                  <p className="event-value">June – August 2026</p>
                </div>
                <div className="event-detail">
                  <span className="event-label">◈ Organization</span>
                  <p className="event-value">Social Summer of Code Community</p>
                </div>
              </article>
            </a>
          </div>
        </section>

        <section className="opensource-section">
          <h2 className="opensource-section-title">How to Get Involved</h2>
          <ol className="opensource-steps">
            <li>
              Join our communication channels (Discord/WhatsApp/Email) to stay updated on new issues
              and contribution sprints.
            </li>
            <li>
              Pick a repository, read the <code>README</code>, and set up the project locally.
            </li>
            <li>
              Start with beginner-friendly issues, pair up with a mentor, and submit your first PR.
            </li>
          </ol>
          <p className="opensource-section-description">
            Not sure where to start? Reach out to the Open Source team leads on the Team page and we
            will help you pick a project aligned with your interests.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
