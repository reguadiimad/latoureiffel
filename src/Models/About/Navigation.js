import { faUserTie, faChalkboardTeacher, faBook, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";

import { AnimatePresence,motion } from "framer-motion";

const Navigation = () => {

    const scrollValue = useSelector((state) => state.scrollVal);

   
    const menuList = {
        fr: ["Mot de fondateur", "Equipe Pedagogique", "Enseignement", "Parents Eleve"],
        ar: ["كلمة المؤسس", "الفريق التعليمي", "التعليم", "الآباء و التلاميذ"],
        en: ["Founder’s Word", "Teaching Team", "Teaching", "Parents & Students"],
    };;
    const [linked, setlinked] = useState(0);
    useEffect(() => {
        console.log("scrollValue", scrollValue);
        setlinked(scrollValue);
    }, [scrollValue]);
    
    useEffect(() => {
        console.log("linkedn", linked);
    }, [linked]);

    // Icon mapping based on the menuList index
    const icons = [faUserTie, faChalkboardTeacher, faBook, faUserFriends];
    const handleScroll = (id) => {

       
        const element = document.getElementById(id);
        const block = id===0?"center":"start"
        if (element) {
          element.scrollIntoView({ 
            behavior: "auto", 
            block:block,
          });

        }
    };
  const { language } = useSelector((state) => state.presntion); 

    return (
        <>
            {/* Main Navigation */}
            <div className="w-[45%]  rounded-full p-2 mt-20 flex items-center navi justify-center">
                <div className="w-[100%] flex items-center justify-between relative sm:hidden md:flex">
                    <span
                        style={{
                            width: 100 / menuList[language].length + "%",
                            left: linked * (100 / menuList[language].length) + "%",
                        }}
                        className="absolute bottom-1 h-2 flex justify-center items-center flash"
                    >
                        <div className="w-[50%] bg-blue-500 h-full rounded-full shadow-xl"></div>
                    </span>
                    {menuList[language].map((text, index) => (
                        <a
                            key={index}
                            style={{ width: 100 / menuList[language].length + "%" }}
                            className={`text-center cursor-pointer z-40 xl:py-5 md:py-4 ${language==="ar"&&"text-xl"} ${linked === index ? 'text-blue-500 text-base ' : 'text-black/50 text-sm'}`}
                            onClick={() => {setlinked(index);handleScroll(index)}}
                        >
                            {text}
                        </a>
                    ))}
                </div>
            </div>
         <AnimatePresence>
               
           {
            scrollValue !== null && 
            <motion.div  initial={{y:50}} animate={{opacity:1,y:0}}exit={{y:50}} transition={{type:'spring',stiffness: 150, damping: 20}} className="w-[50%] p-5 -bottom-3 fixed items-center justify-center  flex z-50 cursor-pointer ">
                <motion.div initial={{opacity:0}} animate={{opacity:1}}exit={{opacity:0}} transition={{type:'spring',stiffness: 150, damping: 20}} className="w-full scale-x-110 h-20 bg-black/90 blur-3xl fixed -bottom-14 z-50"></motion.div>
                {menuList[language].map((text, index) => (
                    <motion.div
                        key={index}
                        className={` flex h-16 cursor-pointer pops rounded-full border  border-transparent bg-transparent  ${linked == index ? ' rounded-full  px-3 py-3 bg-white/5  backdrop-blur-xl border  border-white/10 shadow-xl' : 'py-2 mt-3 px-2 scale-90'} z-50 gap-x-2`}
                        onClick={() => {handleScroll(index);}}
                        initial={{y:50}} animate={{y:0}}exit={{y:50}} transition={{type:'spring',stiffness: 150, damping: 20,delay:0.09*index}}
                    >

                        <div className={`items-center mix-blend-difference ${language==="ar"&&'text-xl'} origin-center flex justify-center ease-in-out duration-200 px-2 ${linked == index ? 'text-white font-semibold' : 'text-white/60 hover:animate-pulse hidden text-sm'}`}>
                            {text} 
                        </div>
                        
                            <div className={`w-10 h-10 ${linked == index?'bg-blue-500  text-white':'text-white/70 hover:text-white hover:animate-fast-pulse'} flex items-center justify-center rounded-full  text-xl scale-105`}>
                                <FontAwesomeIcon icon={icons[index]} />
                            </div>
                        
                    </motion.div>
                ))}
            </motion.div>
           }
         </AnimatePresence>
           
            
         
        </>
    );
};

export default Navigation;





















/*    */