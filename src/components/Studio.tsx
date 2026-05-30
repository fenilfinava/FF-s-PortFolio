"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Studio() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Label & title animations
            gsap.fromTo(
                ".studio .section__label",
                { opacity: 0, x: -20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none none",
                    },
                }
            );

            gsap.fromTo(
                ".studio .section__title",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Intro text animation
            gsap.fromTo(
                ".studio__desc, .studio__tagline",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".studio__desc",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Services list stagger animation
            gsap.fromTo(
                ".studio__service-card",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".studio__services",
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Visual card entry animation
            gsap.fromTo(
                ".studio__visual",
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: ".studio__visual",
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <section ref={sectionRef} className="section studio" id="studio">
            <div className="section__bg-text">STUDIO</div>

            <div className="studio__content">
                <div className="section__label">My Startup</div>
                <h2 className="section__title">
                    JK Dev Studio.<br />Your Vision. Our Code.
                </h2>

                <div className="studio__tagline">
                    Crafting Modern Web Experiences
                </div>
                <p className="studio__desc">
                    I recently launched <strong>JK Dev Studio</strong>, a freelance web development startup designed to build high-performance, full-stack, and visually gorgeous web solutions. From custom designs to solid engineering and reliable deployment — we handle it all.
                </p>

                <div className="studio__services">
                    <div className="studio__service-card">
                        <span className="studio__service-icon">🎨</span>
                        <h3 className="studio__service-title">Design</h3>
                        <p className="studio__service-desc">
                            Modern UI/UX design with premium layouts, typography, and vibrant gradients.
                        </p>
                    </div>
                    <div className="studio__service-card">
                        <span className="studio__service-icon">💻</span>
                        <h3 className="studio__service-title">Develop</h3>
                        <p className="studio__service-desc">
                            Clean, optimized full-stack applications built using React, Next.js, and modern backends.
                        </p>
                    </div>
                    <div className="studio__service-card">
                        <span className="studio__service-icon">🚀</span>
                        <h3 className="studio__service-title">Deploy</h3>
                        <p className="studio__service-desc">
                            Fast hosting setups, analytics, custom domain configurations, and SEO optimizations.
                        </p>
                    </div>
                </div>

                <div className="studio__ctas">
                    <a
                        href="https://wa.me/917984945531"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="studio__cta-btn studio__cta-btn--primary"
                    >
                        💬 Hire on WhatsApp
                    </a>
                    <a
                        href="mailto:fenilfinava05@gmail.com"
                        className="studio__cta-btn studio__cta-btn--secondary"
                    >
                        ✉ Email Studio
                    </a>
                </div>
            </div>

            <div className="studio__visual">
                <div className="studio__card-wrapper" onClick={handleCardClick}>
                    <div className={`studio__card-3d ${isFlipped ? "flipped" : ""}`}>
                        <div className="studio__card-face studio__card-face--front">
                            <div className="studio__card-glare"></div>
                        </div>
                        <div className="studio__card-face studio__card-face--back">
                            <div className="studio__card-glare"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
