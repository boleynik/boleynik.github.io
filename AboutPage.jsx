// src/pages/AboutPage.jsx
import React from 'react';

function AboutPage() {
    return (
        <div className="content-container">
            <h1>About Me</h1>
            <div className="about-content">
                {/* Placeholder for profile picture */}
                <img src="/assets/profile-placeholder.jpg" alt="Profile of Ben Oleynik" />
                {/* Text content about the person */}
                <div>
                    <p><strong>Hi, I'm Ben Oleynik.</strong></p>
                    <p>I'm a UX designer and front-end developer passionate about crafting interactive experiences that blend <em>usability</em> and <em>innovation</em>. I love solving complex problems through intuitive design and clean code.</p>
                    <p>With a background in Human-Centered Design and Development, I specialize in building applications that are not only functional but also delightful to use. I have experience in design thinking, prototyping, and full-stack development.</p>
                    <p>Outside of coding and designing, you might find me rock climbing or exploring new tech in AI and IoT. I'm always learning and looking for the next challenge!</p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
