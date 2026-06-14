import './ProjectsPage.css';

interface ProjectData {
    name: string;
    description: string;
    techStack: string[];
    githubLink: string;
    imageUrl?: string;
}

const projects: ProjectData[] = [
    {
        name: "Talk Space",
        description: "Talk Space is a video calling application built with Go, TypeScript, and Kotlin that allows users to connect with random people online for spontaneous conversations, similar to Omegle. It provides a platform for meeting new people virtually through video calls.",
        techStack: ["Go", "Kotlin", "TypeScript"],
        githubLink: "https://github.com/GSOC-Innovators-Club/Talk-Space",
        imageUrl: "/Pictures/talkspace.png"
    }
];

export function ProjectsPage() {
    return (
            <main className="projects-page">
                {/* Background gradient overlay */}
                <div className="projects-bg-gradient">
                    <img src="/Components/Gradient.svg" alt="" aria-hidden="true" />
                </div>

                <div className="projects-page-container">
                    {/* Page Title */}
                    <div className="projects-page-header" data-reveal>
                        <h1 className="projects-page-title">
                            <span className="highlight">Our Projects</span>
                        </h1>
                        <p className="projects-page-subtitle">
                            Explore our open-source projects and contributions to the developer community.
                        </p>
                    </div>

                    {/* Projects List */}
                    <div className="projects-list">
                        {projects.map((project, index) => (
                            <article key={index} className="project-card" data-reveal>
                                <div className="project-card-inner">
                                    {/* Project Details */}
                                    <div className="project-details">
                                        <div className="project-content">
                                            <h3 className="project-name">{project.name}</h3>
                                            <p className="project-description">{project.description}</p>
                                            
                                            <div className="project-tech-stack">
                                                {project.techStack.map((tech, techIndex) => (
                                                    <span key={techIndex} className="tech-badge">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="project-actions">
                                            <a 
                                                href={project.githubLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="github-link"
                                            >
                                                <img src="/Icons/Github.svg" alt="" className="github-icon" />
                                                View On Github
                                            </a>
                                        </div>
                                    </div>

                                    {/* Project Image */}
                                    {project.imageUrl && (
                                        <div className="project-image-container">
                                            <img
                                                src={project.imageUrl}
                                                alt={`${project.name} preview`}
                                                className="project-image"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
    );
}
