import './Header.css';

const navLinks = [
    { label: 'Team', href: '#team' },
    { label: 'Projects', href: '#projects' },
    { label: 'Events', href: '#events' },
    { label: 'Follow Us', href: '#follow' },
];

export function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                {/* Club Branding */}
                <div className="branding">
                    <img
                        src="/Logos/ClubLogo.png"
                        alt="GSoC Innovators Club Logo"
                        className="club-logo"
                    />
                    <span className="brand-name">
                        GSoC{'\n'}Innovators{'\n'}Club
                    </span>
                </div>

                {/* Navigation Links */}
                <div className="navigation">
                    {navLinks.map((link, index) => (
                        <div key={link.label} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <a href={link.href} className="nav-link">
                                {link.label}
                            </a>
                            {index < navLinks.length - 1 && (
                                <span className="nav-separator">//</span>
                            )}
                        </div>
                    ))}
                </div>

                {/* VIT Bhopal Logo */}
                <img
                    src="/Logos/VITB_White_No_BG.png"
                    alt="VIT Bhopal University"
                    className="vitb-logo"
                />
            </nav>
        </header>
    );
}
