import { faArrowTrendUp, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { setScrollVal } from "../../redux(toolKit)/slices/scrollSlice";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import translations from "./Datas/firstInterFaceDats.json";

const FirstInterface = () => {
    const { language } = useSelector((state) => state.presntion); // Access language from Redux state
    const dispatch = useDispatch();
    const scrollValue = useSelector((state) => state.scrollVal);
    const { ref: motherRef, inView } = useInView({
        threshold: 0.5, // Trigger when 50% of the component is visible
    });

    useEffect(() => {
        inView && dispatch(setScrollVal(null));
    }, [inView, dispatch, scrollValue]);

    const yr = new Date().getFullYear();

    return (
        <>
            <div ref={motherRef} className={`w-[90%]  flex items-center justify-center mb-16 ${language==='ar'?'flex-row-reverse':''}`}>
                <div className={`w-[55%] gap-y-2 flex flex-col ${language==="ar"&&'items-end'}`}>
                    <p className={`text-neutral-500  ${language==="ar"&&'text-3xl'}`}>{translations.surNous[language]}</p>
                    <h1 className={`font-bold ${language==="ar"?'text-9xl leading-tight text-right':'text-7xl'} text-neutral-900`}>
                        <b>{translations.title[language]}</b>
                    </h1>
                    <p className={`text-neutral-500`}>{translations.description[language]}</p>
                    <div className={`flex gap-x-4 items-center mt-4`}>
                        <a href="tel:1234567890">
                            <div className={`p-4 rounded-full bg-blue-500 text-white/90 cursor-pointer`}>
                                <FontAwesomeIcon className={`mr-2 cursor-pointer`} icon={faPhone} />{" "}
                                {translations.callUs[language]}
                            </div>
                        </a>
                        <p className={`underline text-neutral-500 ml-6 text-xl`}>{translations.readMore[language]}</p>
                    </div>
                </div>
                <div className={`w-[45%] flex flex-col gap-y-5 ${language==="ar"?'pr-4':'pl-4'}`}>
                    <div className={`flex w-full gap-x-5`}>
                        <div className={`flex-1 h-64 relative`}>
                            <div className={`absolute z-40 border border-white/10 -top-12 right-8 w-24 h-24 rounded-full flex items-center justify-center bg-black/5 backdrop-blur-xl shadow-lg text-5xl text-blue-500`}>
                                <FontAwesomeIcon icon={faArrowTrendUp} />
                            </div>
                            <div className={`w-full h-full overflow-hidden rounded-tl-full`}>
                                <img
                                    src={process.env.PUBLIC_URL + "/images/about.jpg"}
                                    className={`-z-10 w-full h-full object-cover rounded-[40px] transform -scale-x-100 rounded-br-[20px]`}
                                />
                            </div>
                        </div>
                        <div className={`flex-1 h-64 bg-black/5 rounded-[40px] py-3 px-5`}>
                            <div className={`w-full flex flex-col items-center justify-center text-neutral-500`}>
                                <p>{translations.since[language]}</p>
                                <h1 className={`text-8xl text-red-500`}>
                                    <b>{translations.year[language]}</b>
                                </h1>
                                <p className={`text-sm text-neutral-500 mt-3 text-center`}>
                                    {translations.successStory[language]}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full rounded-[40px] h-64 bg-neutral-900 flex px-4 overflow-hidden`}>
                        <div className={`flex-1 h-full relative overflow-hidden`}>
                            <img
                                className={`w-full h-full object-cover top-0 left-0 absolute`}
                                src={process.env.PUBLIC_URL + "/images/bon.jpg"}
                            />
                            <div className={`w-full items-center justify-center flex flex-col h-[65%] top-[17.5%] px-5 left-0 absolute text-white/90`}>
                                <div className={`w-full flex items-center justify-center text-2xl font-bold mb-4`}>
                                    <div className={`h-[2px] bg-white/50 w-[28%]`} />
                                    <p className={`w-[70%] text-right`}>
                                        {translations.yearsOfSuccess[language].replace(
                                            "{yr-2008}",
                                            yr - 2008
                                        )}
                                    </p>
                                </div>
                                <p className={`w-full`}>{translations.sharedSuccess[language]}</p>
                                <p className={`w-full text-justify`}>{translations.sharedFuture[language]}</p>
                            </div>
                        </div>
                        <div className={`flex-1 h-full gap-x-4 flex items-end overflow-hidden`}>
                            <div className={`flex-1 bg-red-300 h-[40%] rounded-t-3xl`}></div>
                            <div className={`flex-1 bg-red-400 h-[60%] rounded-t-3xl`}></div>
                            <div className={`flex-1 bg-red-500 h-[80%] rounded-t-3xl`}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-[90%] flex items-center justify-center ${language==="ar"&&'flex-row-reverse'}`}>
                <div className={`flex-1 text-neutral-500 ${language==="ar"&&'flex flex-col-reverse items-end '}`}>
                    <p>{translations.collaboration[language]}</p>
                    <h1 className={`${language==="ar"?'text-6xl':'text-5xl'} text-blue-500`}>
                        <b>{translations.partnerWith[language]}</b>
                    </h1>
                </div>
                <div className={`flex-1 flex flex-row-reverse `}>
                    <img
                        src={process.env.PUBLIC_URL + "/images/prtb.png"}
                        className={`w-full h-24 object-cover opacity-90`}
                    ></img> 
                </div>
            </div>
        </>
    );}
    
export default FirstInterface;
