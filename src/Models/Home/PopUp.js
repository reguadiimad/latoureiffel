import {motion} from "framer-motion";
import { exit } from "process";
const PopUp = ({white=false,text,ar=false}) => {
    
    return(
        <>
            <div className="fixed bottom-0 left-0 w-full flex items-center justify-center p-5">
                <motion.div
                initial={{opacity:0,y:50,scale:0.4}}
                animate={{opacity:1,y:0,scale:1}}
                exit={{opacity:0,y:50,scale:0.5}}
                transition={{type:'spring',stiffness: 200, damping:13}}

                className="rounded-full flex h-16  py-3 blurey backdrop-blur-lg pl-6 pr-2 bg-white/5 border border-white/10 shadow-lg z-50 gap-x-2 ">
                    
                    <motion.div initial={{opacity:0,scale:0.8,y:15}} animate={{y:0,scale:1,opacity:1}} exit={{scale:0}} transition={{type:"spring",delay:0.2}}  className={`items-center ${ar&&'text-base lg:text-2xl'} mix-blend-difference flex justify-center font-semibold  px-2 ${white?'text-white/90':'text-black/70'}`}>
                    {text}
                    </motion.div>
                    <motion.div className="">
                        <motion.div initial={{y:40,opacity:0.8}} animate={{y:0,opacity:1}} exit={{y:-40,opacity:0.8}} transition={{type:'spring',delay:0.1}} className="w-10 h-10 bg-blue-500 flex items-center justify-center  rounded-full text-white/80 text-3xl font-semibold scale-105">+</motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}
export default PopUp