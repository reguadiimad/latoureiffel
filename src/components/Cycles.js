import CyclInterface from "../Models/Cycles/CyclInterface";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsHome } from '../redux(toolKit)/slices/isHomeSlice';
import Navigation from "../Models/Globe/Navigation";
import Materneelle from "../Models/Cycles/Maternelle";


  
const Cycles = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsHome(false));
  }, [dispatch]);
  const menuList = {
    fr: ["Maternelle", "Primaire", "Collège", "Lycée"], // Corrected French
    ar: ["روضة", "ابتدائي", "إعدادي", "ثانوي"], // Arabic translations
    en: ["Preschool", "Primary", "Middle School", "High School"], // English translations
};


    return(
        <div className='w-screen py-20 mb-40 flex flex-col items-center justify-center  z-0 overflow-hidden relative'>
            <div className='w-full lg:h-[30px]'></div>
            <CyclInterface/>
            <Navigation menuList={menuList}/>
            <Materneelle/>
        </div>
    )
}
export default Cycles;