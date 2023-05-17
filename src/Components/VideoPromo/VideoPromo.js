
import React from "react";
import Link from "next/link";

const VideoPromo = () => {
    return (
        <div className="bg-[grey] lg:h-[90vh] h-[35vh] ">
            <div class="relative ">
                <svg className="lg:mb-28 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0f172a" fill-opacity="1" d="M0,32L1440,192L1440,0L0,0Z"></path></svg>

                <div class="absolute lg:top-14 top-5">
                    <div className="flex flex-col justify-center items-center">

                        <video className=' rounded-xl border-2  lg:h-8/12 lg:w-8/12 w-11/12 h-11/12 lg:ml-24 ' src={'https://www.mgtstoneco.com/wp/wp-content/uploads/2022/02/royal-black-marble.mp4'} autoPlay loop muted></video>
                        <div>
                            <h1 className="lg:mt-5 mt-2 text-center mx-5 lg:text-3xl text-[white] font-semibold">
                               Indulge into the world of craftsmanship and quality .
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoPromo;
