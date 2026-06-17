import { TeamMemberCard } from '../components/TeamMemberCard/TeamMemberCard';
import teamDepartments from '../data/team.json';
import './TeamPage.css';

type SocialPlatform = 'github' | 'linkedin' | 'instagram' | 'x';

interface TeamDepartment {
    title: string;
    members: {
        name: string;
        role: string;
        image: string;
        socials: {
            platform: SocialPlatform;
            url: string;
        }[];
    }[];
}

const departments = teamDepartments.departments as TeamDepartment[];

export function TeamPage() {
    return (
            <main className="team-page">
                {/* Background gradient overlay */}
                <div className="team-bg-gradient">
                    <img src="/Components/Gradient.svg" alt="" aria-hidden="true" />
                </div>

                <div className="team-container">
                    {/* Page Title */}
                    <div className="team-header" data-reveal>
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
                            <section key={dept.title} className="department-section" data-reveal>
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
    );
}
