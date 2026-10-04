"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        let lastScrollY = 0;

        // Show navbar after a short delay
        gsap.to(nav, { y: 0, duration: 0.6, delay: 2.5, ease: "power3.out" });
        nav.classList.add("visible");

        const onScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY > 100) {
                if (scrollY < lastScrollY) {
                    nav.classList.add("visible");
                    gsap.to(nav, { y: 0, duration: 0.3, ease: "power2.out" });
                } else {
                    nav.classList.remove("visible");
                    gsap.to(nav, { y: -100, duration: 0.3, ease: "power2.in" });
                }
            } else {
                nav.classList.add("visible");
                gsap.to(nav, { y: 0, duration: 0.3, ease: "power2.out" });
            }

            lastScrollY = scrollY;
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav ref={navRef} className="navbar">
            <div className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                F<span>.</span>F
            </div>
            <ul className="navbar__links">
                {["about", "skills", "projects", "experience", "contact"].map(
                    (section) => (
                        <li
                            key={section}
                            className="navbar__link"
                            onClick={() => scrollTo(section)}
                        >
                            {section === "experience" ? "Journey" : section.charAt(0).toUpperCase() + section.slice(1)}
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
}
