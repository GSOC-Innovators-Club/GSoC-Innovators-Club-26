import './AboutSection.css';

interface InfoCardData {
    icon: string;
    stat: string;
    description: string;
}

const infoCards: InfoCardData[] = [
    {
        icon: '/Components/GroupPurpleBG.svg',
        stat: '50+ Members',
        description: 'A group of highly motivated individuals, determined to make lasting change'
    },
    {
        icon: '/Components/GithubPurpleBG.svg',
        stat: '1+ Projects',
        description: 'Complex and Challenging Projects'
    },
    {
        icon: '/Components/EventsPurpleBG.svg',
        stat: '1+ Events',
        description: 'Events specifically designed around Open Source'
    }
];

export function AboutSection() {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                {/* Section Title */}
                <div className="about-title-container" data-reveal>
                    <h2 className="about-title">
                        About <span className="highlight">Us</span>
                    </h2>
                    <p className="about-subtitle">
                        Make your data invisible by generating unlimited identities.
                        The next-level in privacy protection for online and travel.
                    </p>
                </div>

                {/* Info Cards */}
                <div className="info-cards">
                    {infoCards.map((card, index) => (
                        <div key={index} className="info-card" data-reveal>
                            <div className="info-card-content">
                                <img src={card.icon} alt={card.stat} className="info-card-icon" />
                                <span className="info-card-stat">{card.stat}</span>
                                <p className="info-card-description">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
