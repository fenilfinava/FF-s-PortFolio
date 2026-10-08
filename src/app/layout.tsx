import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.fenilfinava.me"),
    title: "Fenil Finava | Computer Engineering Student & Web Developer",
    description:
        "Portfolio of Fenil Finava, a 2nd-year Computer Science and Engineering student at CHARUSAT. Discover my projects in full-stack web development, embedded systems, and robotics.",
    keywords: [
        "Fenil Finava",
        "Fenil",
        "Finava",
        "Web Developer",
        "Computer Engineering Student",
        "Frontend Developer",
        "CHARUSAT",
        "Portfolio",
        "Next.js Developer",
        "React Developer",
        "Embedded Systems",
    ],
    authors: [{ name: "Fenil Finava", url: "https://www.fenilfinava.me" }],
    creator: "Fenil Finava",
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://www.fenilfinava.me/",
        title: "Fenil Finava | Aspiring Software Developer",
        description:
            "Learning today, building tomorrow. Explore my portfolio, web platforms, and embedded system projects.",
        siteName: "Fenil Finava's Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Fenil Finava | Web Developer & CSE Student",
        description:
            "Portfolio of Fenil Finava — 2nd-year CSE student building modern web platforms and hardware.",
    },
    alternates: {
        canonical: "https://www.fenilfinava.me/",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fenil Finava",
    "url": "https://www.fenilfinava.me",
    "jobTitle": "Computer Engineering Student & Aspiring Web Developer",
    "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "CHARUSAT University"
    },
    "sameAs": [
        "https://github.com/fenilfinava",
        "https://www.linkedin.com/in/fenil-finava-33b326374"
    ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body suppressHydrationWarning>
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
