import "../styles/globals.css";
import "../styles/custom.css";
import ClientPageWrapper from "@/components/ClientPageWrapper";

import { meta } from "@/constants/meta";
import FramerBG from "@/components/FramerBG";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
export const metadata = {
    ...meta,
    title: {
        default: "JKDELARA",
        template: "%s | Jason-Kyle De Lara",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className=" antialiased scroll-smooth">
            <Script
                id="Adsense-id"
                data-ad-client={process.env.GOOGLE_ADS_KEY}
                async
                // strategy="beforeInteractive"
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            />
            <ClientPageWrapper>
                <main>
                    {children}
                    <FramerBG />
                </main>
            </ClientPageWrapper>
            <Analytics />
        </html>
    );
}
