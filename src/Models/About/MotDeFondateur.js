import { faAward, faComments, faGraduationCap, faHandHoldingHeart, faQuoteLeft, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";
import { useSelector,useDispatch } from "react-redux";
import { setScrollVal } from "../../redux(toolKit)/slices/scrollSlice";
import { useEffect } from "react";
import texts from "./Datas/motDeFondateur.json"


const MotDeFondateur = ({id}) =>{
    const dispatch = useDispatch();
    const scrollValue = useSelector((state) => state.scrollVal); // Assuming this is correctly defined in your Redux store
    const { ref: motherRef, inView } = useInView({
      threshold: 1, // Trigger when 50% of the component is visible
    });
    const { language } = useSelector((state) => state.presntion); 
    
    
    useEffect(() => {
      if (inView) {
        dispatch(setScrollVal(id)); // Ensure `id` is defined correctly
      }
    }, [inView, dispatch]);
    return (
        <>
          <div
            ref={motherRef}
            id={id}
            className={`w-[90%] rounded-[40px] items-center justify-center flex gap-x-3 my-20`}
          >
            {/* Main Left Section */}
            <div className={`w-[70%] h-[700px] bg-red-500 rounded-[40px] flex items-center relative`}>
              <div className={`w-[48%] pl-2 h-full relative`}>
                <img
                  className={`absolute w-auto h-[900px] scale-x-110 bottom-0 -left-5`}
                  src={process.env.PUBLIC_URL + "/images/fondateur.png"}
                  alt="Founder"
                />
                <div className={`absolute w-52 bg-gradient-to-tr from-black/10 to-white/10 backdrop-blur-xl drop-shadow-2xl -bottom-8 -left-5 rounded-[40px] font-semibold text-white/70 border border-white/10 text-center flex items-center flex-col justify-center gap-y-2 px-10 py-6 shadow-md`}>
                  <FontAwesomeIcon className={`drop-shadow-md`} icon={faGraduationCap} />
                  <p className={`text-white/70 text-base drop-shadow-md font-bold`}>
                    {texts.educateForFuture[language]}
                  </p>
                </div>
              </div>
              <div className={`flex-1 ${language==="ar"&&"flex flex-col items-end"}  h-full pr-10 ${language==="ar"?'text-base':'text-base'} text-white text-justify py-4`}>
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className={`text-9xl text-shadow-xl text-white ${language==="ar"&&'-scale-x-100'}`}
                />
                <p className={`p-2`}>{texts.paragraph1[language]}</p>
                <p className={`my-2 p-2 `}>{texts.paragraph2[language]}</p>
                <p className={`text-red-500 bg-white font-bold p-2 rounded-xl text-center`}>
                  {texts.welcome[language]}
                </p>
                <p className={`text-sm mt-2 text-right p-2`}>
                  <b className={`text-2xl`}>{texts.founder[language]}</b>
                  <br />
                  {texts.founderTitle[language]}
                </p>
              </div>
            </div>
      
            {/* Main Right Section */}
            <div className={`w-[30%] h-[500px] flex items-center flex-col bg-red-500 rounded-[40px] py-10 relative`}>
              <h1 className={`text-blue-500 text-9xl font-extrabold -mt-24`}>4</h1>
              <div className={`w-[90%] text-center text-white ${language==="ar"?'text-4xl':'text-2xl'}`}>
                <b>{texts.promisesOfFounder[language]}</b>
              </div>
              <div className={`w-[90%] h-full mt-10 grid grid-cols-2 grid-rows-2 text-white/80 text-center`}>
                {texts.promises[language].map((promise, index) => (
                  <div key={index} className={`flex items-center justify-center flex-col text-sm gap-4`}>
                    <FontAwesomeIcon
                      icon={
                        [
                          faAward,
                          faUserGraduate,
                          faHandHoldingHeart,
                          faComments,
                        ][index]
                      }
                      className={`text-white text-6xl `}
                    />
                    <p className={`px-4 ${language==="ar"&&'text-xl'}`}>{promise}</p>
                  </div>
                ))}
                <p className={`absolute w-[90%] left-[5%] text-center bottom-2 text-white/60 text-[10px] ${language==="ar"&&'text-sm bottom-4'}`}>
                  {texts.principles[language]}
                </p>
              </div>
            </div>
          </div>
        </>
      );}
      
export default MotDeFondateur; 