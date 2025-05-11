import { useEffect, useState } from "react";
import { TheInput } from "../../Models/Inscription/inscrptionCards/InsCard";
import { AnimatePresence,motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClipboardList, faClose, faHome, faNewspaper, faUser, faUserGraduate, faUsers } from "@fortawesome/free-solid-svg-icons";
import HomeDash from "../Models/HomeDash";
import NewsDash from "../Models/NewsDash";
import InscriptionDash from "../Models/InscreptionDash";
import CondidatsDash from "../Models/CondidatsDash";
import ProfileDash from "../Models/Profiledash";
import AdminsDash from "../Models/AdminsDash";

const AdminHome = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [showMobDash, setShowMobDash] = useState(false);
    const Dashs = [<HomeDash/>,<NewsDash/>,<InscriptionDash/>,<CondidatsDash/>,<ProfileDash/>,<AdminsDash/>]
      const [now, setNow] = useState(new Date());
    
      useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(interval);
      }, []);
    
      const date = now.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    
      const time = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      });
    
    return(
        <>
        <div className="w-full mt-10 flex flex-col items-center pb-10">
            <div className="w-[95%] flex   md:overflow-y-scroll ">
                    
                <SideControle selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
                <AnimatePresence>
                </AnimatePresence>
                <div className="flex-1 text-center md:text-left md:p-10 md:h-[800px]">
                    <div className="w-full flex items-center justify-center text-left py-10">
                    <div className="text-left w-full">
                        <p className="text-apple-dark">{time}</p>
                        <h1 className="text-apple-title text-4xl font-bold">{date}</h1>
                    </div>
                    <div onClick={()=>setShowMobDash(true)} className="flex-1 flex  text-right w-24 text-2xl text-apple-dark  lg:hidden">
                        <div  className="w-16 h-16 rounded-[26px] bg-apple-light flex items-center justify-center ">
                            <FontAwesomeIcon className="text-apple-dark " icon={faUser}/>

                        </div>
                    </div>
                    </div>
                    {Dashs[selectedIndex]}
                </div>
            </div>
            <AnimatePresence>
                {showMobDash&&<MobDashControle selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} onClose={()=>setShowMobDash(false)}/>}
            </AnimatePresence>
        </div>
        </>
    )
}

export default AdminHome;
const menuItems = [
    { label: 'Accueil', icon: faHome },
    { label: 'Annonces', icon: faNewspaper },
    { label: 'Inscriptions', icon: faClipboardList },
    { label: 'Candidats', icon: faUserGraduate },
    { label: 'Mon Profil', icon: faUser },
    { label: 'Admins ETL', icon: faUsers },
];

const MobDashControle = ({selectedIndex,setSelectedIndex,onClose}) => {
    return (
        <>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{ease:"circInOut"}} className="fixed inset-0 h-full bg-black bg-opacity-10  flex items-end justify-center z-50">
            <motion.div initial={{y:90,opacity:0}} animate={{y:0,opacity:1}} exit={{y:90,opacity:0}} transition={{ease:"easeInOut", type:"spring",bounce:0.35}}  className="w-[95%] z-50 h-[95%] overflow-y-auto  right-0 bg-apple-light/80  flex flex-col items-center justify-between p-4 backdrop-blur-lg blurey rounded-t-3xl shadow-lg ">
                <FontAwesomeIcon  icon={faClose} className="text-xl absolute top-0 left-0 m-4  text-apple-dark cursor-pointer" onClick={() => {onClose()}}/>
                <div className="flex flex-col relative items-center justify-end">
                    <div className="w-28 h-28 bg-apple-dark rounded-[60px] border-2 border-white shadow-xl flex justify-center items-center">
                        <FontAwesomeIcon icon={faUser} className="text-5xl text-apple-light"/>
                    </div>
                    <div className="absolute p-4 py-2 bg-white/70 backdrop-blur-lg blurey -bottom-4 text-blue-500 shadow-lg  rounded-2xl font-bold">Fondateur</div>
                </div>
                <p className=" mt-8 font-bold">Mr. Ibrahim El Baze</p>
                <p className="underline opacity-55">ibrahimeElbaze@gmail.com</p>
                <div className="w-[80%] h-full flex flex-col  items-center justify-center rounded-3xl">
                        {menuItems.map((item, index) => (
                            <motion.div layout transition={{ease:"backInOut"}}
                            key={index}
                            onClick={() => {setSelectedIndex(index);onClose()}}
                            className={`w-full flex items-center justify-center ${
                                selectedIndex === index
                                ? 'bg-white text-blue-500 shadow-sm rounded-2xl p-4 my-2 '
                                : 'px-4 text-apple-dark my-4'
                            } cursor-pointer`}
                            >
                            <div className="w-[20%]">
                                <FontAwesomeIcon icon={item.icon} />
                            </div>
                            <div className={`flex-1  ${ selectedIndex === index&&"font-bold"}`}>{item.label}</div>
                            </motion.div>
                        ))}
                    </div>

                <p className="underline opacity-55 my-4">Déconixion</p>
            </motion.div>
            </motion.div>
        </>

    )
}
const SideControle = ({selectedIndex,setSelectedIndex}) => {

  

    return (
        <div className="w-[26%] hidden sticky  bg-apple-light bg-opacity-80 h-[800px] rounded-[40px]  top-0 left-0 lg:flex flex-col items-center  p-4 text-apple-dark">
           <div className="flex flex-col relative items-center justify-end">
                <img className="w-40 h-40 bg-apple-dark rounded-full border-white border-4 shadow-xl"/>
                <div className="absolute p-4 py-2 bg-white/70 backdrop-blur-md -bottom-2 text-blue-500 shadow-lg  rounded-2xl font-bold">Fondateur</div>
           </div>
           <p className=" mt-8 font-bold">Mr. Ibrahim El Baze</p>
           <p className="underline opacity-55">ibrahimeElbaze@gmail.com</p>
           <div className="w-[80%] h-full flex flex-col  items-center justify-center rounded-3xl gap-8">
                {menuItems.map((item, index) => (
                    <motion.div layout transition={{ease:"backInOut"}}
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`w-full flex items-center justify-center ${
                        selectedIndex === index
                        ? 'bg-white text-blue-500 shadow-sm rounded-2xl p-4 '
                        : 'px-4 text-apple-dark'
                    } cursor-pointer`}
                    >
                    <div className="w-[20%]">
                        <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <div className={`flex-1  ${ selectedIndex === index&&"font-bold"}`}>{item.label}</div>
                    </motion.div>
                ))}
            </div>

           <p className="underline opacity-55 mb-4">Déconixion</p>
            

        </div>
    )
}




