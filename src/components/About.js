import '../resources/style/home.scss';
import { useDispatch,useSelector } from 'react-redux';
import { setIsHome } from '../redux(toolKit)/slices/isHomeSlice';
import { useEffect } from 'react';
import FirstInterface from '../Models/About/FirstInterface';
import MotDeFondateur from '../Models/About/MotDeFondateur';
import Navigation from '../Models/About/Navigation';
import TeamWork from '../Models/About/TeamWork';
import Education from '../Models/About/ِEducation';
import ParentEleve from '../Models/About/ParentEleve';


const About = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsHome(false));
  }, [dispatch]);
  
  const scrollValue = useSelector((state) => state.scrollVal);
  return (
    <>
    <div className='w-screen py-20 mb-40 flex flex-col items-center justify-center overflow-scroll relative'>
      <div className='w-full h-[100px]'></div>
      <FirstInterface/>
      <Navigation/>
      <MotDeFondateur id='0'/>
      <TeamWork id='1'/>
      <Education id='2'/>
      <ParentEleve id='3'/>
    </div>
    </>
  );
};

export default About;

