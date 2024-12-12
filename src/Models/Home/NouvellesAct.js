import { faArrowRight, faBell, faCircleNodes, faGear, faGlobe} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react";
import lesServices from './Datas/services.json'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const NouvellesAct = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activestyle, setActiveStyle] = useState({text:'text-neutral-900/40 ',title:'text-neutral-900',image:''});
    const [startAnimation, setStartAnimation] = useState(false);

    const { ref, } = useInView({
        triggerOnce: false, // Allow the inView state to update when visibility changes
        threshold: 0.5, // Adjust threshold based on your needs
        onChange: (isInView) => {
            setStartAnimation(isInView); // Start or stop animation based on visibility
        },
    });

    const handleClick = (index) => {
        if (index===activeIndex) return;
        setActiveStyle({ title: 'text-neutral-100  opacity-0 translate-y-30',text: 'text-neutral-100  opacity-50 translate-y-20',image:'translate-y-72 scale-90 opacity-0 ' });
        setTimeout(() => {
            setActiveStyle({ title: 'text-neutral-900 text-base md:text-2xl opacity-1 ',text: 'text-neutral-900/40 opacity-1', image: 'scale-1 opacity-1 ' });
            setActiveIndex(index); 
        }, 200); 
    };
    
    useEffect(() => {
        if (!startAnimation) return; // Ensure animation starts only when `startAnimation` is true
    
        const interval = setInterval(() => {
            setActiveStyle({ title: 'text-neutral-100  opacity-0 translate-y-30',text: 'text-neutral-100  opacity-50 translate-y-20',image:'translate-y-72 scale-90 opacity-0 ' });
            setTimeout(() => {
                setActiveStyle({ title: 'text-neutral-900 text-base md:text-2xl opacity-1 ',text: 'text-neutral-900/40 opacity-1', image: 'scale-1 opacity-1 ' });
                setActiveIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));

            }, 200);
        }, 6000);
    
        return () => clearInterval(interval);
    }, [startAnimation]);

    const costumeAnimtion = (x=0,y=0,s=150,dm=15) =>{
        return {
            initial: { x: x,y: y },
            whileInView: { x: 0, y:0  },   
            transition: { type: "spring", stiffness: s, damping: dm },
        }
    }

    

    return (
        <div className="w-[90%] md:-scroll-my-10 lg:my-20  flex-col flex  justify-center  text-neutral-900">

            <div className="w-full  lg:w-full lg:ml-0 flex  flex-col lg:flex-row  items-center mb-10 ">
                <motion.div {...costumeAnimtion('-100%')} className="flex-1 lg:mr-[6%]  text-5xl md:text-[110px] lg:text-9xl  ">
                    <span className="flex">
                        <h1 className="font-normal flex-1 m-0 p-0 md:mr-4 md:mb-2"><b>VOTRE</b></h1>
                        <motion.span {...costumeAnimtion('-200%')} className=" text-center flex-1 flex items-center justify-center ">
                            <p className="bg-black/5 md:text-2xl text-[12px] md:py-6 py-3 w-full md:px-10 rounded-full font-semibold">SUIVEZ LEUR PROGRÈS</p>
                        </motion.span>
                    </span>
                    <h1 className="font-normal mb-2"><b>ÉCOLE À ÉTÉ</b></h1>
                    <h1 className="font-normal w-full md:tracking-wider lg:text-wide mb-2"><b>DIGITALISÉE</b></h1>

                    <span className="flex">
                        <span className="flex-1 flex items-center  justify-center overflow-hidden">
                            <motion.div {...costumeAnimtion('-100%')} className="md:pl-8 bg-blue-500 w-full rounded-full flex items-center justify-center md:px-4 md:py-4 px-1 py-3 ds cursor-pointer">
                                <p className="w-[85%] font-semibold md:text-2xl text-[12px] text-white">CONNECTEZ-NOUS</p>
                                <span className="h-full text-6xl rounded-full bg-white shadow-lg flex justify-center items-center overflow-hidden  mr-1 md:mr-0">
                                    <FontAwesomeIcon className="md:w-10 md:h-10 text-[12px]  rounded-full text-blue-500 p-2 animate-arrow " icon={faArrowRight}/>
                                </span>
                            </motion.div>
                        </span>
                        <h1 className="flex-1 ml-4 font-normal text-right"><b>À100%</b></h1>

                    </span>
                    <p className="w-full text-neutral-900/40 mt-3 text-[10px] md:text-base md:mb-10 lg:mb-0 text-justify ">
                    Notre école, La Tour Eiffel, est fière de lancer une application moderne qui simplifie la gestion des devoirs et renforce le lien entre les parents, les élèves et l'école.
                    </p>
                </motion.div>

                <motion.div {...costumeAnimtion('70%')} className="flex-1 md:w-full overflow-hidden rounded-b-[50px] z-0 iphone  relative scale-[0.7] md:scale-[1] -mt-10 md:mt-0">
                    <div className="absolute rounded-[50px] w-[100%]  h-[86%] bg-neutral-100 bottom-0 left-0 z-0"></div>
                    <div className="absolute rounded-[50px] w-[87%] h-full bg-neutral-100 top-0 left-0 z-0"></div>
                    <div className="absolute rounded-full w-40 h-40 bg-neutral-100 top-[9%] right-[9%] z-0"></div>
                    <div className="absolute top-0 scale-[0.85] md:scale-[1] -right-1 md:right-0 bg-blue-500 text-white rounded-full w-1 h-1 p-9 text-3xl flex items-center justify-center"><FontAwesomeIcon icon={faCircleNodes}/></div>

                    <div className=" w-full h-full top-0 left-0 z-20 p-10 pt-16 relative">
                        
                        <motion.img {...costumeAnimtion('-100%','100%')} alt='img' src={process.env.PUBLIC_URL+'/images/phone.png'} className="h-96 w-auto absolute md:-bottom-6 bottom-0 -right-40 z-0"/>
                        <p className="w-[80%] text-neutral-900/50 font-semibold">Connectez-vous à La Tour Eiffel en temps réel</p>
                        <h1 className="text-6xl mt-5"><b>Gratuitement</b></h1>
                        <p className="text-neutral-900/50 font-semibold w-full">Informez-vous instantanément sur la vie scolaire et pédagogique de votre enfant.</p>
                        <ul className="mt-14 text-neutral-900/40 ">
                            <li className="font-semibold text-blue-500 text-xl"><FontAwesomeIcon className="text-blue-500 text-xl mr-2 " icon={faBell}/>Restez informé</li>
                            <li className="text-sm ">Vous serez toujours notifié et informé</li>

                            <li className="font-semibold text-red-500 text-xl mt-9 "><FontAwesomeIcon className="text-red-500 text-xl mr-2" icon={faGlobe}/>Toujours connectés</li>
                            <li className="text-sm ">Application toujours en ligne, rien raté.</li>

                            <li className="font-semibold text-blue-500 text-xl mt-9"><FontAwesomeIcon className="text-blue-500 text-xl mr-2" icon={faGear}/>Toujours à votre service</li>
                            <li className="text-sm w-[60%] md:w-full">Notre équipe est prête à vous aider à tout moment.</li>

                        </ul>
                        
                        <p className="text-neutral-900/20 text-[10px] mt-10 -mb-8">Visitez la direction de l'école ou cliquez sur "Connectez-nous" pour plus d'informations.</p>
                        
                    </div>
                </motion.div>
            </div>
                <motion.div {...costumeAnimtion('0%','100%',100,10)} ref={ref} className="w-full flex flex-col md:flex-row overflow-hidden md:bg-neutral-100  py-12 rounded-[50px] -mt-20 md:mt-2 text-center md:text-left ez relative">
                    <div className=" w-full h-full absolute top-0 left-0 z-0 flex items-center justify-center md:hidden">
                        <img alt='img' className={` h-80 transition-all ease-in-out duration-200  ${activestyle.image}`} src={process.env.PUBLIC_URL+lesServices[activeIndex].imges}></img>
                    </div>
                    <div className=" w-full h-full absolute top-0 left-0 z-0 backdrop-blur-[3px] bg-black/5 md:hidden">

                    <div className="absolute top-2 w-full flex items-center justify-center md:hidden">
                        {[1, 2, 3, 4].map((item, index) => (
                            <div key={index} onClick={() => handleClick(index)} className={`cursor-pointer px-2 yt h-[40px] flex items-end justify-end ${activeIndex === index ? "font-semibold text-2xl md:text-lg lg:text-2xl text-neutral-900" : "hover:animate-pulse text-[12px] text-neutral-900/50"}`}>
                                0{item}
                            </div>
                        ))}
                    </div> 
                    
                    </div>
                <div className="flex-1 px-10 overflow-hidden text-base md:text-sm lg:text-2xl  z-10 h-full md:pt-0 pt-10">
                    <h1 ><b>le Groupe Scolaire La Tour Eiffel </b></h1>
                    <h1 className={`transition-all  ease-in-out   duration-200  lg:h-10 ${activestyle.title}`}><b>{lesServices[activeIndex].title2} <b>{lesServices[activeIndex].boldTitle}  </b></b></h1>
                    <p className={`lg:text-base  text-[10px]  w-full transition-all ease-in-out duration-200    md:h-20 ${activestyle.text}`}>{lesServices[activeIndex].paragrapgh} </p>
                    <div className="flex mt-6 md:mt-0 lg:mt-6">
                        <span className="pr-10 border-gray-900/20 border-r">
                            <p className="text-neutral-900/40 md:text-sm  text-[10px] mb-2">Total Session</p>
                            <h1 className="text-3xl text-blue-500"><b>5,000</b></h1>
                        </span>

                        <span className="pl-10">
                            <p className="text-neutral-900/40 md:text-sm text-[10px] mb-2">Heurs Total</p>
                            <h1 className="text-3xl text-red-500"><b>20,000</b></h1>
                        </span>
                    </div>
                </div>
                
                <div className="flex-1 md:flex hidden">
                    <div className="flex-1 relative ">
                    <img alt='img' className={`opacity-90 h-80 md:h-64 lg:h-80 scale-125 absolute -bottom-20 transition-all ease-in-out duration-200  ${activestyle.image}`} src={process.env.PUBLIC_URL+lesServices[activeIndex].imges}></img>
                    </div>
                    <div className="flex-1 relative">
                        <span className="flex items-end w-full float-right flex-row-reverse -mt-3 pr-10 text-neutral-900/40 tracking-tighter cursor-pointer text-base">

                            {[1, 2, 3, 4].map((item, index) => (
                                <div key={index} onClick={() => handleClick(index)} className={`cursor-pointer px-2 yt h-[40px] flex items-end justify-end ${activeIndex === index ? "font-semibold text-3xl text-neutral-900" : "hover:animate-pulse text-neutral-900/50"}`}>
                                    0{item}
                                </div>
                            ))}

                        </span> 
                        <div className="p-5 py-3 bg-red-500 text-center absolute bottom-0 rounded-full text-white right-0 mr-10 font-semibold">
                            Lire plus
                        </div>
                    
                    </div>
                </div>
                </motion.div>
        </div>
    )
}
export default NouvellesAct
