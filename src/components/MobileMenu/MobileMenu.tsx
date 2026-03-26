import { Link } from 'react-router-dom';
import './MobileMenu.css';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const mobileNavLinks = [
    { label: 'Home', href: '/', icon: '/Icons/Home Icon.svg', isRoute: true },
    { label: 'Team', href: '/team', icon: '/Icons/GroupIcon.svg', isRoute: true },
    { label: 'Open Source', href: '/open-source', icon: '/Icons/Code Icon.svg', isRoute: true },
    { label: 'Events', href: '/events', icon: '/Icons/Calender.svg', isRoute: true },
    { label: 'Follow Us', href: '#follow', icon: '/Icons/Social Icon.svg', isRoute: false },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    return (
        <>
            {/* Overlay */}
            <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />

            {/* Sidebar */}
            <aside className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    {/* Header with Close and Branding */}
                    <div className="mobile-menu-header">
                        <button className="close-button" onClick={onClose} aria-label="Close Menu">
                            <img src="/Icons/CloseIcon.svg" alt="Close" />
                        </button>
                        
                        <div className="mobile-branding">
                            <img src="/Logos/ClubLogo.png" alt="Logo" className="mobile-club-logo" />
                            <span className="mobile-brand-name">GSoC{"\n"}Innovators{"\n"}Club</span>
                        </div>
                    </div>

                    {/* Nav Links */}
                    <nav className="mobile-nav">
                        {mobileNavLinks.map((link) => (
                            <div key={link.label} className="mobile-nav-item">
                                <img src={link.icon} alt="" className="mobile-nav-icon" />
                                <span className="mobile-nav-separator">//</span>
                                {link.isRoute ? (
                                    <Link to={link.href} className="mobile-nav-link" onClick={onClose}>
                                        {link.label}
                                    </Link>
                                ) : (
                                    <a href={link.href} className="mobile-nav-link" onClick={onClose}>
                                        {link.label}
                                    </a>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            </aside>
        </>
    );
}
