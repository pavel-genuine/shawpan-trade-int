import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'
import granite from '../../assets/imgs/granite.jpg'
import granite2 from '../../assets/imgs/granite2.jpg'
import marble3 from '../../assets/imgs/marble3.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";



export const persons = [
    {
        img: granite2.src,
        title: "Stock of the finnest Granite",
        name: "Granite Minning in Itlay",
        },
    {
        img: granite.src,
        title: "Stock of the finnest Granite",
        name: "Granite Stock in Itlay",
    },
    {
        img: granite2.src,
        title: "Stock of the finnest Granite",
        name: "Granite Stock in Itlay",
    },
    {
        img: granite.src,
        title: "Stock of the finnest Granite",
        name: "Granite Stock in Itlay",
    },
    {
        img: granite2.src,
        title: "Stock of the finnest Granite",
        name: "Granite Stock in Itlay",
    },
    {
        img: granite.src,
        title: "Stock of the finnest Granite",
        name: "Granite Stock in Itlay",
    },
    {
        img: granite2.src,
        title: "Stock of the finnest Granite",
        name: "Granite Minning in Itlay",
    },
    {
        img: granite.src,
        title: "Stock of the finnest Granite",
        name: "Granite Stock in Itlay",
    },
];


function StripeSliderGranite() {
    const [activeItem, setActiveItem] = useState(5);
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
                <div className="w-[100vw] h-[85vh] py-[2vh] bg-bg ">
                    <ul
                        ref={wrapperRef}
                        className="group flex h-[70vh] flex-row gap-[1.5%]"
                    >
                        {persons.map((person, index) => (
                            <li
                                onClick={() => setActiveItem(index)}
                                aria-current={activeItem === index}
                                className={classNames(

                                    "relative cursor-pointer w-[8%]  first:w-[1%] last:w-[1%] [&[aria-current='true']]:w-[50%]",
                                    "[transition:width_var(--transition,200ms_ease-in)]",
                                    "before-block before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-bg",
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
                                            "inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:bg-bg  after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-bg absolute transition-opacity",
                                            activeItem === index ? "opacity-0 " : "opacity-60"
                                        )}
                                    />
                                    <div
                                        className={classNames(
                                            "left-2 top-8 md:left-8  w-[90%] text-center  transition-[transform,opacity] absolute p-0",
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

export default StripeSliderGranite
