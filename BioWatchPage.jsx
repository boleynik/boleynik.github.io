// src/pages/BioWatchPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

function BioWatchPage() {
    return (
        <div className="content-container">
            {/* Project Title */}
            <h1>BioWatch</h1>

            {/* Featured image/banner */}
            <img src="/assets/biowatch-banner.jpg" alt="BioWatch project" style={{width: '100%', borderRadius: '0.5rem'}} />

            {/* Quick info summary */}
            <div className="project-summary">
                <p><strong>Role:</strong> Lead Designer & Developer</p>
                <p><strong>Timeline:</strong> Jan 2024 – Apr 2024</p>
                <p><strong>Tools:</strong> Figma, React, Python (AI/ML)</p>
                <p><strong>Project Type:</strong> Mobile App (AI Challenge)</p>
            </div>

            {/* Detailed sections with motion animations on scroll */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2>About</h2>
                <p>
                    BioWatch is an AI-driven solution for <strong>tracking invasive insect species</strong> in real-time,
                    using computer vision to identify species from images and map their spread.
                    This project was developed as part of the 2024 Nittany AI Challenge, aiming to protect ecosystems by enabling quick response to outbreaks.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <h2>Problem Statement</h2>
                <p>
                    Invasive insect species can cause severe damage to ecosystems. However, tracking their spread is difficult with traditional methods.
                    The problem BioWatch addresses is the <strong>lack of a real-time, accessible tool</strong> for monitoring and identifying these species quickly.
                    By empowering users (e.g., researchers or the public) to identify and report sightings via an app, BioWatch helps aggregate crucial data for early intervention.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2>Process</h2>
                <p>
                    The project followed an iterative design and development process. We started with user research and defined core requirements, then created wireframes and an interactive prototype in Figma.
                    On the development side, we built a mobile app interface and integrated an AI model for image recognition.
                </p>
                <h3>Pain Points</h3>
                <ul>
                    <li>**Data Collection:** Acquiring a sufficiently large and diverse dataset of insect images for training the model was challenging.</li>
                    <li>**Accuracy vs Speed:** Balancing the AI model’s accuracy with the need for quick responses on a mobile device required optimization.</li>
                    <li>**User Experience:** Designing the app to be usable by non-experts (e.g., citizen scientists) meant simplifying complex AI results into clear, actionable information.</li>
                </ul>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <h2>Final Product</h2>
                <p>
                    The outcome of this project was a functional <strong>mobile application</strong> (iOS) that allows users to photograph an insect and receive an immediate identification using the onboard AI model.
                    The app then plots the sighting on a map, aggregating data from all users to visualize the spread of species.
                    We also built a web dashboard for researchers to monitor incoming reports.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <h2>Reflection</h2>
                <p>
                    BioWatch was a rewarding project that demonstrated how <em>AI for social good</em> can make a tangible impact. Our team’s efforts were recognized when BioWatch won <strong>First Place in the 2024 Nittany AI Challenge</strong>,
                    securing funding to continue development. This experience taught me the importance of interdisciplinary collaboration – combining design, programming, and domain knowledge to solve a real-world problem.
                    It also reinforced the value of subtle but effective UX (our focus on a clean interface and gentle animations helped users engage with complex AI features more comfortably).
                </p>
            </motion.div>
        </div>
    );
}

export default BioWatchPage;
