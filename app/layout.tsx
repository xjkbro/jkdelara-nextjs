"use client";
import '../styles/globals.css'
import '../styles/custom.css'
import Navigation from '../components/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isDark, setIsDark] = useState(true)

    return (
        <html lang="en">
            {/*
                <head /> will contain the components returned by the nearest parent
                head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
            */}
            <head />
            <motion.body className={isDark ? "w-2/3 mx-auto bg-first text-fifth" : "w-2/3 mx-auto bg-fifth text-first"}>
                <Navigation isDark={isDark} setIsDark={setIsDark} />
                {children}
            </motion.body>
        </html>
    )
}
