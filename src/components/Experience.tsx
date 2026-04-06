"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        date: "2024 — 2029",
        role: "B.Tech Computer Science and Engineering",
        company: "CHARUSAT University",
        companyUrl: "https://charusat.ac.in",
        description:
            "Currently in 1st year, pursuing Computer Science and Engineering with a passion for software development, embedded systems, and emerging technologies. Dreaming big and building every day.",
    },
    {
        date: "2025",
        role: "Full-Stack Developer (Personal Project)",
        company: "EduTrack",
        companyUrl: "https://edu-track-umber.vercel.app",
        description:
            "Built EduTrack — a full-stack student project tracking platform with GitHub integration, role-based dashboards, and real-time monitoring. Deployed on Vercel with Supabase backend.",
    },
    {
        date: "2025",
        role: "Embedded Systems Developer (SSIP Project)",
        company: "BP Measurement Watch Using ESP32",
        companyUrl: "#",
        description:
            "Developing a wearable blood pressure measurement watch using ESP32. Selected for SSIP (Student Startup and Innovation Policy) — currently in progress.",
    },
];

export default function Experience() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".experience .section__label",
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
                ".experience .section__title",
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

            gsap.utils.toArray<HTMLElement>(".experience__item").forEach((item, i) => {
                gsap.to(item, {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    delay: i * 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section experience" id="experience">
            <div className="section__bg-text">EXP</div>
            <div className="section__label">Experience</div>
            <h2 className="section__title">
                My journey<br />so far.
            </h2>

            <div className="experience__timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience__item">
                        <div className="experience__date">{exp.date}</div>
                        <div className="experience__role">{exp.role}</div>
                        <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="experience__company"
                        >
                            {exp.company} ↗
                        </a>
                        <p className="experience__desc">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
