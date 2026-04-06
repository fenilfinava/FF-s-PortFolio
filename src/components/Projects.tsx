"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        number: "01",
        title: "PathFinder Bot",
        description:
            "Developed an autonomous line following robot using 8-array IR sensors and Arduino. Implemented PID control algorithm in C/C++ to achieve smooth, stable, and accurate path tracking with real-time correction.",
        tags: ["Arduino", "C", "C++", "PID Control", "IR Sensors", "Embedded Systems"],
        github: "#",
        live: "",
        icon: "🤖",
        note: "GitHub repo coming soon",
    },
    {
        number: "02",
        title: "EduTrack",
        description:
            "Built a full-stack web platform to track student projects, GitHub contributions, and mentor evaluations in a centralized system. Integrated GitHub APIs and role-based dashboards for real-time project monitoring.",
        tags: ["Next.js", "React", "TypeScript", "Node.js", "Supabase", "PostgreSQL"],
        github: "https://github.com/fenilfinava/EduTrack",
        live: "https://edu-track-umber.vercel.app",
        icon: "📚",
        note: "",
    },
];

function ProjectIllustration({ number }: { number: string }) {
    switch (number) {
        case "01":
            return (
                <svg className="project-ill" viewBox="0 0 200 200" style={{ width: '70%', height: 'auto', stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                    {/* Phone Frame */}
                    <rect x="70" y="30" width="60" height="140" rx="10" className="ill-phone-frame" />

                    {/* Screen Elements */}
                    <path d="M80 50 L110 50" className="ill-text-line ill-delay-1" />
                    <path d="M80 65 L100 65" className="ill-text-line ill-delay-2" />

                    <path d="M120 90 L85 90" className="ill-text-line ill-text-right ill-delay-3" />
                    <path d="M120 105 L95 105" className="ill-text-line ill-text-right ill-delay-4" />

                    {/* AI Node (Floating next to phone) */}
                    <g className="ill-ai-node">
                        <circle cx="150" cy="80" r="15" fill="currentColor" fillOpacity="0.05" className="ill-pulse-circle" />
                        <circle cx="150" cy="80" r="5" fill="currentColor" />
                        {/* Connection line */}
                        <path d="M130 80 L145 80" strokeDasharray="3,3" className="ill-data-flow" />
                    </g>

                    {/* SMS Waves */}
                    <path d="M45 80 Q55 60 65 80 Q55 100 45 80" className="ill-pulse-wave ill-wave-1" />
                    <path d="M25 80 Q45 40 65 80 Q45 120 25 80" className="ill-pulse-wave ill-wave-2" />
                </svg>
            );
        case "02":
            return (
                <svg className="project-ill" viewBox="0 0 200 200" style={{ width: '80%', height: 'auto', stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                    {/* Background Grid */}
                    <path d="M20 50 L180 50 M20 100 L180 100 M20 150 L180 150 M50 20 L50 180 M100 20 L100 180 M150 20 L150 180" stroke="#1a1a1a" strokeOpacity="0.05" strokeWidth="1" />

                    {/* Paths */}
                    <g className="ill-workflow-paths">
                        <path d="M50 100 C 65 100, 70 55, 85 55" className="ill-path-line" />
                        <path d="M50 100 C 65 100, 70 145, 85 145" className="ill-path-line" />
                        <path d="M115 55 C 130 55, 135 100, 150 100" className="ill-path-line" />
                        <path d="M115 145 C 130 145, 135 100, 150 100" className="ill-path-line" />
                    </g>

                    {/* Nodes */}
                    <g className="ill-workflow-nodes">
                        <rect x="25" y="85" width="25" height="25" rx="5" className="ill-node" fill="currentColor" fillOpacity="0.1" />
                        <rect x="90" y="40" width="25" height="25" rx="5" className="ill-node" fill="currentColor" fillOpacity="0.1" />
                        <rect x="90" y="130" width="25" height="25" rx="5" className="ill-node" fill="currentColor" fillOpacity="0.1" />
                        <rect x="150" y="85" width="25" height="25" rx="5" className="ill-node ill-node-accent" fill="currentColor" fillOpacity="0.1" />
                    </g>

                    {/* Data Packets */}
                    <circle r="3" fill="currentColor" className="ill-data-packet ill-p-1" />
                    <circle r="3" fill="currentColor" className="ill-data-packet ill-p-2" />
                </svg>
            );
        case "03":
            return (
                <svg className="project-ill" viewBox="0 0 200 200" style={{ width: '70%', height: 'auto', stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                    {/* Isometric Container/Cube */}
                    <g className="ill-isometric-cube" strokeLinejoin="round">
                        <path d="M100 60 L150 85 L100 110 L50 85 Z" className="ill-cube-top" fill="currentColor" fillOpacity="0.03" />
                        <path d="M50 85 L100 110 L100 150 L50 125 Z" className="ill-cube-left" fill="currentColor" fillOpacity="0.07" />
                        <path d="M150 85 L100 110 L100 150 L150 125 Z" className="ill-cube-right" fill="currentColor" fillOpacity="0.1" />
                    </g>

                    {/* Floating Code Blocks emerging from container */}
                    <g className="ill-floating-blocks">
                        <rect x="85" y="35" width="30" height="10" rx="2" className="ill-code-block ill-b-1" />
                        <rect x="75" y="55" width="50" height="10" rx="2" className="ill-code-block ill-b-2" />

                        {/* Code syntax abstraction */}
                        <path d="M88 40 L112 40" className="ill-syntax-line" />
                        <path d="M78 60 L105 60" className="ill-syntax-line" />
                        <circle cx="115" cy="60" r="1.5" fill="currentColor" />
                    </g>
                </svg>
            );
        default:
            return null;
    }
}

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".projects .section__label",
                { opacity: 0, x: -20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            );

            gsap.fromTo(
                ".projects .section__title",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    },
                }
            );

            gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section projects" id="projects">
            <div className="section__bg-text">WORK</div>
            <div className="section__label">Selected Projects</div>
            <h2 className="section__title">
                Things I&apos;ve built<br />and shipped.
            </h2>

            <div className="projects__grid">
                {projects.map((project) => (
                    <div key={project.number} className="project-card">
                        <div className="project-card__info">
                            <div className="project-card__number">{project.number}</div>
                            <h3 className="project-card__title">{project.title}</h3>
                            <p className="project-card__desc">{project.description}</p>
                            <div className="project-card__tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="project-card__tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-card__link"
                            >
                                View on GitHub{" "}
                                <span className="project-card__link-arrow">→</span>
                            </a>
                        </div>

                        <div className="project-card__visual">
                            <div className="project-card__visual-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                                <ProjectIllustration number={project.number} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
