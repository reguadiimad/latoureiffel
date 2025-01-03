import { faDownload, faFlask, faGlobe, faLanguage, faQuoteLeftAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { setScrollVal } from "../../redux(toolKit)/slices/scrollSlice";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import texts from './Datas/educationData.json';
import { leftAnimation,rightAnimation,bottomAnimation, scaleAnimation } from "./animation";
import {motion} from "framer-motion";

const Education = ({ id }) => {
    const dispatch = useDispatch();
    const scrollValue = useSelector((state) => state.scrollVal); // Assuming this is correctly defined in your Redux store
    const { ref: motherRef, inView } = useInView({
        threshold: 0.5, // Trigger when 50% of the component is visible
    });

    useEffect(() => {
        if (inView) {
            dispatch(setScrollVal(id)); // Ensure `id` is defined correctly
        }
    }, [inView, dispatch]);

    const { language } = useSelector((state) => state.presntion);
    const t = texts.certifications;

    return (
        <>
            <div id={id} ref={motherRef} className={`w-full items-center justify-center flex flex-col ${language==="ar"&&'text-xl'}`}>
                <motion.div {...bottomAnimation()} className={`w-[90%]  overflow-hidden rounded-[50px] mt-10 relative flex items-center justify-center`}>
                    <img className={`w-full opacity-90 `} src={process.env.PUBLIC_URL + '/images/edction.png'} alt="Education" />
                    <div className={`absolute w-full h-full flex hhy ${language==="ar"&&'flex-row-reverse text-right'}`}>
                        <div className={`flex-1 h-full pl-12 py-12 flex justify-center flex-col gap-y-10 ${language==="ar"&&'text-xl'}`}>           
                            <div className={`w-full pr-10`}>
                                <motion.p {...bottomAnimation(0.1)} className={`text-red-500 `}>{texts.tagline[language]}</motion.p>
                                <motion.h1 {...bottomAnimation(0.2)} className={`${language==="ar"?'text-8xl':'text-7xl'} text-white`}><b>{texts.main_heading[language]}</b></motion.h1>
                            </div>
                            <div className={`w-full flex pr-10`}>
                                <div className={`text-white drop-shadow-2xl text-justify`}>
                                    <motion.p {...bottomAnimation()} className={`mb-4`}>{texts.section1[language]}</motion.p>
                                    <motion.p {...bottomAnimation()}>{texts.section2[language]}</motion.p>
                                    <div className={`w-full flex flex-row-reverse mt-4 p-2`}>
                                        <motion.button {...scaleAnimation()} className={`bg-red-500 shadow-xl p-4 rounded-2xl flex gap-x-2`}>
                                            <b><FontAwesomeIcon icon={faDownload} className={`mr-2`} /> {texts.button[language]}</b>
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`w-[45%] h-full flex gap-x-3 flex-row-reverse ${language==='ar'&&'-scale-x-100'}`}>
                            <div className={`w-[20%] h-full flex flex-col gap-y-3 `}>
                                <div className={`bg-white/10 w-full h-[20%] backdrop-blur-md border border-white/20 border-t-0 border-r-0 rounded-bl-[20px] shadow-md`}></div>
                                <div className={`bg-white/10 w-full h-[50%] backdrop-blur-md border border-white/20 border-r-0 rounded-l-[20px] shadow-md`}></div>
                                <div className={`bg-white/10 w-full h-[30%] backdrop-blur-md border border-white/20 border-b-0 border-r-0 rounded-tl-[20px] shadow-md`}></div>
                            </div>
                            <div className={`w-[40%] h-full flex flex-col gap-y-3`}>
                                <div className={`bg-white/10 w-full h-[5%] backdrop-blur-md border border-white/20 border-t-0 rounded-b-[20px] shadow-md`}></div>
                                <div className={`${language==='ar'&&'-scale-x-100'} bg-white/50 w-full h-[40%] backdrop-blur-xl border border-white rounded-[20px] shadow-xl flex flex-col items-center justify-center relative`}>
                                    <FontAwesomeIcon icon={faFlask} className={`text-black/10 text-2xl absolute top-3 right-3`} />
                                    <div className={`w-full flex scale-95 flex-col items-center justify-center`}>
                                        <p className={`bg-black/5 p-2 px-3 rounded-full text-blue-500 font-semibold`}>{texts.categoryTitles[language].innovation}</p>
                                        <h1 className={`text-4xl text-red-500/90 my-2`}><b>{texts.innovation_title[language]}</b></h1>
                                        <p className={`text-sm w-[90%] text-center text-black/35`}>{texts.innovation_text[language]}</p>
                                    </div>
                                </div>
                                <div className={`${language==='ar'&&'-scale-x-100'} bg-white/50 w-full h-[40%] backdrop-blur-xl border border-white rounded-[20px] shadow-xl flex flex-col items-center justify-center relative`}>
                                    <FontAwesomeIcon icon={faGlobe} className={`text-black/10 text-2xl absolute top-3 right-3`} />
                                    <div className={`w-full flex scale-95 flex-col items-center justify-center`}>
                                        <p className={`bg-black/5 p-2 px-3 rounded-full text-blue-500 font-semibold`}>{texts.categoryTitles[language].engagement}</p>
                                        <h1 className={`text-4xl text-red-500/90 my-3`}><b>{texts.engagement_title[language]}</b></h1>
                                        <p className={`text-sm w-[90%] text-center text-black/35`}>{texts.engagement_text[language]}</p>
                                    </div>
                                </div>
                                <div className={`bg-white/10 w-full h-[15%] backdrop-blur-md border border-white/20 border-b-0 rounded-t-[20px] shadow-md`}></div>
                            </div>
                            <div className={`${language==='ar'&&'-scale-x-100'} w-[40%] h-full flex flex-col gap-y-3`}>
                                <div className={`bg-white/5 w-full h-[30%] backdrop-blur-md border border-white/20 border-t-0 rounded-b-[20px] shadow-md`}></div>
                                <div className={`bg-white/50 w-full h-[40%] backdrop-blur-xl border border-white rounded-[20px] shadow-xl flex flex-col items-center justify-center relative`}>
                                    <FontAwesomeIcon icon={faLanguage} className={`text-black/10 text-2xl absolute top-3 right-3`} />
                                    <p className={`bg-black/10 p-2 px-3 rounded-full text-blue-500 font-semibold`}>{texts.categoryTitles[language].languages}</p>
                                    <h1 className={`text-5xl text-red-500/90 my-2`}><b>{texts.languages_title[language]}</b></h1>
                                    <p className={`text-sm w-[90%] text-center text-black/35`}>{texts.languages_text[language]}</p>
                                </div>
                                <div className={`bg-white/10 w-full h-[30%] backdrop-blur-md border border-white/20 border-b-0 rounded-t-[20px] shadow-md`}></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className={`w-[90%] my-20`}>
                    <div className={`rounded-[50px] flex gapx-10 items-center ${language==="ar"&&'flex-row-reverse text-right text-xl'}`}>
                        <div className={`flex-1`}>
                            <motion.p  {...leftAnimation()} className={`text-neutral-500 text-xl mb-5`}>{t.title[language]}</motion.p>
                            <motion.h1 {...leftAnimation(0.1)} className={`text-8xl text-blue-500 `}><b>{t.mainHeading[language]}</b></motion.h1>
                        </div>
                        <div className={`flex flex-row-reverse`}>
                            <motion.img {...rightAnimation(0.2)} className={`h-64`} src={process.env.PUBLIC_URL +'/images/iso.png'} alt="ISO Certification"/>
                        </div>
                    </div>
                    <div className={`w-full flex mt-10 ${language==="ar"&&'flex-row-reverse text-right text-xl'}`}>
                        <div className={`w-[20%] flex flex-col items-end text-neutral-500 pb-2`}>
                        <motion.div {...bottomAnimation()} className={`w-full h-[50%]`}>
                            <button className={`rounded-full p-3 border border-black/10`}>
                            <FontAwesomeIcon className={`mr-2`} icon={faDownload} /> {t.downloadButton[language]}
                            </button>
                        </motion.div>
                        <motion.div {...bottomAnimation(0.2)}  className={`w-full h-[50%] flex flex-col justify-end text-base `}>
                            <div className={`w-full flex items-center gap-x-3 mb-2 ${language==="ar"&&'flex-row-reverse text-right text-xl'}`}>
                                <FontAwesomeIcon className={`text-red-500`} icon={faQuoteLeftAlt} />
                                <p><b>{t.quote[language]}</b></p>
                            </div>
                            <p className={`text-sm`}>{t.founder[language]}</p>
                        </motion.div>
                        </div>
                        <div className={`w-[80%] overflow-x-scroll ${language==="ar"?'mr-10':'ml-10'}`}>
                        <div className={`flex w-[120%] items-stretch justify-center gap-x-4 text-neutral-700 text-base`}>
                            <motion.div {...leftAnimation(0.2)} className={`p-7 border border-black/10 rounded-[40px] flex-1 flex flex-col items-center justify-center gap-y-3`}>
                            <strong className={`text-blue-500 text-xl`}>{t.whatIsISO[language]}</strong>
                            <p>{t.whatIsISODescription[language]}</p>
                            </motion.div>
                            <motion.div {...leftAnimation(0.4)} className={`p-7 border border-black/10 rounded-[40px] flex-1 flex flex-col items-center justify-center gap-y-3`}>
                            <strong className={`text-red-500 text-xl`}>{t.howItHelps[language]}</strong>
                            <p>{t.howItHelpsDescription[language]}</p>
                            </motion.div>
                            <motion.div {...leftAnimation(0.6)} className={`p-7 border border-black/10 rounded-[40px] flex-1 flex flex-col items-center justify-center gap-y-3`}>
                            <strong className={`text-blue-500 text-xl`}>{t.whatYouGain[language]}</strong>
                            <p>{t.whatYouGainDescription[language]}</p>
                            </motion.div>
                            <motion.div {...leftAnimation(0.8)} className={`p-6 border border-black/10 rounded-[40px] flex-1 flex flex-col items-center justify-center gap-y-3`}>
                            <strong className={`text-red-500 text-xl`}>{t.whyChooseUs[language]}</strong>
                            <p>{t.whyChooseUsDescription[language]}</p>
                            </motion.div>
                        </div>
                        </div>
                    </div>
                    <div className={`w-full flex justify-end animate-pulse mt-5 text-neutral-600 ${language==="ar"&&'flex-row-reverse text-right text-xl'}`}>
                        {t.slideText[language]}  {/* Here's the corrected line */}
                    </div>
                </div>
                </div>
        </>
    );
};

export default Education;
