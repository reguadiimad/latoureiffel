import {motion} from "framer-motion";
import { exit } from "process";
const PopUp = ({white=false,text,ar=false}) => {
    
    return(
        <>
            <div className="fixed bottom-0 left-0 w-full flex items-center justify-center p-5">
                <motion.div
                initial={{opacity:0,y:50,scale:0.5}}
                animate={{opacity:1,y:0,scale:1}}
                exit={{opacity:0,y:50}}
                transition={{type:'spring',stiffness: 150, damping: 20}}

                className="rounded-full flex h-16  py-3 backdrop-blur-xl pl-4 pr-2 bg-black/5 border border-white/10 shadow-lg z-50 gap-x-2">
                    
                    <motion.div initial={{opacity:0,width:'100%'}} animate={{opacity:1}} exit={{scale:0}} transition={{delay:0.5}}  className={`items-center ${ar&&'text-2xl'} mix-blend-difference flex justify-center  px-2 ${white?'text-white/90':'text-black/60'}`}>
                    {text}
                    </motion.div>
                    <motion.div className="">
                        <div className="w-10 h-10 bg-blue-500 flex items-center justify-center  rounded-full text-white text-2xl scale-105">+</div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}
export default PopUp