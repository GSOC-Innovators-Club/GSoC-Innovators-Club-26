import './Footer.css';

const GsocLinks = [
    { name: 'Instagram', icon: '/Icons/Instagram_Logo.svg', url: 'https://www.instagram.com/gsoc_innovators_club/' },
    { name: 'LinkedIn', icon: '/Icons/LinkedIn_Logo.svg', url: 'https://www.linkedin.com/company/gsoc-innovators/' },
];
const VitLinks = [
    { name: 'Instagram', icon: '/Icons/Instagram_Logo.svg', url: 'https://www.instagram.com/vit.bhopal/' },
    { name: 'LinkedIn', icon: '/Icons/LinkedIn_Logo.svg', url: 'https://www.linkedin.com/school/vit-bhopal-university/posts/?feedView=all' },
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
                            {GsocLinks.map((social) => (
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
                            {VitLinks.map((social) => (
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
