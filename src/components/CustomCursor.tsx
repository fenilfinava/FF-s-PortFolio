"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;
        if (!cursor || !follower) return;

        const onMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out",
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.35,
                ease: "power2.out",
            });
        };

        const onMouseEnterHoverable = () => {
            follower.classList.add("hovering");
        };

        const onMouseLeaveHoverable = () => {
            follower.classList.remove("hovering");
        };

        window.addEventListener("mousemove", onMouseMove);

        const hoverables = document.querySelectorAll(
            "a, button, .project-card__visual, .skills__pill, .skills__category, .contact__link"
        );
        hoverables.forEach((el) => {
            el.addEventListener("mouseenter", onMouseEnterHoverable);
            el.addEventListener("mouseleave", onMouseLeaveHoverable);
        });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            hoverables.forEach((el) => {
                el.removeEventListener("mouseenter", onMouseEnterHoverable);
                el.removeEventListener("mouseleave", onMouseLeaveHoverable);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="cursor" />
            <div ref={followerRef} className="cursor-follower" />
        </>
    );
}
