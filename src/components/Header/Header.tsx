import { Link } from 'react-router-dom';
import './Header.css';

const navLinks = [
    { label: 'Team', href: '/team', isRoute: true },
    { label: 'Projects', href: '#projects', isRoute: false },
    { label: 'Events', href: '/events', isRoute: true },
    { label: 'Follow Us', href: '#follow', isRoute: false },
];

export function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                {/* Club Branding */}
                <div className="branding">
                    <Link to="/">
                        <img
                            src="/Logos/ClubLogo.png"
                            alt="GSoC Innovators Club Logo"
                            className="club-logo"
                        />
                    </Link>
                    <Link to="/" className="brand-name">
                        GSoC{'\n'}Innovators{'\n'}Club
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="navigation">
                    {navLinks.map((link, index) => (
                        <div key={link.label} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            {link.isRoute ? (
                                <Link to={link.href} className="nav-link">
                                    {link.label}
                                </Link>
                            ) : (
                                <a href={link.href} className="nav-link">
                                    {link.label}
                                </a>
                            )}
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

