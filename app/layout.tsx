"use client";
import '../styles/globals.css'
import '../styles/custom.css'
import Navigation from '../components/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Footer from "../components/footer"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    
    /* ==== Dark Mode Set Up ===== */
    let boolDark = true
    const [isDark, setIsDark] = useState(boolDark)
    // const [boolDark, setBoolDark] = useState()
    // console.log("Start isDark:", isDark)
    useEffect(()=>{
        const storedDarkMode = localStorage.getItem("DARK_MODE");
        (storedDarkMode == "false") ? boolDark = false : boolDark = true;
        localStorage.setItem("DARK_MODE", String(boolDark));
        // console.log("1 boolDark: ",  boolDark)
        setIsDark(boolDark);
    },[])
    useEffect(() => {
        // console.log("2 isDark: ", isDark)
        localStorage.setItem("DARK_MODE", String(isDark));
    }, [isDark]);
    
    /* =========================== */
    const [overlay, setOverlay] = useState(false)

    return (
        <html lang="en"
>
            {/*
                <head /> will contain the components returned by the nearest parent
                head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
            */}
            <head />
            <AnimatePresence>
                <motion.body
                 className={isDark ? "dark w-[90vw] md:w-2/3 mx-auto bg-first text-fifth" : "w-[90vw] md:w-2/3 mx-auto bg-fifth text-first"}>
                    <Navigation isDark={isDark} setIsDark={setIsDark} overlay={overlay} setOverlay={setOverlay} />
                    {children}
                    <Footer />
                </motion.body>
            </AnimatePresence>
        </html>
    )
}
