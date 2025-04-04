import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { animated } from "@react-spring/web";
import CountUp from "react-countup";
import { useSelector } from 'react-redux'; 

import texts from './Datas/paneuData.json';

const Panneau = () => {
    const [startAnimation, setStartAnimation] = useState(false);

    const { ref} = useInView({
        triggerOnce: true,
        threshold: 1.0,
        onChange: (inView) => {
            if (inView) setStartAnimation(true);
        },
    });

    
    const { language } = useSelector((state) => state.presntion); 

    const currentText = texts[language];  
    return (
        <section
            ref={ref}
            className="lg:w-[90%] w-[94%] p-2 py-7 md:p-10 md:py-16 rounded-3xl md:rounded-[40px] bg-white/20 mb-10 border border-white/20 md:-mt-40 lg:-mt-32 -mt-44 blurey blurey backdrop-blur-xl flex justify-center items-center z-10"
        >
            <animated.div className="w-full flex justify-center">
                {/* Élèves Inscrits */}
                <div className="flex-1 md:m-2 flex justify-center items-center flex-col border border-transparent md:border-r border-r-neutral-900/10">
                    <p className="text-neutral-900/55 mb-4">{currentText.students}</p>
                    <b className="sm:text-3xl md:text-5xl xl:text-7xl text-2xl text-blue-500 text-center">
                        {startAnimation ? <CountUp className="font-bold" start={0} end={parseInt(currentText.studentsCount)} duration={2.5} /> : 0}
                    </b>
                    <p className="text-neutral-900/55 mt-4 xl:text-xl md:text-lg tiny">{currentText.studentsText}</p>
                </div>

                {/* Taux de Réussite */}
                <div className="flex-1 md:m-2 flex justify-center items-center flex-col border-transparent border-r border-r-neutral-900/10">
                    <p className="text-neutral-900/55 pb-4">{currentText.successRate}</p>
                    <b className="sm:text-3xl md:text-5xl text-2xl xl:text-7xl text-red-500 text-center tex">
                        {startAnimation ? <CountUp className="font-bold" start={0} end={100} duration={2.5} suffix="%" /> : <b className="">0</b>}
                    </b>
                    <p className="text-neutral-900/55 mt-4 xl:text-xl md:text-lg tiny">{currentText.successRateText}</p>
                </div>

                {/* Langues enseignées */}
                <div className="flex-1 md:m-2 flex justify-center items-center flex-col border border-transparent">
                    <p className="text-neutral-900/55 pb-4">{currentText.languages}</p>
                    <b className="sm:text-3xl md:text-5xl text-2xl xl:text-7xl text-blue-500 text-center">
                        {startAnimation ? <CountUp className="font-bold" start={0} end={parseInt(currentText.languagesCount)} duration={2.5} /> : 0}
                        <sup>
                            <b>+1</b>
                        </sup>
                    </b>
                    <p className="text-neutral-900/55 mt-4 md:text-lg xl:text-xl tiny">{currentText.languagesText}</p>
                </div>
            </animated.div>
        </section>
    );
};

export default Panneau;
