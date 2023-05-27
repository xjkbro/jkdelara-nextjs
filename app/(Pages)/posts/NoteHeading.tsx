"use client";
import { noteCategories } from "@/constants/noteCategories";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
export default function NoteHeading() {
    const path = usePathname();
    console.log(path);
    if (path === "/posts") {
        return (
            <motion.div
                initial={{ opacity: 0, translateX: 50 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-end justify-between mb-4 "
            >
                <div className="md:min-h-[5.5rem]">
                    <h1 className="text-[2rem] font-bold">Notes</h1>
                    <p className="text-sm">
                        This a catalog of all my notes. Notes include developer,
                        food, and lifestyle writings.
                    </p>
                </div>
            </motion.div>
        );
    }
    //get string after /notes/
    const categoryId = path?.split("/posts/")[1];
    const category = noteCategories.find((cat) => cat.id === categoryId);
    if (category) {
        return (
            <motion.section
                initial={{ opacity: 0, translateX: 50 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-end justify-between mb-4"
            >
                <div className="md:min-h-[5.5rem]">
                    <h1 className="text-[2rem] font-bold">
                        {category.name.plural}
                    </h1>
                    <p className="text-sm">{category.description}</p>
                </div>
                {/* <div>{catInfo.meta.pagination.total} results found</div> */}
            </motion.section>
        );
    }
    return <></>;
}
