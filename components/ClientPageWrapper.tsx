"use client";
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './navigation';
import Footer from './footer';

export default function ClientPageWrapper({children}) {
    /* ==== Dark Mode Set Up ===== */
    let boolDark = true
    const [isDark, setIsDark] = useState(boolDark)
    useEffect(()=>{
        const storedDarkMode = localStorage.getItem("DARK_MODE");
        (storedDarkMode == "false") ? boolDark = false : boolDark = true;
        localStorage.setItem("DARK_MODE", String(boolDark));
        setIsDark(boolDark);
    },[])
    useEffect(() => {
        localStorage.setItem("DARK_MODE", String(isDark));
    }, [isDark]);
    /* =========================== */
    const [overlay, setOverlay] = useState(false)
  return (
    <AnimatePresence>
        <motion.body className={isDark ? "dark w-[90vw] md:w-2/3 mx-auto bg-first text-fifth" : "w-[90vw] md:w-2/3 mx-auto bg-fifth text-first"}>
            <Navigation isDark={isDark} setIsDark={setIsDark} overlay={overlay} setOverlay={setOverlay} />
            {children}
            <Footer />
        </motion.body>
    </AnimatePresence>

  )
}
