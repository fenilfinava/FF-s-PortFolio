"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillRows = [
    ["C", "C++", "HTML", "CSS", "Arduino", "ESP32", "Git", "GitHub", "AI Tools", "Problem Solving", "Embedded Systems", "PID Control"],
    ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "Supabase", "PostgreSQL", "Tailwind CSS", "Zod", "Vercel", "Render"],
];

const categories = [
    {
        icon: "💻",
        title: "Programming",
        skills: ["C", "C++ (Basic)", "Problem Solving", "Data Structures"],
    },
    {
        icon: "🌐",
        title: "Web Development",
        skills: ["HTML", "CSS", "Next.js", "React", "TypeScript", "Node.js"],
    },
    {
        icon: "⚙️",
        title: "Hardware & Embedded",
        skills: ["Arduino", "ESP32", "IR Sensors", "PID Control", "Embedded Systems"],
    },
    {
        icon: "🛠️",
        title: "Tools & More",
        skills: ["Git", "GitHub", "AI Tools", "Supabase", "Vercel"],
    },
];

export default function Skills() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".skills .section__label",
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
                ".skills .section__title",
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

            gsap.utils.toArray<HTMLElement>(".skills__category").forEach((el, i) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: i * 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section skills" id="skills">
            <div className="section__bg-text">SKILLS</div>
            <div className="section__label">Tech Stack</div>
            <h2 className="section__title">
                Tools & technologies<br />I work with.
            </h2>

            {/* Marquee rows */}
            {skillRows.map((row, ri) => (
                <div key={ri} className="skills__marquee-wrap">
                    <div className={`skills__marquee ${ri === 1 ? "skills__marquee--reverse" : ""}`}>
                        {/* Double the items for seamless loop */}
                        {[...row, ...row].map((skill, i) => (
                            <div key={`${ri}-${i}`} className="skills__pill">
                                <span className="skills__pill-dot" />
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Category cards */}
            <div className="skills__categories">
                {categories.map((cat) => (
                    <div key={cat.title} className="skills__category">
                        <div className="skills__category-title">
                            <span className="skills__category-icon">{cat.icon}</span>
                            {cat.title}
                        </div>
                        <div className="skills__category-list">
                            {cat.skills.map((skill) => (
                                <span key={skill} className="skills__tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
