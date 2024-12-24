import { faAward, faComments, faGraduationCap, faHandHoldingHeart, faQuoteLeft, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MotDeFondateur = () =>{

    return(
        <>
            <div className="w-[90%]  rounded-[40px] items-center justify-center  flex gap-x-3 mt-20">
            
                <div className="w-[70%] h-[700px] bg-red-500 rounded-[40px] flex items-center relative">
                <div className="w-[48%] pl-2 h-full relative ">
        
                    <img className="absolute w-auto h-[900px] scale-x-110 bottom-0 -left-5" src={process.env.PUBLIC_URL+'/images/fondateur.png'}/>
                    <div className="absolute w-52 bg-gradient-to-tr from-black/10 to-white/10 backdrop-blur-2xl drop-shadow-2xl -bottom-8 -left-8 rounded-[40px] font-semibold text-white/60 boeder border-white/10 text-center flex items-center flex-col justify-center gap-y-2 px-10 py-6  shadow-md">
                        <FontAwesomeIcon className="drop-shadow-md" icon={faGraduationCap}/>

                        <p className="text-white/70 text-base drop-shadow-md font-bold ">
                        Éduquer pour l'avenir
  </p>
                    </div>
                </div>
                <div className="flex-1 h-full pr-10 text-base  text-white text-justify py-4">
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-9xl text-shadow-xl text-white"/>
                    <p className=" p-2">
                        En tant que parents, nous savons bien que le choix d’un bon établissement scolaire est devenu crucial pour préparer les enfants d’aujourd’hui à comprendre et bâtir le monde de demain et à s’y épanouir. À l’heure où le numérique efface les frontières et renforce la globalisation, ils doivent pouvoir communiquer dans plusieurs langues et acquérir des savoir-faire de haut niveau.
                    </p>
                    <p className="my-2 p-2">
                        C’est dans cette vision que les Écoles La Tour Eiffel ont été fondées, avec la conviction profonde que chaque enfant possède un potentiel unique qui mérite d'être développé dans un environnement stimulant, bienveillant et adapté aux défis contemporains. Nous croyons fermement que l’éducation ne se limite pas à la transmission des connaissances académiques.
                    </p>
                    <p className="text-red-500 bg-white font-bold p-2 rounded-xl text-center">
                    Bienvenue aux Écoles La Tour Eiffel, où l’avenir prend forme aujourd’hui.
                    </p>
                    <p className="text-sm mt-2 text-right p-2 "><b className="text-2xl">Mr. Ibrahim El Baz</b><br/>fondateur des école la tour Eiffel</p>
                </div>
                </div>
                <div className="w-[30%] h-[500px] flex items-center  flex-col bg-red-500 rounded-[40px] py-10 relative">
                    <h1 className="text-blue-500 text-9xl font-extrabold -mt-24">4</h1>
                    <div className="w-[90%] text-center text-white text-2xl">
                        <b>Promesses du Fondateur</b>
                    </div>
                    <div className="w-[90%] h-full mt-10 grid grid-cols-2 grid-rows-2 text-white/80 text-center">
                        <div className="flex items-center justify-center flex-col text-sm gap-4">
                            <FontAwesomeIcon icon={faAward} className="text-white text-6xl"/>
                            Engagement envers l'Excellence
                        </div>
                        
                        <div className="flex items-center justify-center flex-col text-sm gap-4 ">
                            <FontAwesomeIcon icon={faUserGraduate} className="text-white text-6xl"/>
                            <p className="px-4">Respect de l'Individualité</p>
                        </div>

                        <div className="flex items-center justify-center flex-col text-sm gap-4">
                            <FontAwesomeIcon icon={faHandHoldingHeart} className="text-white text-6xl"/>
                            Un Environnement Bienveillant
                        </div>

                        <div className="flex items-center justify-center flex-col text-sm gap-4">
                            <FontAwesomeIcon icon={faComments} className="text-white text-6xl"/>
                            Transparence et Communication
                        </div>
                        <p className="absolute w-[90%] left-[5%] text-center bottom-2 text-white/60 text-[10px]">
    Ces principes définissent notre approche éducative
  </p>
                    </div>

                </div>
            </div>
        </>
    )
}
export default MotDeFondateur;