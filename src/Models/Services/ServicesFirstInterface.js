import { useSelector } from "react-redux";
import translations from "./ServicesDatas/firtsInterfaceData.json"; 

const ServicesFirstInterface = () => {
  const { language } = useSelector((state) => state.presntion); 
  const content = translations[language] || translations["fr"];
  const isArabic = language === "ar"; 

  return (
    <>
    <div className={`w-[90%] text-center lg:text-left lg:flex  justify-center mt-32 xl:mt-24 lg:mt-10 text-neutral-900 ${isArabic &&"flex-row-reverse lg:text-right"} `}>
        <div className={`w-full lg:w-[60%] ${isArabic && 'flex flex-col lg:items-end'}`}>
          <p className="text-neutral-500">{content.services}</p>
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-7xl xl:text-${isArabic ? "9xl lg:text-8xl text-4xl" : "8xl"}`}>
            <b>{content.title}</b>
          </h1>
          <p className={`text-neutral-500 lg:w-[80%] xl:text-${isArabic ? "xl" : "lg"}`}>
            {content.description}
          </p>
          <div className={`hidden lg:flex items-center py-16 text-neutral-500 ${isArabic&&'flex-row-reverse'}`}>
            <p className={` xl:text-${isArabic ? "xl pl-6" : "lg pr-6"}`}>{content.mobileApp}</p> 
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <p className={`px-6 xl:text-${isArabic ? "xl" : "lg"}`}>{content.transport}</p> 
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p className={`px-6 xl:text-${isArabic ? "xl" : "lg"}`}>{content.canteen}</p> 
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <p className={`px-6 xl:text-${isArabic ? "xl" : "lg"}`}>{content.infirmary}</p> 
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p className={`px-6 xl:text-${isArabic ? "xl" : "lg"}`}>{content.clubs}</p> 
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <p className={`xl:text-${isArabic ? "xl pr-6 " : "lg pl-6 "}`}>{content.other}</p>
          </div>
          <div className="w-full lg:hidden text-[10px] sm:text-xs flex my-3 mb-6 items-center justify-center text-neutral-500">
            {content.mobileApp}
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mx-1"></div>
            {content.transport}
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mx-1"></div>
            {content.infirmary}
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mx-1"></div>
            {content.clubs}
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mx-1"></div>
            {content.other}



          </div>
          <button className="lg:block hidden bg-blue-500 px-5 py-3  text-xl rounded-3xl text-white">
            <b>{content.discoverMore}</b>
          </button>
        </div>
        <div className=" w-full lg:w-[40%]  lg:bg-transparent flex items-center justify-center lg:justify-end  rounded-[50%]  h-auto relative">
          <img className="w-full lg:w-full lg:h-auto scale-105 sm:w-auto sm:h-96 md:h-[500px]  lg:scale-125" src={process.env.PUBLIC_URL + '/images/'+content.image} alt="Services" />
        </div>
        <button className="px-4 lg:hidden py-2 bg-blue-500 text-base md:text-lg md:mt-8 rounded-3xl mt-4 mb-14 text-white">
            <b>{content.discoverMore}</b>
          </button>
      </div>

    </>
  );
}

export default ServicesFirstInterface;
