"use client"
import { useState, useEffect} from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function ImageModal({art}) {
    const [modalImgUrl, setModalImgUrl] = useState(null);
    const regex = /(<([^>]+)>)/ig;
    const showImgModal = (e) => {
        setModalImgUrl(e.target.src)
    }
    useEffect(() => {
        // console.log(modalImgUrl)
    }, [modalImgUrl]);
    return (
        <AnimatePresence>
            {
                (modalImgUrl) ? (
                    // <div className="w-full h-full">
                         <motion.div
                            initial={{ opacity: 0 }}
                            animate={{opacity:1}}
                            transition={{duration: 0.3}}
                            className="w-full h-full flex justify-center items-center bg-black/70 left-0 top-0 fixed object-contain z-10"
                            onClick={()=> setModalImgUrl(null)}
                            >
                            <motion.div 
                                initial={{ opacity: 0, translateY: 50 }}
                                animate={{opacity:1, translateY:0}}
                                transition={{duration: 0.2, delay: 0.1}}
                                className=" flex justify-center align-center w-[90%] md:w-fit md:h-[85%]"
                                onClick={()=> setModalImgUrl(null)} 
                                >
                                <Image src={modalImgUrl} alt={"artbyjkd "+art?.attributes?.summary?.replace(regex,'')} className="!h-full"  width={1000} height={1000} />
                            </motion.div>
                        </motion.div>
                    // </div>
                   
                ) : (
                    <></>
                )
            }
            <Image src={art?.attributes?.photograph?.data?.attributes?.url} alt={"artbyjkd "+art?.attributes?.summary?.replace(regex,'')} width={300} height={300} className="hover:cursor-pointer" onClick={showImgModal} />
        </AnimatePresence>
    )
}