import React, { useEffect, useState } from 'react';
// import './slider.scss';


export const Slider = ({ size, onItem }) => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        // let i = 0
        // for (let i = 0; i < 4; i++) {

        //     // if (i>3) {
        //     //     i=0
        //     // }
        //     setTimeout(() => {
        //         setActive(i);
        //         onItem(i);
        //         console.log(i, 'i');

        //     }, i * 4000)
        
        // }


        function cycle(index) {
            setTimeout(function() {
        
                index++; 

                setActive(index);
                onItem(index);
        
                if (index >= 3) {
                    index = -1;
                }
        
                cycle(index); 
        
            }, 4000);
        }
        
        cycle(-1);


    }, [])

    return (
        <div className="slider" style={{ top: `calc(50% - ${size * 30}px)` }}>
            {
                [...Array(size)].map((_, index) => {
                    return (
                        <div
                            key={index}
                            className={`slider__item ${index === active ? 'slider__item-active' : ''}`}
                            onClick={() => {
                                setActive(index);
                                onItem(index);
                            }}
                        >
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Slider