"use client"
import EXIF from 'exif-js';
import { useState, useEffect} from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function ImageModal({art, i}) {
    const [modalImgUrl, setModalImgUrl] = useState(null);
    const regex = /(<([^>]+)>)/ig;
    const showImgModal = (e, imgURL) => {
        setModalImgUrl(imgURL)
    }
    useEffect(() => {
        // console.log(modalImgUrl)
        // if(modalImgUrl != null){
        //     EXIF.getData(modalImgUrl, function() {
        //         const make = EXIF.getTag(modalImgUrl, 'make');
        //         console.log(make)
        //     })
        // }
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
                            className="fixed top-0 left-0 z-10 flex items-center justify-center object-contain w-full h-full bg-black/70"
                            onClick={()=> setModalImgUrl(null)}
                            >
                            <motion.div 
                                initial={{ opacity: 0, translateY: 50 }}
                                animate={{opacity:1, translateY:0}}
                                transition={{duration: 0.2, delay: 0.1}}
                                className=" flex flex-col justify-center items-center w-[90%] md:w-fit md:h-[85%]"
                                onClick={()=> setModalImgUrl(null)} 
                                >
                                <Image src={modalImgUrl} alt={"artbyjkd "+art?.attributes?.summary?.replace(regex,'')} className="!h-[95%]"  width={1000} height={1000} quality={100} />
                                <div className="h-8">
                                    {/* EXIF DATA DISPLAY */}
                                </div>
                            </motion.div>
                        </motion.div>
                    // </div>
                   
                ) : (
                    <></>
                )
            }
            <motion.div
                initial={{ opacity: 0, translateY: 50 }}
                animate={{opacity:1, translateY:0}}
                transition={{duration: 0.2, delay: i*0.1}}
                className="w-full h-full"
                >
                <Image src={art?.attributes?.photograph?.data?.attributes?.url} alt={"artbyjkd "+art?.attributes?.summary?.replace(regex,'')} width={300} height={300} className="hover:cursor-pointer" onClick={(e) => showImgModal(e, art?.attributes?.photograph?.data?.attributes?.url )} />
            </motion.div>
        </AnimatePresence>
    )
}