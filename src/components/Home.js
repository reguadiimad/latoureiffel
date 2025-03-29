import '../resources/style/home.scss';
import Presontation from '../Models/Home/Presnetion';
import ParallaxImage from '../Models/Home/ParallexImages';
import Paneau from '../Models/Home/Paneau';
import EducationStages from '../Models/Home/EductionStages';
import NouvellesAct from '../Models/Home/NouvellesAct';
import NewsEvents from '../Models/Home/NewsEvents';
import GalleryPrev from '../Models/Home/GalleryPrev';
import EmailUs from '../Models/Home/EmailUs';
import {motion} from "framer-motion";
import { useDispatch } from 'react-redux';
import { setIsHome } from '../redux(toolKit)/slices/isHomeSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setPageIndex } from '../redux(toolKit)/slices/pageIndexSlice';




export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsHome(true));
  }, [dispatch]);

  const {pageIndex}=useSelector((state)=>state.pageIndex);
  useEffect(() => {
    dispatch(setPageIndex(0));
  }, [pageIndex]);

  return (
    <>
    
      <motion.div initial={{scale:(window.innerWidth <= 1024?0.5:1),opacity:0}} whileInView={{scale:1,opacity:1,y:0}} transition={{type:"spring",damping:10,duration:0.5}} className="home w-screen h-screen relative flex items-center justify-center text-neutral-900 pt-7">
        <Presontation/>
        <div className="lg:w-[40%]"></div>
        <ParallaxImage/>
      </motion.div>

      <div className="w-screen relative flex flex-col items-center">
   
        <Paneau/>
        <EducationStages/>
        <NouvellesAct/>
        <NewsEvents/>
        <GalleryPrev/>
        <EmailUs/>
      </div>
     
    </>
  );
}
