import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector,useDispatch } from "react-redux";
import { setScrollVal } from "../../redux(toolKit)/slices/scrollSlice";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import texts from "./Datas/teamWorkData.json"


const TeamWork = ({id}) => {
    const content = texts.teamSection;
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
    
    return (
        <div id={id} ref={motherRef} className={`w-[90%] flex ${language==="ar"&&'flex-row-reverse text-xl text-right'} items-center justify-center gap-x-5 my-20 text-neutral-900`}>
          <div className={`w-[70%] flex flex-col riri`}>
            <p className={`text-neutral-500`}>{content.heading[language]}</p>
            <h1 className={`text-8xl ${language==="ar"&&'text-9xl'} text-blue-500`}>
              <b>{content.title[language]}</b>
            </h1>
      
            <div className={`w-full flex gap-x-4 mt-8 text-neutral-500`}>
              {content.contentBlocks.map((block, index) => (
                <div
                  key={index}
                  className={`flex-1 rounded-[40px] border ${
                    index === 1 ? "bg-blue-500 text-white/80" : "border-black/10"
                  } p-8`}
                >
                  <p className={`mb-8`}>{block.title[language]}</p>
                  <p className={`mb-4`}>
                    <b className={index === 1 ? "text-white" : "text-neutral-600"}>
                      {block.description[language]}
                    </b>
                  </p>
                </div>
              ))}
            </div>
      
            <div className={`w-full flex gap-x-2`}>
              {content.additionalInfo.map((info, index) => (
                <div key={index} className={`flex-1 text-neutral-500 p-8 text-base`}>
                  {info[language]}
                </div>
              ))}
            </div>
          </div>
      
          <div className={`w-[30%] flex flex-col justify-between`}>
            <div className={`w-full bg-red-500 text-white rounded-[40px] p-8`}>
              {content.sidebar[language]}
            </div>
            <div className={`w-full h-[530px] rounded-[40px] flex flex-col justify-end items-center relative`}>
              <div className={`bg-red-500 rounded-[40px] h-[50%] w-full`}></div>
              <img
                className={`absolute bottom-10 -ml-6 scale-[1.2] w-full`}
                src={`${process.env.PUBLIC_URL}/images/eqp1.png`}
                alt="Team"
              />
              <div className={`bg-gradient-to-tr from-black/10 to-white/10 drop-shadow-2xl text-white/70 border border-white/10 shadow-2xl absolute -bottom-6 gap-x-4 py-6 p-4 rounded-[40px] backdrop-blur-xl items-center justify-center flex`}>
                <FontAwesomeIcon className={`text-3xl`} icon={faUsers} />
                <p className={`font-bold text-base`}>{content.footer[language]}</p>
              </div>
            </div>
          </div>
        </div>
      );
      
}

export default TeamWork;