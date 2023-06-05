import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'
import img1 from '../../assets/imgs/nut.jpg'
import img2 from '../../assets/Hero/pic.webp'
import { LazyLoadImage } from "react-lazy-load-image-component";



export const persons = [
   
    {
        img: "https://unsplash.com/photos/oifclaPX5oM/download?force=true&w=590&h=640",
        title: "Fresh Betel Nuts",
        name: "Amazing Quality",
    },
    {
        img:img1.src,
        title: "Fresh Betel Nuts",
        name: "Amazing Quality",
    },
    {
        img:img2.src,
        title: "Fresh Betel Nuts",
        name: "Amazing Quality",
    },
    {
        img:img1.src,
        title: "Fresh Betel Nuts",
        name: "Amazing Quality",
    },
   
    {
        img:'https://rehmonnya.org/wp-content/uploads/2022/12/betel-nut.jpg',
        title: "Fresh Betel Nuts",
        name: "Amazing Quality",
    },
    {
        img: 'https://rehmonnya.org/wp-content/uploads/2022/12/betel-nut.jpg',
        title: "Fresh Betel Nuts",
        name: "Amazing Quality",
    },
];


function StripeSliderBetelNut() {
    const [activeItem, setActiveItem] = useState(3);
    const wrapperRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (!wrapperRef.current) return;
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        wrapperRef.current.style.setProperty(
            "--transition",
            "600ms cubic-bezier(0.22, 0.61, 0.36, 1)"
        );

        timeoutRef.current = setTimeout(() => {
            wrapperRef.current?.style.removeProperty("--transition");
        }, 900);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [activeItem]);

    return (
        <motion.div
        viewport={{ once: true }}
        initial={{ opacity: .3, scale: .85}}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: .7, delay: 0 }}
        >
            <div className="flex h-full w-full items-center justify-center">
                <div className="md:w-[80vw] w-[100vw] py-[2vh] bg-navBg md:ml-[5vw] ">
                    <ul
                        ref={wrapperRef}
                        className="group flex h-[70vh] flex-row gap-[1.5%]"
                    >
                        {persons.map((person, index) => (
                            <li
                                onClick={() => setActiveItem(index)}
                                aria-current={activeItem === index}
                                className={classNames(

                                    "relative cursor-pointer md:w-[8%] w-[15%]   first:w-[1%] last:w-[1%] [&[aria-current='true']]:w-[60%]",
                                    "[transition:width_var(--transition,200ms_ease-in)]",
                                    "before-block before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-navBg",
                                    "[&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[7%] hover:w-[12%]",
                                    "first:pointer-events-none last:pointer-events-none [&_img]:first:opacity-0 [&_img]:last:opacity-0"
                                )}
                                key={person.name}
                            >
                                <div className={`relative  ${activeItem === index ? 'h-[70vh]' : 'h-[64vh] my-[3vh]'} w-full overflow-hidden rounded bg-[#c9c6c7] `}>
                                <LazyLoadImage
                                        className="absolute right-0 top-1/2 object-cover  -translate-y-1/2  grayscal left-1/2 h-[70vh] w-[100%] -translate-x-1/2"
                                        src={person.img}
                                        alt={person.name}
                                        width="590px"
                                        height="680px"
                                    />
                                    <div
                                        className={classNames(
                                            "inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:bg-navBg  after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-navBg absolute transition-opacity",
                                            activeItem === index ? "opacity-0 " : "opacity-60"
                                        )}
                                    />
                                    <div
                                        className={classNames(
                                            "left-2 top-8 md:left-8  w-[90%] text-center transition-[transform,opacity] absolute p-0",
                                            activeItem === index
                                                ? "translate-x-0 opacity-100"
                                                : "translate-x-4 opacity-0"
                                        )}
                                    >
                                        <p className="text-sm uppercase text-[white] md:text-lg ">
                                            {person.title}
                                        </p>
                                        <p className="text-lg font-bold md:text-4xl text-accent">{person.name}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>

    );
}

export default StripeSliderBetelNut
