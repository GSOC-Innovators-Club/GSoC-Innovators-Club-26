import './Footer.css';

const VitLinks = [
    { name: 'Instagram', icon: '/Icons/Instagram_Logo.svg', url: 'https://www.instagram.com/gsoc_innovators_club/' },
    { name: 'LinkedIn', icon: '/Icons/LinkedIn_Logo.svg', url: 'https://www.linkedin.com/company/gsoc-innovators/' },
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
                                loading="lazy"
                                decoding="async"
                            />
                            <span className="footer-brand-name">
                                GSoC{'\n'}Innovators{'\n'}Club
                            </span>
                        </div>
                        
                    </div>

                    <div className="Contact-Us">
                        <div className='contact-heading'>Contact Us</div>
                        <div className='contact-email'><img src="/Icons/email-logo (1).svg" alt="Email" />gsocinnovators.queries@gmail.com</div>
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

                    {/* Right Section */}
                    <div className="footer-brand-right">
                        {/* Navigation */}
                        <div className="footer-logo-container">
                        <a 
                            href="https://vitbhopal.ac.in/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="footer-vitb-link"
                        >
                            <img
                                src="/Logos/VITB_White_No_BG.png"
                                alt="VIT Bhopal University"
                                className="footer-vitb-logo"
                                loading="lazy"
                                decoding="async"
                            />
                        </a>
                        </div>

                        {/* Social Links */}
                        
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
