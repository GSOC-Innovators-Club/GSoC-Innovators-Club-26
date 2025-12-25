import './TeamMemberCard.css';

interface SocialLink {
    platform: 'github' | 'linkedin' | 'instagram' | 'x';
    url: string;
}

interface TeamMemberCardProps {
    name: string;
    role: string;
    image?: string;
    socials?: SocialLink[];
}

const socialIcons: Record<string, string> = {
    github: '/Icons/Github.svg',
    linkedin: '/Icons/LinkedIn_Logo.svg',
    instagram: '/Icons/Instagram_Logo.svg',
    x: '/Icons/X_Logo.svg'
};

export function TeamMemberCard({ name, role, image = '/Icons/UserPIC.svg', socials = [] }: TeamMemberCardProps) {
    return (
        <div className="team-card">
            <div className="team-card-image">
                <img src={image} alt={name} />
            </div>
            <div className="team-card-info">
                <h3 className="team-card-name">{name}</h3>
                <p className="team-card-role">{role}</p>
            </div>
            {socials.length > 0 && (
                <div className="team-card-socials">
                    {socials.map((social) => (
                        <a
                            key={social.platform}
                            href={social.url}
                            className="team-card-social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.platform}
                        >
                            <img src={socialIcons[social.platform]} alt={social.platform} />
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
