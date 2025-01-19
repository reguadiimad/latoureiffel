import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useSwipeable } from "react-swipeable";
import content from "./Datas/MaternelleData.json"
const Maternelle = () => {
    const { language } = useSelector((state) => state.presntion);
    const mtImages = Array.from({ length: 12 }, (_, i) => `/images/mt/mt${i}.jpg`);
    const [direction, setDirection] = useState(1);
    const [selectedIndex, setSelectedIndex] = useState(null);
   


    const handlers = useSwipeable({
        onSwipedLeft: () => handleNext(),  // Swipe left to go next
        onSwipedRight: () => handlePrev(), // Swipe right to go previous
        preventScrollOnSwipe: true,
        trackMouse: true
    });

    const handleNext = () => {
        setDirection(1);
        setSelectedIndex((prev) => (prev + 1) % mtImages.length);
      };
    
      const handlePrev = () => {
        setDirection(-1);
        setSelectedIndex((prev) => (prev - 1 + mtImages.length) % mtImages.length);
      };
    
      const handleClose = () => {
        setSelectedIndex(null);
      };
      useEffect(() => {
              if (selectedIndex !== null) {

              document.body.style.overflow = "hidden";
              }
              return () => {
                  document.body.style.overflow = "auto";
              };
          }, [selectedIndex]);



    return (
        <div className={`w-[90%] mt-8 md:mt-20`}>

            <div className="w-full flex items-stretch justify-center">
                <div className="flex-1">
                    <p className="text-neutral-500 ">{content.subtitle[language]}</p>
                    <h1 className={`font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-blue-500`}>{content.title[language]}</h1>
                </div>
                <div className="w-[40%] hidden sm:flex justify-end text-right text-neutral-500 ">
                    {content.description[language]}
                </div>

            </div>

            <div className="flex w-full mt-10 flex-col-reverse lg:flex-row">
                <div className="lg:w-[45%] w-full text-neutral-500 flex flex-col gap-y-5">
                    <p className="text-neutral-500">
                        {content.explication[language]}
                    </p>
                    <div className="w-full flex items-center mt-10  gap-x-5">
                        <div className=" w-20 h-20 sm:bg-blue-500  rounded-[35px] rotate-45 flex items-center justify-center text-5xl font-bold shadow-sm">
                            <p className="-rotate-45 text-blue-500 sm:text-white font-extrabold">1</p>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-blue-500">{content.benefit1.title[language]}</h1>
                            <p>Des méthodes innovantes pour éveiller la curiosité et favoriser l’autonomie dès le plus jeune âge.</p>
                        </div>
                    </div>

                    <div className="w-full flex items-center mt-10 gap-x-5">
                        <div className="w-20 h-20 sm:bg-blue-500 rounded-[35px] -rotate-45 flex items-center justify-center text-5xl font-bold shadow-sm">
                            <p className="rotate-45 text-blue-500 sm:text-white font-extrabold">2</p>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-blue-500">{content.benefit2.title[language]}</h1>
                            <p>Un cadre chaleureux où chaque enfant est accompagné dans son développement personnel et social.</p>
                        </div>
                    </div>

                    <div className="w-full flex items-center mt-10 gap-x-5">
                        <div className="w-20 h-20 sm:bg-blue-500 rounded-[35px] rotate-45 flex items-center justify-center text-5xl font-bold shadow-sm">
                            <p className="-rotate-45 text-blue-500 sm:text-white font-extrabold">3</p>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-blue-500">{content.benefit3.title[language]}</h1>
                            <p>Une immersion précoce dans plusieurs langues pour préparer les citoyens de demain.</p>
                        </div>
                    </div>

                </div>
                <div className="w-[55%] pl-20 relative hidden lg:flex items-center justify-center"> 
                    <img className="absolute bottom-2 right-0 h-full scale-110" src={process.env.PUBLIC_URL+'/images/mateernel.png'}></img>
                    <div className="absolute left-20 p-4 2xl:p-10 text-center border border-white/60 bg-gradient-to-br from-black/5 to-white/5 rounded-[40px] shadow-xl w-[56%] hidden xl:block blurey backdrop-blur-3xl">
                        <h1 className="2xl:text-2xl text-lg font-extrabold text-blue-500 mb-3 2xl:mb-10">Une Maternelle Pensée pour l’Épanouissement des Enfants</h1>
                        <p className="text-left text-sm 2xl:text-base text-neutral-900/40">
                            À Écoles La Tour Eiffel, nous offrons un cadre éducatif bienveillant où chaque enfant peut grandir en confiance.  
                            Grâce à une pédagogie innovante, un environnement sécurisé et un éveil aux langues, nos tout-petits développent  
                            leurs compétences tout en s’amusant. Chaque jour est une nouvelle aventure d’apprentissage et de découverte !
                        </p>
                        <p className=" text-sm text-left text-neutral-900/50 font-bold mt-2">Un cadre éducatif pour apprendre en toute sérénité</p>
                    </div>
                    <div className="absolute bottom-0 right-0 flex gap-2">
                    <div className=" text-center flex items-center justify-center border border-white/30 bg-gradient-to-br from-black/5 to-white/5 rounded-[20px] shadow-xl p-2  blurey backdrop-blur-2xl">
                        <FontAwesomeIcon className="text-neutral-700/40 text-4xl" icon={faQuoteLeft}/>
                    </div>
                    <div className=" x  text-neutral-700/40 items-center justify-center border px-4 text-left border-white/30 bg-gradient-to-br from-black/5 to-white/5 rounded-[20px] shadow-xl p-2  blurey backdrop-blur-2xl text-white text-sm">
                    Chaque jour, mon enfant rentre avec un sourire et des étoiles dans les yeux<br/><p className="font-bold">Parent dun eleve</p>
                    </div>
                    </div>
                </div>

                <div className="w-full  flex lg:hidden items-center justify-center relative mb-14">

                    <img className=" w-full h-full sm:h-[450px] md:h-[550px] sm:w-auto " src={process.env.PUBLIC_URL+'/images/m2.png'}></img>
                    <div className="absolute -bottom-10 left-0 p-4  text-center border border-white/60 bg-gradient-to-br from-black/5 to-white/5 rounded-[20px] shadow-xl w-[70%]  blurey backdrop-blur-3xl">
                        <h1 className="text-base text-left font-extrabold text-blue-500 mb-2">Une Maternelle Pensée pour l’Épanouissement des Enfants</h1>
                        <p className="text-neutral-900/70 hidden md:block text-left">À Écoles La Tour Eiffel, nous offrons un cadre éducatif bienveillant où chaque enfant peut grandir en confiance. Grâce à une pédagogie innovante, un environnement sécurisé et un éveil aux langues, nos tout-petits développent leurs compétences tout en s’amusant. Chaque jour est une nouvelle aventure d’apprentissage et de découverte !</p>
                    </div>
                </div>
                
            </div>

            <div className="w-full flex  p-[20px] bg-neutral-100 rounded-[50px]  mt-10 overflow-x-scroll ">
                <div>
                    <div>
                        <div className=" flex gap-4 pr-[20px]">
                            {mtImages.map((image, index) => (
                            <img
                                key={index}
                                src={process.env.PUBLIC_URL + image}
                                className="h-[150px] sm:h-[200px] md:h-[250px] rounded-[30px] shadow-sm border-4 border-white ease-in-out duration-200 hover:scale-[1.08] hover:shadow-lg cursor-pointer  hover:border-[10px]"
                                onClick={() => setSelectedIndex(index)}
                            />

                            ))}
                            <div className="h-[150px] sm:h-[200px] md:h-[250px] rounded-[30px] text-center   mr-[20px] items-center justfy-center flex text-neutral-400/70 text-2xl font-bold cursor-pointer pl-6 pr-14  duration-200 ease-in-out  hover:text-blue-500/90">   
                                Voir Plus+ 
                            </div>
                        </div>
                        <AnimatePresence>
                            {selectedIndex !== null && (

                            <motion.div
                            {...handlers}
                                className="fixed top-0 left-0 w-full h-full p-5 md:p-0 bg-black/50  flex items-center justify-center flex-col gap-4 "
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                exit={{ opacity: 0 }}
                                onClick={handleClose}
                            >
                                {/* Image Slide */}
                                <motion.h1 initial={{y:30}} animate={{y:0}} exit={{y:10}} className="text-white/90 font-bold text-5xl">Materneelle en Images</motion.h1>
                            <motion.div initial={{x:70}} animate={{x:0}} exit={{x:100}} className="border border-white/40 bg-white/5  blurey backdrop-blur-2xl rounded-[50px] p-[25px] z-50">
                                <motion.img
                                    key={selectedIndex}
                                    src={process.env.PUBLIC_URL + mtImages[selectedIndex]}
                                    className=" rounded-[25px] h-[300px] md:h-[700px] border border-white/60"
                                    initial={{ x: direction * 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -direction * 100, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                                    />
                            </motion.div>

                                {/* Left Arrow */}
                                <button
                                className="absolute bottom-0 md:bottom-4 lg:bottom-auto left-10 text-white/70 text-3xl bg-white/5 w-20 h-20 p-3 rounded-[20px] border border-white/10 blurey backdrop-blur-2xl ease-in-out duration-200 hover:bg-white/10 hover:text-white shadow-2xl "
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePrev();
                                }}
                                >
                                <FontAwesomeIcon className="hover:animate-pulse" icon={faChevronLeft} />
                                </button>

                                {/* Right Arrow */}
                                <button
                                className="absolute bottom-0 md:bottom-4 lg:bottom-auto  right-10 text-white/70 text-3xl bg-white/5 w-20 h-20 p-3 rounded-[20px] border border-white/10 blurey backdrop-blur-2xl ease-in-out duration-200 hover:bg-white/10 hover:text-white shadow-2xl "

                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNext();
                                }}
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} className="transform rotate-180"/>
                                </button>

                            
                            </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Maternelle;