import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
    title: "Fenil Finava — Programming Enthusiast & Aspiring Developer",
    description:
        "Portfolio of Fenil Finava — 1st year Computer Science and Engineering student at CHARUSAT. Building autonomous robots, full-stack web platforms, and embedded systems. Learning today, building tomorrow.",
    keywords: [
        "Fenil Finava",
        "Programming Enthusiast",
        "Aspiring Developer",
        "Portfolio",
        "CHARUSAT",
        "Arduino",
        "Next.js",
        "EduTrack",
    ],
    authors: [{ name: "Fenil Finava" }],
    openGraph: {
        title: "Fenil Finava — Programming Enthusiast & Aspiring Developer",
        description:
            "Learning today, building tomorrow. Building robots, web platforms, and embedded systems.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
