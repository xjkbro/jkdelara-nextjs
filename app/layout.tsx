import "../styles/build.css";
// import "../styles/global.css";
import "../styles/custom.css";
import ClientPageWrapper from "@/components/ClientPageWrapper";

import { meta } from "@/constants/meta";
import FramerBG from "@/components/FramerBG";
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
            <ClientPageWrapper>
                <main>
                    {children}
                    <FramerBG />
                </main>
            </ClientPageWrapper>
        </html>
    );
}
