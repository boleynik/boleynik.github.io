// src/pages/ProjectsPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const projectsData = [
    {
        title: 'BioWatch',
        image: '/assets/biowatch-thumb.jpg',  // placeholder image path
        description: 'AI-powered solution for tracking invasive species',
        featured: true,
        link: '/projects/biowatch'
    },
    {
        title: 'Project Atlas',
        image: '/assets/atlas-thumb.jpg',
        description: 'Data visualization platform for climate data',
        featured: true,
        link: '/projects/atlas'
    },
    {
        title: 'DevConnector',
        image: '/assets/devconnector-thumb.jpg',
        description: 'Social network app for developers',
        featured: false,
        link: '/projects/devconnector'
    },
    {
        title: 'Portfolio Redesign',
        image: '/assets/portfolio-thumb.jpg',
        description: 'Personal website redesign project',
        featured: false,
        link: '/projects/portfolio-redesign'
    },
    {
        title: 'IoT Garden',
        image: '/assets/iot-garden-thumb.jpg',
        description: 'Smart garden monitoring system',
        featured: false,
        link: '/projects/iot-garden'
    }
];

function ProjectsPage() {
    const [showAll, setShowAll] = useState(false);

    // Sort projects so that featured ones come first
    const sortedProjects = [...projectsData].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    // Determine how many to show initially (e.g., 4 projects if more are available)
    const initialCount = 4;
    const displayedProjects = showAll ? sortedProjects : sortedProjects.slice(0, initialCount);

    return (
        <div className="content-container">
            <h1>Projects</h1>
            <div className="projects-grid">
                {displayedProjects.map(project => (
                    <Link to={project.link} className="project-card" key={project.title}>
                        {/* Project thumbnail image */}
                        {project.image && <img src={project.image} alt={project.title} />}
                        {/* Project title */}
                        <h2>{project.title}</h2>
                        {/* Short description */}
                        <p>{project.description}</p>
                    </Link>
                ))}
            </div>
            {/* "Show more" button to reveal additional projects */}
            {!showAll && sortedProjects.length > initialCount && (
                <button className="show-more-btn" onClick={() => setShowAll(true)}>
                    Show more
                </button>
            )}
        </div>
    );
}

export default ProjectsPage;
