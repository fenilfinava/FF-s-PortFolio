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
    {
        number: "03",
        title: "Krushi Sarathi (SIH)",
        description:
            "An AI-powered digital assistant for Indian farmers built for Smart India Hackathon. Features multilingual voice support, crop disease detection via Gemini AI, smart crop advisory, and automated farming alerts.",
        tags: ["Next.js", "React", "Supabase", "Gemini AI", "Tailwind CSS"],
        github: "https://github.com/fenilfinava/SIH.git",
        live: "",
        icon: "🌾",
        note: "",
        ssip: false,
    },
];

import Image from "next/image";

function ProjectIllustration({ number }: { number: string }) {
    switch (number) {
        case "01":
            return (
                <Image 
                    src="/pathfinder.jpg" 
                    alt="PathFinder Bot" 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="project-image"
                />
            );
        case "02":
            return (
                <Image 
                    src="/ssip.png" 
                    alt="Hypertension Wristband SSIP" 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="project-image"
                />
            );
        case "03":
            return (
                <Image 
                    src="/krushi-sarathi.jpg" 
                    alt="Krushi Sarathi SIH" 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="project-image"
                />
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
