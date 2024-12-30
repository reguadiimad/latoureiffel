import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { setScrollVal } from "../../redux(toolKit)/slices/scrollSlice";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import texts from "./Datas/parentEleveData.json";

const ParentEleve = ({ id }) => {
    const { language } = useSelector((state) => state.presntion); 
    const parentAndStudent = [
        {
          sectionTitle: {
            ar: "لكلٍّ منكم اهتمام خاص",
            fr: "Chaque un a son traitement",
            en: "Each one has their own treatment"
          }
        },
        {
          mainHeading: {
            ar: "الآباء والتلاميذ",
            fr: "Parent et Élève",
            en: "Parent and Student"
          }
        }
      ];
    const student = texts.studentSection;
    const parent = texts.parentSection;
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
    return (
        <>
            <div id={id} ref={motherRef} className={`w-[90%] flex items-center justify-center flex-col mt-10`}>
                <p className={`text-neutral-500 text-xl mb-2`}>{parentAndStudent[0].sectionTitle[language]}</p>
                <h1 className={`text-8xl w-[100%] text-blue-500 text-center`}>
                    <b>{parentAndStudent[1].mainHeading[language]}</b>
                </h1>
               
                <div className={`w-full flex items-stretch mt-28 gap-5`}>
      <div className={`w-[40%] py-5`}>
        <div className={`w-[100%] h-full bg-red-500 rounded-[50%] rounded-bl-3xl rounded-br-[30%] relative items-end overflow-x-hidden flex`}>
          <img className={`absolute scale-[1.19] origin-bottom`} src={process.env.PUBLIC_URL + '/images/dad.png'} alt="Parent" />
          <div className={`absolute w-[45%] bg-white/5 rounded-3xl p-5 backdrop-blur-xl top-[45%] right-[5%] text-white border border-white/10 shadow-xl`}>
            <div className={`w-full flex items-center gap-4`}>
              <FontAwesomeIcon icon={faQuoteLeft} />
              <p className={`text-base`}>{parent.quote1[language]}<br/><p className={`text-sm text-white/30`}>{parent.quote1Author[language]}</p></p>
            </div>
          </div>
          <div className={`absolute w-[45%] scale-75 bg-white/5 rounded-3xl p-5 backdrop-blur-xl bottom-[5%] left-[5%] text-white border border-white/10 shadow-xl`}>
            <div className={`w-full flex items-center gap-4`}>
              <FontAwesomeIcon icon={faQuoteLeft} />
              <p className={`text-base`}>{parent.quote2[language]}<br/><p className={`text-sm text-white/30`}>{parent.quote2Author[language]}</p></p>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-1 text-neutral-600`}>
        <p className={`text-neutral-500`}>{parent.title[language]}</p>
        <h1 className={`text-red-500 text-7xl mb-5`}><b>{parent.heading[language]}</b></h1>
        <p>{parent.description[language]}</p>
        <b>{parent.pillarsTitle[language]}</b>

        <div className={`w-full flex items-center justify-center mt-10`}>
          <div className={`w-[20%] flex items-center justify-center p-2`}>
            <div className={`w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-4xl text-white font-extrabold`}>1</div>
          </div>
          <div className={`w-[80%]`}>
            <b>{parent.pillar1.title[language]}</b>
            <p>{parent.pillar1.description[language]}</p>
          </div>
        </div>

        <div className={`w-full flex items-center justify-center mt-10`}>
          <div className={`w-[20%] flex items-center justify-center p-2`}>
            <div className={`w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-4xl text-white font-extrabold`}>2</div>
          </div>
          <div className={`w-[80%]`}>
            <b>{parent.pillar2.title[language]}</b>
            <p>{parent.pillar2.description[language]}</p>
          </div>
        </div>

        <div className={`w-full flex items-center justify-center mt-10`}>
          <div className={`w-[20%] flex items-center justify-center p-2`}>
            <div className={`w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-4xl text-white font-extrabold`}>3</div>
          </div>
          <div className={`w-[80%]`}>
            <b>{parent.pillar3.title[language]}</b>
            <p>{parent.pillar3.description[language]}</p>
          </div>
        </div>
      </div>
                </div>


                <div className={`w-full flex items-stretch mt-28 gap-10`}>
      <div className={`flex-1 text-neutral-600`}>
        <p className={`text-neutral-500`}>{student.title[language]}</p>
        <h1 className={`text-blue-500 text-7xl mt-3 mb-5`}><b>{student.heading[language]}</b></h1>
        <p>{student.description[language]}</p>
        <b>{student.keysTitle[language]}</b>

        <div className={`w-full flex items-center justify-center mt-10`}>
          <div className={`w-[20%] flex items-center justify-center p-2`}>
            <div className={`w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-4xl text-white font-extrabold`}>1</div>
          </div>
          <div className={`w-[80%]`}>
            <b>{student.key1.title[language]}</b>
            <p>{student.key1.description[language]}</p>
          </div>
        </div>

        <div className={`w-full flex items-center justify-center mt-10`}>
          <div className={`w-[20%] flex items-center justify-center p-2`}>
            <div className={`w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-4xl text-white font-extrabold`}>2</div>
          </div>
          <div className={`w-[80%`}>
            <b>{student.key2.title[language]}</b>
            <p>{student.key2.description[language]}</p>
          </div>
        </div>

        <div className={`w-full flex items-center justify-center mt-10`}>
          <div className={`w-[20%] flex items-center justify-center p-2`}>
            <div className={`w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-4xl text-white font-extrabold`}>3</div>
          </div>
          <div className={`w-[80%]`}>
            <b>{student.key3.title[language]}</b>
            <p>{student.key3.description[language]}</p>
          </div>
        </div>
      </div>

      <div className={`w-[40%] p-5`}>
        <div className={`w-[100%] h-full bg-blue-500 rounded-[50%] rounded-br-3xl rounded-bl-[30%] relative items-end overflow-x-hidden flex`}>
          <img className={`absolute scale-[1.19] origin-bottom`} src={process.env.PUBLIC_URL + '/images/kid.png'} alt="Student" />
          <div className={`absolute w-[45%] bg-white/5 rounded-3xl p-5 backdrop-blur-xl top-[42.5%] right-[5%] text-white border border-white/10 shadow-2xl`}>
            <div className={`w-full flex items-center gap-4`}>
              <FontAwesomeIcon icon={faQuoteLeft} />
              <p className={`text-base`}>{student.quote1[language]}<br/><p className={`text-sm text-white/30`}>{student.quote1Author[language]}</p></p>
            </div>
          </div>
          <div className={`absolute w-[45%] scale-[0.8] bg-white/5 rounded-3xl p-5 backdrop-blur-xl bottom-[5%] left-[9%] text-white border border-white/10 shadow-xl`}>
            <div className={`w-full flex items-center gap-4`}>
              <FontAwesomeIcon icon={faQuoteLeft} />
              <p className={`text-base`}>{student.quote2[language]}<br/><p className={`text-sm text-white/30`}>{student.quote2Author[language]}</p></p>
            </div>
          </div>
        </div>
      </div>
    </div>

            </div>
        </>
    );
};
export default ParentEleve;
