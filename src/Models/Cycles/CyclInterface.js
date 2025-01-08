import { faArrowDown, faArrowRotateBack, faLeftRight, faQuoteLeftAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CyclInterface = () => {
    return(
        <>
            <div className="w-[90%] h-[800px] rounded-[50px] flex overflow-hidden relative flex-col justify-end p-[25px] text-neutral-900/90 text-7xl">
                <div className="absolute top-0 left-0 w-full h-full -z-10 flex bg-white ">
                    <img className="h-full w-[25%] object-cover" src={process.env.PUBLIC_URL+'/images/c1.jpg'}/>
                    <img className="h-full w-[25%] object-cover" src={process.env.PUBLIC_URL+'/images/c2.jpg'}/>
                    <img className="h-full w-[25%] object-cover" src={process.env.PUBLIC_URL+'/images/c3.jpg'}/>
                    <img className="h-full w-[25%] object-cover" src={process.env.PUBLIC_URL+'/images/c4.jpg'}/>
                </div>
                <div className="absolute top-0 left-0 w-full h-full -z-10 flex">
                    <div className="flex-1 h-full   border-r-[14px] border-white"></div>
                    <div className="flex-1 h-full   border-r-[14px] border-white"></div>
                    <div className="flex-1 h-full   border-r-[14px] border-white"></div>
                    <div className="flex-1 h-full  "></div>
                </div>
                <div className="w-fit bg-white  backdrop-blur-xl rounded-t-[25px]  p-[30px] pb-0  flex items-end justify-end  shadow-lg psd gap-x-2">
                    <p className="pb-[20px] font-bold">Du </p><h1 className="  bg-red-500 rounded-[10px] p-4 text-white"> <b>Lycée</b></h1>
                </div>
                <div className="w-[45%] bg-white rounded-r-[25px] backdrop-blur-xl  p-[30px]   gap-x-2 shadow-lg pb-0">
                    <div className="flex items-end gap-x-2 "><p className="pb-[20px] font-bold ">à la </p><h1 className=" bg-blue-500 rounded-[10px] p-4 text-white"><b>Maternelle</b></h1></div>
                    <p className="text-lg mt-6">Chaque cycle est une étape, chaque étape est une réussite. À La Tour Eiffel, nous accompagnons chaque élève à grandir, apprendre et s’épanouir à chaque moment de son parcours scolaire.</p>
                    
                </div>

                <div className="w-fit bg-white backdrop-blur-xl  rounded-b-[25px]  p-[30px] pt-0  shadow-lg psdr block">
                    <button className="bg-red-500 px-5 p-3 text-white rounded-full gap-x-2 font-bold  text-xl">Découvrez notre cycle éducatif <FontAwesomeIcon className="mx-2" icon={faArrowDown}/></button>
                </div>
               
                <div className="absolute bottom-0 right-0 p-[30px] flex   items-center text-xl gap-x-2">
                    <div className="absolute top-0 w-full bg-black p-4 blur-3xl"></div>
                    <div className="rounded-full relative flex items-center justify-center p-4 bg-white/30 backdrop-blur-lg shadow-2xl"><p className="rounded-full p-2 px-4 bg-blue-500  text-white">Maternelle</p> <span className="-top-8 absolute text-white">de 2-5ans </span></div>
                    <div className="rounded-full relative flex items-center justify-center p-4 bg-white/55 backdrop-blur-lg shadow-2xl"><p className="rounded-full p-2 px-4 bg-red-500  text-white ">Primaire</p>  <span className="-top-8 absolute text-white">6-12ans </span></div>
                    <div className="rounded-full relative flex items-center justify-center p-4 bg-white/75 backdrop-blur-lg shadow-2xl"><p className="rounded-full p-2 px-4 bg-blue-500  text-white">Collège</p> <span className="-top-8 absolute text-white">de 13-15ans </span></div>
                    <div className="rounded-full relative flex items-center justify-center p-4 bg-white/95 backdrop-blur-lg shadow-2xl"><p className="rounded-full p-2 px-4 bg-red-500  text-white">Lycée</p> <span className="-top-8 absolute text-white">15-18ans </span></div>
                </div>

                <div className="absolute w-[35%]   top-[20px] right-[20px] flex flex-col items-end  text-xl gap-x-2  ">
                    <div className=" bg-white p-[30px] pb-[20px]  flex items-center rounded-t-[20px] rounded-l-[20px] gap-x-5 text-2xl text-right shadow-2xl"><FontAwesomeIcon className="text-5xl text-blue-500 " icon={faQuoteLeftAlt}/><p >De la maternelle au lycée, La Tour Eiffel a été ma seconde famille</p></div>
                    <div className=" bg-white w-fit p-[30px] pb-[20px] pt-[0px] -mt-[10px] flex items-center rounded-b-[20px] gap-x-5 text-right shadow-2xl text-neutral-500 text-lg psdl relative">Taha 16ans éleve cycle lycee</div>
                  
                </div>
            </div>
        </>
    )
}
export default CyclInterface;