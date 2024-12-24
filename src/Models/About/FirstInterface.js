import { faArrowTrendUp, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FirstInterface = () => {
    return(
        <>
            <div className="w-[90%] flex items-center justify-center mb-16">
                <div className="w-[55%] gap-y-2 flex flex-col">
                    <p className="text-neutral-500">Sur Nous</p>
                    <h1 className="font-bold text-7xl text-neutral-900"><b>Faites Connaissance avec Nous  Ensemble pour l'Avenir de Vos Enfants</b></h1>
                    <p className="text-neutral-500">Nous Croyons que la Connaissance Mutuelle Est la Clé d'une Collaboration Réussie. Apprenez à Découvrir Notre École, Nos Valeurs et Notre Engagement</p>
                    <div className="flex gap-x-4 items-center mt-4">
                    <a href="tel:1234567890">
                        <div className="p-4 rounded-full bg-blue-500 text-white/90 cursor-pointer ">
                            <FontAwesomeIcon className="mr-2 cursor-pointer" icon={faPhone}/> Appelez-nous
                        </div>
                    </a>
                    <p className="underline text-neutral-500 ml-6 text-xl">Lire plus</p>
                    </div>
                </div>
                <div className="w-[45%] flex flex-col gap-y-5 pl-4">
                    <div className="flex w-full gap-x-5">
                        <div className="flex-1 h-64 relative">
                            <div className="absolute z-40 border border-white/10 -top-12 right-8 w-24 h-24 rounded-full flex items-center justify-center bg-black/5 backdrop-blur-xl shadow-lg text-5xl text-blue-500">
                                <FontAwesomeIcon icon={faArrowTrendUp}/>
                            </div>
                            <div className="w-full h-full overflow-hidden  rounded-tl-full">
                                <img src={process.env.PUBLIC_URL+'/images/about.jpg'} className="-z-10 w-full h-full object-cover rounded-[40px] transform -scale-x-100 rounded-br-[20px]"/>
                            </div>
                        </div>
                        <div className="flex-1 h-64 bg-black/5 rounded-[40px] py-3 px-5">
                        <div className="w-full flex flex-col items-center justify-center text-neutral-500">
                            <p>depuis</p>
                            <h1 className="text-8xl text-red-500"><b>2015</b></h1>
                            <p className="text-sm text-neutral-500 mt-3 text-center"> Écoles La Tour Eiffel a Connu un Succès Remarquable Grâce à Vous Le succès de nos écoles repose sur la réussite de vos enfants et de nos étudiants</p>
                        </div>
                        </div>
                    </div>
                    <div className="w-full rounded-[40px] h-64 bg-neutral-900 flex px-4 overflow-hidden">
                        <div className="flex-1 h-full relative overflow-hidden">
                            <img className="w-full h-full object-cover top-0 left-0 absolute" src={process.env.PUBLIC_URL+'/images/bon.jpg'}/>
                            <div className="w-full items-center justify-center flex flex-col h-[65%] top-[17.5%] px-5 left-0 absolute text-white/90">
                               <div className="w-full flex  items-center justify-center  text-2xl font-bold mb-4">
                                <div className="h-[2px] bg-white/50 w-[28%]"/>
                                <p className="w-[70%] text-right">Près de dix ans </p>
                               </div>
                               <p className="w-full">un succès grâce à vous</p>
                               <p className="w-full text-justify">Ensemble, nous bâtissons un avenir prometteur et brillant.</p>

                            </div>
                        </div>
                        <div className="flex-1 h-full gap-x-4 flex items-end overflow-hidden">
                            <div className="flex-1 bg-red-300 h-[40%] rounded-t-3xl"></div>
                            <div className="flex-1 bg-red-400 h-[60%] rounded-t-3xl"></div>
                            <div className="flex-1 bg-red-500 h-[80%] rounded-t-3xl"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[90%]  flex items-center justify-center ">
                <div className="flex-1 text-neutral-500">
                    <p>Collaborer pour le meilleur pour vous</p>
                    <h1 className="text-5xl text-blue-500">
                        <b>En partenariat avec</b>
                    </h1>

                </div>
                <div className="flex-1 flex flex-row-reverse ">
                    <img src={process.env.PUBLIC_URL+'/images/prtb.png'} className="w-full h-24 object-cover opacity-90"></img>
                </div>
            </div>
            
        </>
    )
}
export default FirstInterface