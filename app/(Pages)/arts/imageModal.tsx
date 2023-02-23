"use client"
import EXIF from 'exif-js';
import { useState, useEffect} from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import useSWR from 'swr';
const toBase64 = (str: string) => {
    return typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
  };
  
  export const createSvgShimmer = (width: number, height: number): string => {
    const shimmer = `
          <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                  <linearGradient id="g">
                      <stop stop-color="#333" offset="20%" />
                      <stop stop-color="#222" offset="50%" />
                      <stop stop-color="#333" offset="70%" />
                  </linearGradient>
              </defs>
              <rect width="${width}" height="${height}" fill="#333" />
              <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
              <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite" />
          </svg>
      `;
  
    return `data:image/svg+xml;base64,${toBase64(shimmer)}`;
  };

  

export default function ImageModal({art, i}) {
    // const [modalImgUrl, setModalImgUrl] = useState(null);
    const regex = /(<([^>]+)>)/ig;
    
    const [shouldFetch, setShouldFetch] = useState(false);
    const [fetchID, setfetchID] = useState(0);
    const fetcher = (url) => fetch(url).then(res => res.json())
    const { data } = useSWR(!shouldFetch && fetchID ? null : `https://cms.jsondelara.com/api/photos/${fetchID}?populate[photograph][fields][0]=url`, fetcher);
    console.log('====================================');
    console.log("data", data);
    console.log('====================================');
    function handleClick(e, id) {
        console.log(id)
        setfetchID(id)
        setShouldFetch(true);
    }
    useEffect(()=>{
        console.log('====================================');
        console.log(fetchID);
        console.log(shouldFetch);
        console.log('====================================');
    },[fetchID,shouldFetch])


    // const showImgModal = (e, id) => {
    //     // Add these lines
    //     const { data, error } = useSWR('https://cms.jsondelara.com/api/photo/'+ id + '?populate[photograph][fields][0]=url', fetcher)
    //     if (error) return <div>Failed to load</div>
    //     if (!data) return <div>Loading...</div>
    //     setModalImgUrl(data.data?.attributes?.photograph?.data?.attributes?.url )

    // }
    // useEffect(() => {
        // console.log(modalImgUrl)
        // if(modalImgUrl != null){
        //     EXIF.getData(modalImgUrl, function() {
        //         const make = EXIF.getTag(modalImgUrl, 'make');
        //         console.log(make)
        //     })
        // }
    // }, [modalImgUrl]);
    
    return (
        <AnimatePresence>
            {
                (shouldFetch) ? (
                    // <div className="w-full h-full">
                         <motion.div
                            initial={{ opacity: 0 }}
                            animate={{opacity:1}}
                            transition={{duration: 0.3}}
                            className="fixed top-0 left-0 z-10 flex items-center justify-center object-contain w-full h-full bg-black/70"
                            onClick={()=> setShouldFetch(false)}
                            >
                            <motion.div 
                                initial={{ opacity: 0, translateY: 50 }}
                                animate={{opacity:1, translateY:0}}
                                transition={{duration: 0.2, delay: 0.1}}
                                className=" flex flex-col justify-center items-center w-[90%] md:w-fit"
                                onClick={()=> setShouldFetch(false)} 
                                >
                                   {(data) ? 
                                    <>
                                        <Image src={data.data?.attributes?.photograph?.data?.attributes?.url} alt={"artbyjkd "+art?.attributes?.summary?.replace(regex,'')} className="!h-[95%]"  width={1000} height={1000} quality={100}  />
                                        <div className="h-8">
                                            {/* EXIF DATA DISPLAY */}
                                        </div>
                                    </> : 
                                    <> 
                                        <Image alt="Loading..." src="/spinner.svg" width={100} height={100} />
                                    </>}
                            </motion.div>
                        </motion.div>
                    // </div>
                   
                ) : (<></>)
            }
            <motion.div
                initial={{ opacity: 0, translateY: 50 }}
                animate={{opacity:1, translateY:0}}
                transition={{duration: 0.2, delay: i*0.1}}
                className="w-full h-full"
                >
                <Image src={art?.attributes?.photograph?.data?.attributes?.url} alt={"artbyjkd "+art?.attributes?.summary?.replace(regex,'')} width={300} height={300} className="hover:cursor-pointer" onClick={(e) => handleClick(e, art?.id)} />
            </motion.div>
        </AnimatePresence>
    )
}