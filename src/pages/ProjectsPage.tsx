import React, { useRef, useState } from 'react';
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

const ProjectSpotlightCard = ({ project }: { project: ProjectData }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="project-spotlight-card"
        >
            {/* Outer border spotlight glow */}
            <div
                className="project-spotlight-card-border"
                style={{
                    opacity,
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(159, 83, 255, 0.6), transparent 40%)`,
                }}
            />
            {/* Inner background spotlight glow */}
            <div
                className="project-spotlight-card-glow"
                style={{
                    opacity,
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(159, 83, 255, 0.15), transparent 40%)`,
                }}
            />

            {/* Project Image Header */}
            {project.imageUrl && (
                <div className="project-image-wrapper">
                    <img src={project.imageUrl} alt={project.name} loading="lazy" decoding="async" />
                </div>
            )}

            <div className="project-spotlight-card-content">
                <h3 className="project-card-title">{project.name}</h3>
                <p className="project-card-desc">{project.description}</p>
                
                <div className="project-card-tags">
                    {project.techStack.map((tech, index) => (
                        <span key={index} className="project-tag">{tech}</span>
                    ))}
                </div>

                <div className="project-card-links">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <img src="/Icons/Github.svg" alt="GitHub" className="project-link-icon" />
                        View on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

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
                        Our <span className="highlight">Projects</span>
                    </h1>
                    <p className="projects-page-subtitle">
                        Explore our open-source projects and contributions to the developer community.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectSpotlightCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </main>
    );
}