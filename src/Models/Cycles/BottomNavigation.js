import { useSelector } from "react-redux";
import levels from "./Datas/btmNavData.json"
import {AnimatePresence, motion} from "framer-motion";


const BottomNavigation = ({ show,handelSelect, selected }) => {
    const { language } = useSelector((state) => state.presntion);



    return (
        <AnimatePresence>
            {
                show&&
                    <motion.div initial={{y:50,opacity:0}} animate={{y:0,opacity:1}} exit={{y:0,opacity:0}} transition={{type:"spring"}} className="w-full fixed left-0 bottom-0 bg-gradient-to-t from-black/20 to-transparent flex items-center justify-center gap-3 z-50 pt-10">
                        {levels[language].map((level, index) => (
                            <motion.div
                                initial={{y:70}} animate={{y:0}} exit={{y:50}} transition={{type:"spring", delay:(index*0.2)}}
                                key={index}
                                onClick={() => handelSelect(index)}
                                className={` font-bold text-center my-5 text-lg  cursor-pointer  ease-in-out 
                                    ${selected === index 
                                        ? "text-white bg-white/25 border-white/50 border backdrop-blur-xl shadow-2xl rounded-full text-xl p-6 py-3" 
                                        : "text-white/70 rounded-2xl p-4 py-2"
                                    }`}
                            >
                                {level}
                            </motion.div>
                        ))}
                    </motion.div>
            }
        </AnimatePresence>
    );
};

export default BottomNavigation;
