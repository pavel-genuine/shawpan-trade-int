
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion"

const VideoPromo = () => {
    return (
        <div className="bg-bg lg:h-[80vh] h-[40vh] ">
            <div class="relative ">
                <svg className="lg:mb-28 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0f172a" fill-opacity="1" d="M0,32L1440,192L1440,0L0,0Z"></path></svg>

                <div class="absolute lg:top-10 lg:left-[15vw] top-8">
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: .5, scale: .7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .7, delay: 0 }} className="flex flex-col justify-center items-center">

                        <video className=' rounded border-2  lg:h-8/12 lg:w-10/12 w-11/12 h-11/12  ' src={'https://www.mgtstoneco.com/wp/wp-content/uploads/2022/02/royal-black-marble.mp4'} autoPlay loop muted></video>
                        <div>
                            <h1 className="lg:mt-5 mt-4 text-center mx-5 lg:text-3xl text-[white] font-semibold">
                                Indulge into the world of craftsmanship and quality .
                            </h1>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default VideoPromo;
