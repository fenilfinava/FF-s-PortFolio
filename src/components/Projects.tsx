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
        github: "https://github.com/fenilfinava/PathFinder-Bot.git",
        live: "",
        icon: "🤖",
        note: "",
        ssip: false,
    },
    {
        number: "02",
        title: "Hypertension Wristband",
        description:
            "Built a smartwatch-style wearable prototype that estimates Blood Pressure (SBP & DBP) and Heart Rate using PPG optical sensing — no cuff required. Integrated MAX30101 sensor, MAX32664D signal hub, and ESP32 microcontroller with Bluetooth wireless transmission to mobile devices.",
        tags: ["ESP32", "Arduino", "C++", "MAX30101", "PPG Sensing", "Bluetooth", "Embedded Systems"],
        github: "https://github.com/fenilfinava/Hypertension-Wristband",
        live: "",
        icon: "🩺",
        note: "",
        ssip: true,
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
                    {/* Wristband straps */}
                    <rect x="75" y="155" width="50" height="18" rx="5" fill="currentColor" fillOpacity="0.08" />
                    <rect x="75" y="27" width="50" height="18" rx="5" fill="currentColor" fillOpacity="0.08" />
                    {/* Strap holes */}
                    <circle cx="88" cy="164" r="2" fill="currentColor" fillOpacity="0.3" />
                    <circle cx="100" cy="164" r="2" fill="currentColor" fillOpacity="0.3" />
                    <circle cx="112" cy="164" r="2" fill="currentColor" fillOpacity="0.3" />

                    {/* Watch body */}
                    <rect x="58" y="45" width="84" height="110" rx="18" fill="currentColor" fillOpacity="0.06" />

                    {/* Watch screen inner */}
                    <rect x="66" y="53" width="68" height="94" rx="12" fill="currentColor" fillOpacity="0.04" />

                    {/* Heart rate icon */}
                    <path d="M100 74 C100 74 92 67 88 72 C84 77 88 82 100 90 C112 82 116 77 112 72 C108 67 100 74 100 74 Z" fill="currentColor" fillOpacity="0.6" stroke="none" className="ill-pulse-circle" />

                    {/* PPG / Pulse waveform */}
                    <polyline
                        points="68,115 76,115 80,105 84,125 88,105 94,115 100,115 104,108 108,122 112,108 116,115 132,115"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeOpacity="0.5"
                    />

                    {/* BP Readings */}
                    <text x="100" y="102" textAnchor="middle" fontSize="8" fill="currentColor" fillOpacity="0.7" stroke="none">120 / 80</text>
                    <text x="100" y="111" textAnchor="middle" fontSize="5" fill="currentColor" fillOpacity="0.45" stroke="none">mmHg</text>

                    {/* Bluetooth signal waves */}
                    <path d="M148 88 Q155 100 148 112" strokeDasharray="3,2" className="ill-pulse-wave ill-wave-1" />
                    <path d="M153 82 Q163 100 153 118" strokeDasharray="3,2" className="ill-pulse-wave ill-wave-2" />

                    {/* Crown / side button */}
                    <rect x="140" y="92" width="6" height="16" rx="3" fill="currentColor" fillOpacity="0.2" />
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
                    <div key={project.number} className={`project-card${project.ssip ? ' project-card--ssip' : ''}`}>
                        <div className="project-card__info">
                            <div className="project-card__number">{project.number}</div>
                            {project.ssip && (
                                <div className="project-card__ssip-badge">
                                    <span className="ssip-badge__dot" />
                                    SSIP Project
                                </div>
                            )}
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
