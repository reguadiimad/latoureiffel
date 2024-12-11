import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PresentationVideo from './PresntionVideo';
import {motion} from "framer-motion";

const Presontation = () =>{
    const [prsntation, setPresention] = useState(false);
    const custumAnimation = (op=0,x,y,delay) => {
        return {
            initial:{opacity:op,x:x,y:y},
            whileInView:{opacity:1,x:0,y:0},
            transition:{type: "spring", stiffness: 100, damping: 15,delay:delay},
        }
    }
    return(
        <>
        <div className="w-full  lg:w-[60%] flex items-center justify-center ">
            <div className='md:w-[90%] text-center lg:text-left'>
                <motion.h1  {...custumAnimation(0,'-70%',0)} className="text-4xl text-neutral-900 md:text-6xl lg:text-5xl xl:text-7xl font-semibold md:mb-0 mb-5 ">
                    <b>Aidons nos élèves à s'élever vers le ciel, comme la Tour Eiffel</b>
                </motion.h1>

                <motion.p {...custumAnimation(0,'-70%',0,0.5)} className="ml-2 text-neutral-900/80 mb-5">
                    Découvrez nos parcours éducatifs adaptés à chaque étape du développement de vos enfants.
                </motion.p>

                <div className="flex justify-center lg:justify-start mb-3 ">
                    {["Maternelle", "Primaire", "Collège", "Lycée"].map((text, index) => (
                        <motion.span {...custumAnimation(0,'-100%',0,0.25*index)} key={index} className={`${index % 2 === 0 ? 'bg-blue-500' : 'bg-red-500'} backdrop-blur-lg text-white p-2 px-4 rounded-full mx-1`}>
                            {text}
                        </motion.span>
                    ))}
                </div>

                <div className="flex mb-5 justify-center lg:justify-start ">
                    <motion.button {...custumAnimation(0,'-70%')} className="bg-neutral-900 text-white px-4 md:p-4 rounded-full hidden md:block  shadow-lg hover:bg-neutral-900/90 transition">
                        S'inscrire
                    </motion.button>
                    <motion.div {...custumAnimation(0,'-70%',0)} onClick={()=>setPresention(true)} className="border-2 transition ease-in-out duration-200 border-neutral-900 bg-neutral-900 text-white lg:text-neutral-900 lg:bg-transparent p-1 md:p-2 rounded-full flex items-center justify-center ml-2 cursor-pointer overflow-hidden hover:bg-neutral-900 hover:text-white">
                        <FontAwesomeIcon className="bg-neutral-900 text-white rounded-full p-2 w-4 h-4 shadow-lg " icon={faPlay}/>
                        <p className="mx-2">Voir la présentation</p>
                    </motion.div>
                </div>
            </div>
        </div>
        <PresentationVideo prsntation={prsntation}  onClose={()=>setPresention(false)}/>
        </>
    )
}
export default Presontation