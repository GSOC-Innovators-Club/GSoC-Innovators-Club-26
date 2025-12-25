import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { TeamMemberCard } from '../components/TeamMemberCard/TeamMemberCard';
import './TeamPage.css';

// Team data grouped by department
const departments = [
    {
        title: 'Technical',
        members: [
            {
                name: 'John Carmack',
                role: 'Club President',
                image: '/Icons/UserPIC.svg',
                socials: [
                    { platform: 'github' as const, url: 'https://github.com' },
                    { platform: 'linkedin' as const, url: 'https://linkedin.com' },
                    { platform: 'x' as const, url: 'https://x.com' }
                ]
            },
            {
                name: 'George Hotz',
                role: 'Technical Lead',
                image: '/Icons/UserPIC.svg',
                socials: [
                    { platform: 'github' as const, url: 'https://github.com' },
                    { platform: 'linkedin' as const, url: 'https://linkedin.com' },
                    { platform: 'instagram' as const, url: 'https://instagram.com' }
                ]
            },

            {
                name: 'Dennis Ritchie',
                role: 'Tech Member',
                image: '/Icons/UserPIC.svg',
                socials: [
                    { platform: 'github' as const, url: 'https://github.com' },
                    { platform: 'x' as const, url: 'https://x.com' }
                ]
            },

            {
                name: 'Tom Muller',
                role: 'Tech Member',
                image: '/Icons/UserPIC.svg',
                socials: [
                    { platform: 'github' as const, url: 'https://github.com' },
                    { platform: 'x' as const, url: 'https://x.com' }
                ]
            }
        ]
    },
    {
        title: 'Content',
        members: [
            {
                name: 'Chris Nolan',
                role: 'Content Lead',
                image: '/Icons/UserPIC.svg',
                socials: [
                    { platform: 'linkedin' as const, url: 'https://linkedin.com' },
                    { platform: 'instagram' as const, url: 'https://instagram.com' }
                ]
            },
            {
                name: 'Joe Russo',
                role: 'Content Manager',
                image: '/Icons/UserPIC.svg',
                socials: [
                    { platform: 'linkedin' as const, url: 'https://linkedin.com' },
                    { platform: 'instagram' as const, url: 'https://instagram.com' },
                    { platform: 'x' as const, url: 'https://x.com' }
                ]
            },
            {
                name: 'Peter Jackson',
                role: 'Content Member',
                image: '/Icons/UserPIC.svg',
                socials: [
                    { platform: 'github' as const, url: 'https://github.com' },
                    { platform: 'linkedin' as const, url: 'https://linkedin.com' }
                ]
            }
        ]
    },
    {
        title: 'Event Management',
        members: [
            {
                name: 'Stan Lee',
                role: 'Events Head',
                image: '/Icons/UserPIC.svg',
                socials: [
                    { platform: 'linkedin' as const, url: 'https://linkedin.com' }
                ]
            },
            {
                name: 'Margret Thatcher',
                role: 'Coordinator',
                image: '/Icons/UserPIC.svg',
                socials: [
                    { platform: 'x' as const, url: 'https://x.com' }
                ]
            }
        ]
    },
    {
        title: 'Research',
        members: [
            {
                name: 'Dr. Jeff Hinton',
                role: 'Research Lead',
                image: '/Icons/UserPIC.svg',
                socials: [
                    { platform: 'github' as const, url: 'https://github.com' },
                    { platform: 'linkedin' as const, url: 'https://linkedin.com' }
                ]
            },

            {
                name: 'Dr. Illya Suts',
                role: 'Research Co-Lead',
                image: '/Icons/UserPIC.svg',
                socials: [
                    { platform: 'github' as const, url: 'https://github.com' },
                    { platform: 'linkedin' as const, url: 'https://linkedin.com' }
                ]
            },

            {
                name: 'Dr. Dario Amodei',
                role: 'Research Co-Lead',
                image: '/Icons/UserPIC.svg',
                socials: [
                    { platform: 'github' as const, url: 'https://github.com' },
                    { platform: 'linkedin' as const, url: 'https://linkedin.com' }
                ]
            }
        ]
    }
];

export function TeamPage() {
    return (
        <>
            <Header />
            <main className="team-page">
                {/* Background gradient overlay */}
                <div className="team-bg-gradient">
                    <img src="/Components/Gradient.svg" alt="" aria-hidden="true" />
                </div>

                <div className="team-container">
                    {/* Page Title */}
                    <div className="team-header">
                        <h1 className="team-title">
                            <span className="highlight">Our Team</span>
                        </h1>
                        <p className="team-subtitle">
                            Meet the passionate individuals driving innovation and open-source contribution at GSoC Innovators Club.
                        </p>
                    </div>

                    {/* Department Sections */}
                    <div className="team-sections">
                        {departments.map((dept) => (
                            <section key={dept.title} className="department-section">
                                <h2 className="department-title">{dept.title}</h2>
                                <div className="department-grid">
                                    {dept.members.map((member, index) => (
                                        <TeamMemberCard
                                            key={`${dept.title}-${index}`}
                                            name={member.name}
                                            role={member.role}
                                            image={member.image}
                                            socials={member.socials}
                                        />
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
