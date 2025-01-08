import CyclInterface from "../Models/Cycles/CyclInterface";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsHome } from '../redux(toolKit)/slices/isHomeSlice';


  
const Cycles = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsHome(false));
  }, [dispatch]);
    return(
        <div className='w-screen py-20 mb-40 flex flex-col items-center justify-center  z-0 overflow-hidden relative'>
            <div className='w-full lg:h-[30px]'></div>
            <CyclInterface/>
        </div>
    )
}
export default Cycles;