"use client"
import { motion } from "framer-motion";

export default function ServiceBlock() {
  return (
        <>
            <div
                
                className="z-[5] flex flex-col items-center mx-auto md:justify-between h-fit py-12 px-8 lg:flex-row bg-fifth dark:bg-second"
            >
                <motion.div 
                    initial={{ opacity: 0, translateY: 10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: 50 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-wrap items-center justify-between mx-auto md:w-3/4"
                >
                    <div className="order-2 w-full md:w-1/2 md:order-1">
                        <h3 className="text-[2rem] md:text-[3rem] font-black">What</h3>
                    </div>
                    <div className="order-1 hidden w-full md:w-96 md:order-2 md:block">
                        
                    </div>
                </motion.div>
            </div>
        </>
    );
}
