import '../resources/style/home.scss';
import { useDispatch } from 'react-redux';
import { setIsHome } from '../redux(toolKit)/slices/isHomeSlice';
import { useEffect } from 'react';
import FirstInterface from '../Models/About/FirstInterface';
import MotDeFondateur from '../Models/About/MotDeFondateur';
import Navigation from '../Models/About/Navigation';

const About = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsHome(false));
  }, [dispatch]);
  window.scrollTo(0, 0);
 
  return (
    <>
    <div className='w-screen py-20 mb-40 flex flex-col items-center justify-center overflow-scroll'>
      <div className='w-full h-[100px]'></div>
      <FirstInterface/>
      <Navigation/>
      <MotDeFondateur/>

    </div>
    </>
  );
};

export default About;
