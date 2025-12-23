import './Footer.css';

const socialLinks = [
    { name: 'Instagram', icon: '/Icons/Instagram_Logo.svg', url: '#' },
    { name: 'LinkedIn', icon: '/Icons/LinkedIn_Logo.svg', url: '#' },
    { name: 'X', icon: '/Icons/X_Logo.svg', url: '#' }
];


export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Footer Top */}
                <div className="footer-top">
                    {/* Brand Section */}
                    <div className="footer-brand-left">
                        <div className="footer-logo-container">
                            <img
                                src="/Logos/ClubLogo.png"
                                alt="GSoC Innovators Club"
                                className="footer-logo"
                            />
                            <span className="footer-brand-name">
                                GSoC{'\n'}Innovators{'\n'}Club
                            </span>
                        </div>

                        {/* Social Links */}
                        <div className="footer-social">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className="social-link"
                                    aria-label={social.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={social.icon} alt={social.name} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="footer-brand-right">
                        {/* Navigation */}
                        <div className="footer-logo-container">
                            <img
                               src="/Logos/VITB_White_No_BG.png"
                                alt="VIT Bhopal University"
                                className="footer-vitb-logo"
                            />
                        </div>

                        {/* Social Links */}
                        <div className="footer-social">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className="social-link"
                                    aria-label={social.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={social.icon} alt={social.name} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © GSOC Innovators Club. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
