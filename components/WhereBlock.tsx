"use client";
import { motion, Variants } from "framer-motion";
export default function WhereBlock() {
    return (
    <motion.div className="flex items-center justify-center py-16 overflow-hidden h-fit md:overflow-visible w-[90vw] md:w-2/3 mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-[100px_minmax(900px,_1fr)_100px] mx-auto text-center align-middle">
            <div className="order-2 w-full md:w-1/2 md:order-1">
                <h3 className="text-[2rem] md:text-[3rem] font-black">Where</h3>
            </div>
        </div>
    </motion.div>
  );
}
