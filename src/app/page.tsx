"use client";

import { useState, useCallback } from "react";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    const handlePreloaderComplete = useCallback(() => {
        setIsLoading(false);
    }, []);

    return (
        <>
            {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
            <CustomCursor />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
