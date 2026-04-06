"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);
    const taglineRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const socialsRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Split name into chars and animate
            const nameEl = nameRef.current;
            if (!nameEl) return;

            const chars = nameEl.querySelectorAll(".hero__name-char");

            const tl = gsap.timeline({ delay: 2.2 });

            tl.to(labelRef.current, {
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
            })
                .to(
                    chars,
                    {
                        y: 0,
                        duration: 0.8,
                        stagger: 0.03,
                        ease: "power3.out",
                    },
                    "-=0.3"
                )
                .to(
                    taglineRef.current,
                    {
                        opacity: 1,
                        duration: 0.6,
                        ease: "power2.out",
                    },
                    "-=0.3"
                )
                .to(
                    ctaRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out",
                    },
                    "-=0.2"
                )
                .to(
                    socialsRef.current?.children ? Array.from(socialsRef.current.children) : [],
                    {
                        opacity: 1,
                        duration: 0.4,
                        stagger: 0.1,
                        ease: "power2.out",
                    },
                    "-=0.4"
                )
                .to(
                    scrollRef.current,
                    {
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.out",
                    },
                    "-=0.2"
                );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const firstName = "FENIL";
    const lastName = "FINAVA";

    const scrollToProjects = () => {
        const el = document.getElementById("projects");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section ref={heroRef} className="hero" id="hero">
            {/* Background grid lines */}
            <div className="hero__bg-lines">
                {[20, 40, 60, 80].map((p) => (
                    <div
                        key={`h-${p}`}
                        className="hero__bg-line hero__bg-line--h"
                        style={{ top: `${p}%` }}
                    />
                ))}
                {[20, 40, 60, 80].map((p) => (
                    <div
                        key={`v-${p}`}
                        className="hero__bg-line hero__bg-line--v"
                        style={{ left: `${p}%` }}
                    />
                ))}
            </div>

            <div ref={labelRef} className="hero__label">
                Programming Enthusiast × Aspiring Developer
            </div>

            <h1 ref={nameRef} className="hero__name">
                <span className="hero__name-line">
                    {firstName.split("").map((char, i) => (
                        <span key={`f-${i}`} className="hero__name-char">
                            {char}
                        </span>
                    ))}
                </span>
                <span className="hero__name-line">
                    {lastName.split("").map((char, i) => (
                        <span key={`l-${i}`} className="hero__name-char">
                            {char}
                        </span>
                    ))}
                </span>
            </h1>

            <p ref={taglineRef} className="hero__tagline">
                Learning today, building tomorrow.
            </p>

            <div ref={ctaRef} className="hero__cta" style={{ opacity: 0, transform: "translateY(20px)" }}>
                <button className="hero__cta-btn" onClick={scrollToProjects}>
                    View My Work →
                </button>
            </div>

            <div ref={socialsRef} className="hero__socials">
                <a
                    href="https://github.com/fenilfinava"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero__social-link"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/fenil-finava-33b326374"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero__social-link"
                >
                    LinkedIn
                </a>
                <a
                    href="mailto:fenilfinava05@gmail.com"
                    className="hero__social-link"
                >
                    Email
                </a>
            </div>

            <div ref={scrollRef} className="hero__scroll-indicator">
                <span className="hero__scroll-text">Scroll</span>
                <div className="hero__scroll-line" />
            </div>
        </section>
    );
}
