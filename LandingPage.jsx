import React, { useRef, useEffect } from 'react';
import './LandingPage.css';

const LandingPage = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        let stars = [];
        let mouse = { x: 0, y: 0 };
        let last = performance.now();

        function initStars(count = 600) {
            stars = [];
            const w = window.innerWidth;
            const h = window.innerHeight;
            for (let i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    r: Math.random() * 1.5 + 0.5,
                    alpha: 0.5 + Math.random() * 0.5,
                    depth: Math.random(),
                    tw: Math.random() * 2000,
                    ts: 0.0002 + Math.random() * 0.001,
                    text: null,
                    lt: 0,
                    ti: 20000,
                    as: 0.0005 + Math.random() * 0.002,
                    aa: 0.05 + Math.random() * 0.3
                });
            }
        }

        function resizeCanvas() {
            const w = window.innerWidth;
            const h = window.innerHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            ctx.scale(dpr, dpr);
            initStars();
        }

        function animate(time) {
            const dt = time - last;
            last = time;
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            stars.forEach(s => {
                s.x += (Math.random() - 0.5) * 0.1;
                s.y += (Math.random() - 0.5) * 0.1;
                if (s.x < 0) s.x = window.innerWidth;
                if (s.x > window.innerWidth) s.x = 0;
                if (s.y < 0) s.y = window.innerHeight;
                if (s.y > window.innerHeight) s.y = 0;

                const px = s.x + mouse.x * s.depth * 0.05;
                const py = s.y + mouse.y * s.depth * 0.05;

                ctx.globalAlpha = s.alpha;
                ctx.beginPath();
                ctx.arc(px, py, s.r, 0, Math.PI * 2);
                ctx.fillStyle = '#fff';
                ctx.fill();
                ctx.globalAlpha = 1;
            });

            requestAnimationFrame(animate);
        }

        // Event listeners
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', e => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            mouse.x = e.clientX - w / 2;
            mouse.y = e.clientY - h / 2;
        });
        window.addEventListener('scroll', () => {
            const s = window.scrollY;
            const h = window.innerHeight;
            canvas.style.opacity = Math.max(0, Math.min(1, 1 - s / h));
        });

        // Initialize
        resizeCanvas();
        requestAnimationFrame(animate);

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <>
            <nav>
                <a href="#space">Home</a>
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>

            <section id="space">
                <canvas ref={canvasRef} id="bg" />
                <div className="hero-space">
                    <h1>Hi, I'm <span className="name">Ben Oleynik</span></h1>
                    <p>I design intuitive, user-centered digital experiences blending research and code.</p>
                    <button id="view-projects">View Projects</button>
                </div>
            </section>
        </>
    );
};

export default LandingPage;
