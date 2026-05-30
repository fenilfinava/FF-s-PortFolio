"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".contact__heading",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    },
                }
            );

            gsap.fromTo(
                ".contact__subtitle",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    },
                }
            );

            gsap.utils.toArray<HTMLElement>(".contact__link").forEach((el, i) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        delay: 0.3 + i * 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 60%",
                        },
                    }
                );
            });

            gsap.fromTo(
                ".contact__form",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    delay: 0.4,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".contact__form",
                        start: "top 85%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="contact" id="contact">
            <h2 className="contact__heading">
                Let&apos;s Work<br />
                <span>Together.</span>
            </h2>
            <p className="contact__subtitle">
                I&apos;m a 1st year CS student open to internships, collabs, and exciting projects.
                Got an idea? Let&apos;s build it together!
            </p>

            <div className="contact__links">
                <a
                    href="mailto:fenilfinava05@gmail.com"
                    className="contact__link"
                >
                    ✉ fenilfinava05@gmail.com
                </a>
                <a
                    href="https://github.com/fenilfinava"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__link"
                >
                    ⌨ GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/fenil-finava-33b326374"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__link"
                >
                    💼 LinkedIn
                </a>
            </div>

            <form
                className="contact__form"
                onSubmit={function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
                    e.preventDefault();

                    const formData = new FormData(e.currentTarget);
                    const nameInput = formData.get("name") as string;
                    const emailInput = formData.get("email") as string;
                    const messageInput = formData.get("message") as string;

                    const subject = encodeURIComponent(`Portfolio Inquiry from ${nameInput}`);
                    const body = encodeURIComponent(`Name: ${nameInput}\nEmail: ${emailInput}\n\nMessage:\n${messageInput}`);

                    window.location.href = `mailto:fenilfinava05@gmail.com?subject=${subject}&body=${body}`;
                }}
            >
                <input
                    name="name"
                    className="contact__input"
                    type="text"
                    placeholder="Your Name"
                    required
                />
                <input
                    name="email"
                    className="contact__input"
                    type="email"
                    placeholder="Your Email"
                    required
                />
                <textarea
                    name="message"
                    className="contact__textarea"
                    placeholder="Tell me about your project, internship, or collaboration idea..."
                    required
                />
                <button type="submit" className="contact__submit">
                    Send Message →
                </button>
            </form>
        </section>
    );
}
