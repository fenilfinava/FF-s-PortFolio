"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const monogramRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const taglineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                gsap.to(preloaderRef.current, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: "power4.inOut",
                    onComplete,
                });
            },
        });

        tl.to(monogramRef.current, {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
        })
            .to(lineRef.current, {
                scaleX: 1,
                duration: 0.5,
                ease: "power2.inOut",
            })
            .to(taglineRef.current, {
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
            })
            .to({}, { duration: 0.5 });
    }, [onComplete]);

    return (
        <div ref={preloaderRef} className="preloader">
            <div ref={monogramRef} className="preloader__monogram">
                FF
            </div>
            <div ref={lineRef} className="preloader__line" />
            <div ref={taglineRef} className="preloader__tagline">
                Programming Enthusiast
            </div>
        </div>
    );
}
