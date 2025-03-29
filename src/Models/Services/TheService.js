import { faBell, faBookOpen,faComments, faLock, faShieldAlt, faTachometerAlt, faBus, faUsers, faAppleAlt,faUtensils, faLeaf, faBroom, faFutbol, faTheaterMasks, faPalette, faRobot, faUserNurse, faBriefcaseMedical,faSyringe ,faAmbulance,faBabyCarriage,faChalkboardTeacher,faCalculator,faUserTie,faBook,faSuperscript } from "@fortawesome/free-solid-svg-icons";
import {spring,motion,AnimatePresence} from 'framer-motion';
import { useSelector } from "react-redux";


    
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TheService = ({selectedCyc,srvData,lang,isOther,textt}) => {
  const { language } = useSelector((state) => state.presntion);


    const iconMap = {
        faBell: faBell,
        faBookOpen: faBookOpen,
        faLock: faLock,
        faComments: faComments,
        faShieldAlt: faShieldAlt,
        faTachometerAlt: faTachometerAlt,
        faBus: faBus,
        faUsers: faUsers,
        faAppleAlt: faAppleAlt,
        faUtensils: faUtensils,
        faLeaf: faLeaf,
        faBroom: faBroom,
        faFutbol: faFutbol,
        faTheaterMasks: faTheaterMasks,
        faPalette: faPalette,
        faRobot: faRobot,
        faUserNurse:faUserNurse,
        faBriefcaseMedical:faBriefcaseMedical,
        faSyringe:faSyringe,
        faAmbulance:faAmbulance,
        faBabyCarriage: faBabyCarriage,
        faChalkboardTeacher: faChalkboardTeacher,
        faCalculator: faCalculator,
        faUserTie: faUserTie,
        faBook:faBook,
        faSuperscript: faSuperscript
       

      };
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
          },
        },
        exit: { opacity: 0, transition: { duration: 0.2 } },
      };
      
      // Item variants with spring animations for entry and a quick exit
      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { type: "spring", stiffness: 300, damping: 25 }
        },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
      };
  
  if (isOther) {
    return (
        <AnimatePresence>
     <motion.div
          className="w-full flex flex-col items-center justify-center mt-10 text-neutral-500"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Header Section */}
          <motion.div
            className="w-full pt-32 flex flex-col items-center justify-center"
            variants={itemVariants}
          >
            <motion.p
              className={`font-bold text-xl mb-6 ${lang === "ar" ? "text-2xl" : ""}`}
              variants={itemVariants}
            >
              {srvData.other_services[lang]}
            </motion.p>
            <motion.h1
              className={`text-7xl w-[80%] text-center text-blue-500 mb-2 ${lang === "ar" ? "text-8xl" : ""}`}
              variants={itemVariants}
            >
              <b>{srvData.heading[lang]}</b>
            </motion.h1>
          </motion.div>
  
          {/* Services Grid */}
          <motion.div
            className="w-full flex items-center justify-center mt-16 text-neutral-500"
            variants={itemVariants}
          >
            <motion.div
              className="grid grid-cols-3 grid-rows-2 gap-4 w-full items-stretch place-items-center"
              variants={containerVariants}
            >
              {srvData.services.map((service, index) => (
                <motion.div
                  key={index}
                  className="w-full border-4 border-dashed border-neutral-200 rounded-[40px] p-[15px] flex flex-col items-center justify-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div className="flex w-full items-center gap-4" variants={itemVariants}>
                    <motion.div
                      className={`w-20 h-20 rounded-[25px] flex items-center justify-center text-white text-4xl font-bold ${
                        index % 2 === 0 ? "bg-blue-500" : "bg-red-500"
                      }`}
                      variants={itemVariants}
                    >
                      <FontAwesomeIcon icon={iconMap[service.icon]} />
                    </motion.div>
  
                    <motion.div variants={itemVariants}>
                      <motion.p
                        className={`text-sm ${lang === "ar" ? "text-md" : ""}`}
                        variants={itemVariants}
                      >
                        {service.subtitle[lang]}
                      </motion.p>
                      <motion.h1
                        className={`font-bold text-3xl ${lang === "ar" ? "text-4xl" : ""}`}
                        variants={itemVariants}
                      >
                        {service.title[lang] || "Title not found"}
                      </motion.h1>
                    </motion.div>
                  </motion.div>
                  <motion.p
                    className={`pt-3 ${lang === "ar" ? "text-lg" : "text-base"}`}
                    variants={itemVariants}
                  >
                    {service.article[lang]}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
  
          {/* Summary */}
          <motion.p
            className={`w-[80%] mt-14 text-center text-sm ${lang === "ar" ? "text-base" : ""}`}
            variants={itemVariants}
          >
            {srvData.summary[lang]}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    );
  }
  const shrtsImages=[{"ar":"srvAppArb.png","fr":"srvAppFrc.png","en":"srvAppEng.PNG"},{"ar":"srvTrnsArb.png","fr":"srvTrnsFrc.png","en":"srvTrnsEng.PNG"},"srvCantine.png",{"fr":"srvClubs.png","en":"srvClubsEng.png","ar":"srvClubsArb.png"},"srvInfermerie.png",];
  
    
    return(
        <>
        <AnimatePresence>
            <p className={` lg:hidden flex text-justify mt-5`}>
                  {textt}
                </p>
            <div key={selectedCyc}  className="w-full lg:flex items-center justify-center flex-col lg:mt-10 text-neutral-500 hidden ">
                <div className="w-full lg:pt-32 mt-10 flex flex-col items-center justify-center">
                    <motion.p initial={{opacity:0,y:-24}} whileInView={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:12,scale:0.9}}  transition={{type: "ease",visualDuration: 0.14}} className={`font-bold text-xl origin-bottom mb-6 ${lang === 'ar' && 'text-2xl'}`}>{srvData.title[lang]}</motion.p>
                    <motion.h1 initial={{opacity:0,y:-10}} whileInView={{opacity:1,y:0}} exit={{opacity:0,y:-1}} transition={{type: "ease",visualDuration: 0.14}} className={`text-7xl origin-bottom w-[80%] text-center text-blue-500 mb-2  ${lang === 'ar' && 'text-8xl'}`}><b> {srvData.subtitle[lang]}</b></motion.h1>
                </div>

                <div className="w-full flex items-center justify-center mt-10">
                    <div className="h-full flex flex-col gap-16 w-[25%] pr-6">
                        <div className="w-full h-[280px] flex-col items-end justify-center flex text-right">
                            <motion.div initial={{x:-10,opacity:0}}  whileInView={{rotate:0, x: 0, opacity: 1 }} exit={{ x: 10, opacity: 0 }} transition={{ duration: 0.2 }} className="w-20 h-20 rounded-3xl text-center flex items-center justify-center bg-blue-500 text-white text-4xl font-bold">
                                <FontAwesomeIcon icon={iconMap[srvData.features[0].icon]}/>
                            </motion.div>
                            <motion.p initial={{x:-15,opacity:0}}  whileInView={{ x: 0, opacity: 1 }} exit={{ x: 3, opacity: 0 }} transition={{ duration: 0.2 }} className={`text-blue-500 font-bold mt-2 text-2xl ${lang === 'ar' && 'text-3xl'}`}>{srvData.features[0].title[lang]}</motion.p>
                            <motion.p initial={{x:-12,opacity:0}}  whileInView={{ x: 0, opacity: 1 }} exit={{ x: 21, opacity: 0 }} transition={{ duration: 0.2 }} className={`w-[90%] text-sm ${lang === 'ar' && 'text-base'}`}>{srvData.features[0].description[lang]}</motion.p>
                        </div>

                        <div className="w-full  h-[280px] flex-col items-end justify-center flex text-right">
                            <motion.div initial={{x:-10,opacity:0}}  whileInView={{rotate:0, x: 0, opacity: 1 }} exit={{ x: 10, opacity: 0 }} transition={{ duration: 0.2 }} className="w-20 h-20 rounded-3xl text-center flex items-center justify-center bg-blue-500 text-white text-4xl font-bold">
                                <FontAwesomeIcon icon={iconMap[srvData.features[1].icon]}/>
                            </motion.div>
                            <motion.p initial={{x:-15,opacity:0}}  whileInView={{ x: 0, opacity: 1 }} exit={{ x: 3, opacity: 0 }} transition={{ duration: 0.2,delay:0.2 }} className={`text-blue-500 font-bold mt-2 text-2xl ${lang === 'ar' && 'text-3xl'}`}>{srvData.features[1].title[lang]}</motion.p>
                            <motion.p initial={{x:-12,opacity:0}}  whileInView={{ x: 0, opacity: 1 }} exit={{ x: 21, opacity: 0 }} transition={{ duration: 0.2,delay:0.2 }} className={`w-[90%] text-sm ${lang === 'ar' && 'text-base'}`}>{srvData.features[1].description[lang]}</motion.p>
                        </div>
                    </div>

                    <div className="h-full w-[60%] flex items-center justify-center">
                        <motion.img  initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}  className="w-full"
                        src={process.env.PUBLIC_URL + '/images/' + 
                          ([0, 1,3].includes(selectedCyc) ? shrtsImages[selectedCyc][language] : shrtsImages[selectedCyc])
                      } 
                        />
                    </div>

                    <div className="h-full flex flex-col gap-16 w-[25%] pl-6">
                        <div className="w-full  h-[280px] flex-col justify-center items-start flex">
                        <motion.div initial={{x:-10,opacity:0}}  whileInView={{rotate:0, x: 0, opacity: 1 }} exit={{ x: 10, opacity: 0 }} transition={{ duration: 0.2 }} className="w-20 h-20 rounded-3xl text-center flex items-center justify-center bg-blue-500 text-white text-4xl font-bold">
                                <FontAwesomeIcon icon={iconMap[srvData.features[2].icon]}/>
                            </motion.div>
                            <motion.p initial={{x:15,opacity:0}}  whileInView={{ x: 0, opacity: 1 }} exit={{ x: -3, opacity: 0 }} transition={{ duration: 0.2,delay:0.1 }} className={`text-blue-500 font-bold mt-2 text-2xl ${lang === 'ar' && 'text-3xl'}`}>{srvData.features[2].title[lang]}</motion.p>
                            <motion.p initial={{x:12,opacity:0}}  whileInView={{ x: 0, opacity: 1 }} exit={{ x: -21, opacity: 0 }} transition={{ duration: 0.2,delay:0.1 }}  className={`w-[90%] text-sm ${lang === 'ar' && 'text-base'}`}>{srvData.features[2].description[lang]}</motion.p>
                        </div>

                        <div className="w-full  h-[280px] flex-col justify-center  items-start flex">
                        <motion.div initial={{x:-10,opacity:0}}  whileInView={{rotate:0, x: 0, opacity: 1 }} exit={{ x: 10, opacity: 0 }} transition={{ duration: 0.2,delay:0.1 }}  className="w-20 h-20 rounded-3xl text-center flex items-center justify-center bg-blue-500 text-white text-4xl font-bold">
                                <FontAwesomeIcon icon={iconMap[srvData.features[3].icon]}/>
                            </motion.div>
                            <motion.p initial={{x:15,opacity:0}}  whileInView={{ x: 0, opacity: 1 }} exit={{ x: -3, opacity: 0 }} transition={{ duration: 0.2,delay:0.4 }} className={`text-blue-500 font-bold mt-2 text-2xl ${lang === 'ar' && 'text-3xl'}`}>{srvData.features[3].title[lang]}</motion.p>
                            <motion.p initial={{x:12,opacity:0}}  whileInView={{ x: 0, opacity: 1 }} exit={{ x: -21, opacity: 0 }} transition={{ duration: 0.2,delay:0.4 }}  className={`w-[90%] text-sm ${lang === 'ar' && 'text-base'}`}>{srvData.features[3].description[lang]}</motion.p>
                        </div>
                    </div>
                </div>

                <p className={`w-[80%] text-center text-sm ${lang === 'ar' && 'text-base'}`}>{srvData.footer[lang]}</p>
            </div>
            <div key={'mb-'+selectedCyc}  className="w-full flex flex-col items-center lg:hidden mt-10 text-center">
              <p className="">{srvData.title[lang]}</p>
              <h1 className="text-blue-500 text-4xl"><b>{srvData.subtitle[lang]}</b></h1>
              <img key={'img-'+selectedCyc} className="w-full" src={process.env.PUBLIC_URL + '/images/' + 
                          ([0, 1,3].includes(selectedCyc) ? shrtsImages[selectedCyc][language] : shrtsImages[selectedCyc])}>
              </img>
              
            </div>
        </AnimatePresence>
        </>
    )

}

export default TheService;