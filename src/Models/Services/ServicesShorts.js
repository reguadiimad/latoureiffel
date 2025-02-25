import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus,faMobileAlt,faUtensils,faTheaterMasks, faStethoscope, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence,motion} from "framer-motion";

const SerrvicesShorts = ({selectedService,onSelect,theY}) => {

    const services = [
        { icon: faMobileAlt, title: "App Mobile", title0: "Application Mobile des Écoles La Tour Eiffel", image: "/images/srv_phn.png", description: "L'innovation éducative à portée de main" },
        { icon: faBus, title: "Transports", title0: "Service de transport scolaire sécurisé", image: "/images/srv_trns.png", description: "Transport pour un parcours sécurisé" },
        { icon: faUtensils, title: "Cantine", title0: "Repas équilibrés pour vos enfants", image: "/images/srv_cnt.png", description: "Des repas sains et savoureux" },
        { icon: faTheaterMasks, title: "Clubs", title0: "Activités extrascolaires variées", image: "/images/srv_club.png", description: "Explorez des clubs adaptés aux passions de vos enfants" },
        { icon: faStethoscope, title: "Infirmerie", title0: "Un espace médical à disposition", image: "/images/srv_inf.png", description: "Soins et suivi médical pour les élèves" },
        { icon: faEllipsis, title: "Autre", title0: "Autres services pour les élèves", image: "/images/srv_autr.png", description: "Des services supplémentaires adaptés aux besoins" },
    ];
    

    

    return(
    <>
        <div className="w-[90%] text-neutral-500 mt-36  flex flex-col items-center justify-center relative z-10">
            <img className="absolute top-10 -left-[6%]  w-[80%] -z-10" src={process.env.PUBLIC_URL+'/images/blur.png'}></img>
            <p>Des services adaptés pour une expérience éducative enrichissante</p>
            <h1 className="text-blue-500  text-8xl text-center"><b>Un Environnement Scolaire Complete</b></h1>

            <div className="w-full flex  py-20">

                <div className="w-[55%] h-[650px] flex items-center justify-center p-4 z-10">
                   
                    <div className="w-[32%] bg-white/40 blurey backdrop-blur-3xl h-[80%] border-2 border-white/80 border-r-0 rounded-[50px] rounded-r-none   text-neutral-900/60 flex flex-col py-10">
                    {
                        services.map((service,index)=><div onClick={()=>onSelect(index)} className={`ease-in-out duration-200  cursor-pointer flex w-[300px] items-center h-[20%] gap-x-2 
                             ${selectedService===index?'  shadow-2xl -ml-[10%] bg-white/90 text-xl gap-x-4  rounded-r-none rounded-3xl text-blue-500 p-10 ':'mx-10'}`}>
                                <FontAwesomeIcon icon={service.icon}/> <p><b>{service.title}</b></p></div>)
                    }
                    </div>
                    <div key={selectedService} className={`w-[68%] bg-white/40 blurey flex items-center flex-col text-center shadow-sm border-white border-2 pt-8  backdrop-blur-3xl h-full z-0 rounded-[50px] relative overflow-hidden`}>
                    <AnimatePresence>                  
                        
                            <motion.img initial={{opacity:0,y:theY*30,scaleX:0.92}} whileInView={{opacity:1,y:0,scaleX:1}} exit={{opacity:0,y:theY*30}} transition={{type:'spring'}} className={`w-full absolute ${selectedService===0?"-bottom-[5%] -right-[20%]":`bottom-0 left-0`}`} src={process.env.PUBLIC_URL + services[selectedService].image} alt={services[selectedService].title0} />
                            <motion.div initial={{opacity:0,y:theY*20,scale:0.8}} whileInView={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:theY*20}} transition={{type:'spring',delay:0.1}} className="text-red-500 text-base font-bold">{services[selectedService].description}</motion.div>

                            <motion.h1 initial={{opacity:0,scaleX:0.4,y:theY*30}} whileInView={{opacity:1,scaleX:1,y:0}} exit={{opacity:0,scaleX:0.4,y:theY*30}} transition={{type:'spring',delay:0.1}} key={services[selectedService].title0} className="text-white text-4xl w-[80%]">
                            <b>{services[selectedService].title0}</b>
                            </motion.h1>

                            <div className={`w-full absolute bottom-0 flex  p-[25px] ${selectedService===0?'items-start':'items-end'}`}>
                            
                            <div className={` px-4 text-xl font-bold ease-in-out duration-150  z-0 ${selectedService!==0?'bg-black/25':'bg-transparent'} blur-xl rounded-[25px] absolute `}>Voir +</div>
                                <button className={`p-2 px-4 text-xl font-bold ease-in-out duration-150 rounded-[25px] z-10 ${selectedService===0?'text-neutral-900':' text-white/90 '}`}>Voir +</button>
                            </div> 
                        
                    </AnimatePresence>

    
                    </div>

                </div>
                <div className="w-[45%] p-4 pt-10">
                    <p className=" text-base mb-2">Des solutions complètes pour soutenir l’épanouissement de chaque élève</p>
                    <h1 className="text-blue-500 text-6xl mb-4"><b>Nos Services d’Accompagnement</b></h1>
                    <p className="">Aux Écoles La Tour Eiffel, chaque service est conçu pour offrir un cadre propice à l’apprentissage et au bien-être de nos élèves. Nous vous proposons une gamme de prestations pensées pour répondre aux besoins quotidiens et favoriser un développement harmonieux </p>
                    
                    <div className="mt-8 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div>
                        <p>Accès instantané aux informations essentielles.</p>
                    </div>
                    <div className="mt-2 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                        <p>Trajets sûrs et ponctuels pour un départ serein.</p>
                    </div>
                    <div className="mt-2 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div>
                        <p>Repas équilibrés et gourmands pour bien démarrer la journée.</p>
                    </div>
                    <div className="mt-2 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                        <p>Soins rapides et attentionnés pour garantir le bien-être.</p>
                    </div>
                    <div className="mt-2 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div>
                        <p>Activités stimulantes pour révéler les talents.</p>
                    </div>
                    <div className="mt-2 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                        <p>Initiatives sur mesure pour enrichir le quotidien.</p>
                    </div>
                    <div className="w-full flex flex-row-reverse mt-2">
                        <button className="bg-red-500 text-white rounded-3xl shadow-md p-3 mt-4"><b>En Savoire Plus</b></button>
                    </div>

                </div>
            </div>
            
        </div>

    </>
    )
}

export default SerrvicesShorts;