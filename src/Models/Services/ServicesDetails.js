import TheService from "./TheService";
import appMobileData from "./ServicesDatas/appMobileData.json";
import transportData from "./ServicesDatas/transportdata.json";
import CantineData from "./ServicesDatas/CantineData.json";
import clubesDatas from "./ServicesDatas/clubsDatas.json";
import infermriDatas from "./ServicesDatas/infermrieData.json";
import autreServicesData from "./ServicesDatas/AutreServcesData.json";
import { useSelector } from "react-redux";
import {motion} from "framer-motion";
import BottomNavigation from "./BottomNavigation";
import { useInView } from 'react-intersection-observer';

const ServicesDetails = ({selectedCyc,onSelect}) => {
    const { ref, inView } = useInView({
        threshold: 0.5, // triggers when 50% of the element is visible
      });
    
    const { language } = useSelector((state) => state.presntion); 
    const services = ["AppMobile", "Transport", "Cantine", "Clubs", "Infirmerie", "Autre"];
    const servsData = [appMobileData, transportData, CantineData, clubesDatas, infermriDatas,autreServicesData];
    return (
        <>
            <div ref={ref}  className="w-[90%] flex flex-col items-center text-neutral-500/50 mt-20 relative mb-96">

                <p className=" w-[90%] text-center">Repensez l’éducation avec une vision novatrice, une passion sans faille et un engagement absolu !
                Chaque service a été conçu pour enrichir le parcours scolaire des élèves, en leur offrant des outils modernes, un environnement stimulant et des opportunités uniques pour s’épanouir pleinement.</p>

                <div className="w-full flex justify-center mt-20">
                    <div className="w-[50%] flex ">
                        <h1 className="text-8xl mb-0 text-blue-500"><b>Services d'Excellence </b></h1>

                        
                    </div>
                    <div className="w-[50%] flex flex-col items-end justify-end">
                        <p className="text-right p-4">Redéfinissez l'expérience éducative avec innovation et passion </p>

                        <div className="w-full bg-neutral-100 rounded-[35px] border border-white p-[15px] flex items-center justify-center relative overflow-hidden ">
                        <div className="w-[100%] flex items-center justify-between relative">

                                <motion.span layout transition={{type: "spring",visualDuration: 0.14,bounce: 0.2}}
                                    
                                        style={{ width: 100 / services.length + "%", left: selectedCyc * (100 / services.length) + "%" }}
                                        className="absolute bg-blue-500 shadow-md  h-full rounded-[20px]"
                                    />
                                    {services.map((text, index) => (
                                        <div
                                            
                                            style={{ width: 100 / services.length + "%" }}
                                            className={`py-4 text-center z-10 cursor-pointer ${selectedCyc === index ? "text-white xl:text-lg cursor-pointer font-semibold" : "text-neutral-500  hover:animate-pulse"}`}
                                            onClick={()=>onSelect(index)}
                                        >
                                            {text}
                                        </div>
                                    ))}
                            
                        </div>
                        </div>
                    </div>
                </div>

                <TheService  selectedCyc={selectedCyc} srvData={servsData[selectedCyc]} lang={language} isOther={selectedCyc==5}/>
                <BottomNavigation selected={selectedCyc} handelSelect={onSelect} show={inView}/>
            </div>
        </>
    )
}


export default ServicesDetails;