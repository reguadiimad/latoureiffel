
import React, { useState, useEffect } from 'react';
import { motion} from 'framer-motion';



export default function EducationStages() {
  

    const [lastScrollY, setLastScrollY] = useState(0);
    const [direction, setDirection] = useState(0); 

    const animationProps = (delay,sacled=true) => ({
      initial: { opacity: 0, y: -50, scale: sacled?0.5:1 },
      whileInView: { opacity: 1, y: 0, scale: 1 },
      transition: { type: 'spring', stiffness: 150, damping: 20, delay },
      viewport: { once: false, amount: "some" },
    });
    
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY > lastScrollY ? 0.7 : -0.7; // Determine scroll direction
        setDirection(scrollDirection);
        setLastScrollY(currentScrollY);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);

  
    return (
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{ type: 'spring' }} className='w-[90%] relative flex items-center flex-col  py-5 md:py-28 mb-10  bg-red-500 rounded-[50px] roundedd'>

        <div className='w-full flex p-3 items-center flex-col'>
          <motion.h1 className='text-lg md:text-2xl text-blue-500' {...animationProps(0.1)}>
            <b>Pourquoi</b>
          </motion.h1>

          <motion.h1 className='text-3xl md:text-7xl text-center text-white mb-4' {...animationProps(0.2)}>
            <b>La Tour Eiffel</b>
          </motion.h1>

          <motion.p className='md:w-[70%] md:text-lg lg:text-2xl text-center text-white/90' {...animationProps(0.3)}>
            L'école La Tour Eiffel offre une éducation axée sur le succès et l'innovation pédagogique.
          </motion.p>

          <motion.p className='md:block hidden md:w-[85%] tiny text-center text-white/60 lg:text-base' {...animationProps(0.5)}>
            Cette vision met en avant une approche unique et inspirante pour l'épanouissement des élèves.
          </motion.p>
        </div>

        <motion.div className=' grid grid-cols-2 grid-rows-2  md:w-full lg:w-[85%] md:flex md:items-center md:justify-center lg:p-4 mt-10 text-neutral-900/50' {...animationProps(0.3,false)}>

          <span style={{transform: `translateY(${direction * (0.8 + 1) * 10}px)`}} className='md:flex-1 w-[90%] mx-2 md:mx h-72 md:h-[450px] lg:h-[600px] roundedd  lg:mx-3 overflow-hidden relative boxyy '>
            <img className='object-cover h-full w-full' src={process.env.PUBLIC_URL + '/images/imk1.jpg'} alt='Maternelle' />
            <div  className='w-[90%] py-4 lg:py-0 lg:h-[40%] absolute bottom-4 left-[5%] bg-white/50 backdrop-blur-lg rounded-3xl z-20 flex items-center justify-center flex-col boxy'>
              <span className='px-4 py-1 bg-black/10 rounded-3xl text-white'>Maternelle</span>
              <h1 className='lg:text-5xl md:text-4xl text-3xl text-blue-500 md:my-2 font-semibold flex flex-col justify-center items-center'>2-5<p className='lg:text-xl text-lg -mt-2 font-bold text-white'>ans</p></h1>
              <p className='w-[90%] hidden lg:block  text-center  xl:text-base'>
                Éveiller la curiosité et stimuler les capacités expressives.
              </p>
              <h5 className="w-[90%] hidden opacity-0 text-center tiny lg:text-base">L'école maternelle assure un accueil attentif pour accompagner chaque enfant dans sa découverte du monde scolaire.</h5>
              <button className="underline text-white/90 hidden">Lire plus</button>
            </div>
          </span>
  
          <span  className='md:flex-1 w-[90%] mx-2 h-72 md:h-[450px] lg:h-[600px]  roundedd md:mx-3 overflow-hidden relative boxyy'>
            <div style={{transform: `translateY(${direction * (1.3 + 1) * 10}px)`}} className='w-full mb-5 h-[50%] overflow-hidden relative'>
              <div  className='w-[90%] lg:h-[80%] py-4 lg:py-0  absolute bottom-4 left-[5%] bg-white/50 backdrop-blur-lg rounded-3xl z-20 flex items-center justify-center flex-col boxy'>
                <span className='px-4 py-1 bg-black/10 rounded-3xl text-white'>Primaire</span>
                <h1 className='lg:text-5xl md:text-4xl text-3xl text-blue-500 my-2 font-semibold flex flex-col justify-center items-center'>6-10<p className='md:text-xl text-lg -mt-2 text-white font-bold'>ans</p></h1>
                <p className='w-[90%] hidden lg:block text-center text-neutral-900/50 text-base'>
                  Acquérir les bases essentielles pour l’avenir.
                </p>
              </div>
              <img className='object-cover h-full' src={process.env.PUBLIC_URL + '/images/imk22.jpg'} alt='Primaire' />
            </div>
            <div style={{transform: `translateY(${direction * (1.5 + 1) * 10}px)`}} className='w-full mt-5 bg-white h-[50%] overflow-hidden'>
              <img className='object-cover w-full' src={process.env.PUBLIC_URL + '/images/imk2.jpg'} alt='Primaire Details' />
            </div>
          </span>
  
          <span style={{transform: `translateY(${direction * (2 + 1) * 10}px)`}} className='md:flex-1 mt-4  w-[90%] mx-2 h-72 md:h-[450px] lg:h-[600px]  roundedd md:mx-3 overflow-hidden relative boxyy'>
            <img className='object-cover h-full w-full' src={process.env.PUBLIC_URL + '/images/imk3.jpg'} alt='Collège' />
            <div className='w-[90%] py-4 lg:py-0 lg:h-[40%] absolute bottom-4 left-[5%] bg-white/50 backdrop-blur-lg rounded-3xl z-20 flex items-center justify-center flex-col boxy'>
              <span className='px-4 py-1 bg-black/10 rounded-3xl text-white'>Collège</span>
              <h1 className='lg:text-5xl md:text-4xl text-3xl text-blue-500 my-2 font-semibold flex flex-col justify-center items-center'>11-14<p className='md:text-xl text-lg -mt-2 text-white font-bold'>ans</p></h1>
              <p className='w-[90%] hidden lg:block text-center text-neutral-900/50 text-base'>
                Établir des fondations solides pour demain.
              </p>
              <h5 className="w-[90%] hidden opacity-0 text-center tiny xl:text-base">Les élèves suivent un parcours adapté, préparant à l'excellence scolaire et personnelle.</h5>
              <button className="underline text-white hidden">Lire plus</button>
            </div>
          </span>
  
          <span style={{transform: `translateY(${direction * -(1.7 + 1) * 10}px)`}} className='md:flex-1 mt-4 w-[90%] mx-2 h-72 md:h-[450px] lg:h-[600px]  roundedd md:mx-3  overflow-hidden relative boxyy'>
            <img className='object-cover h-full w-full' src={process.env.PUBLIC_URL + '/images/imk4.jpg'} alt='Lycée' />
            <div className='w-[90%] py-4 lg:py-0 lg:h-[40%] absolute bottom-3 lg:bottom-4 left-[5%] bg-white/50 backdrop-blur-lg rounded-3xl z-20 flex items-center justify-center flex-col boxy'>
              <span className='px-4 py-1 bg-black/10 rounded-3xl text-white'>Lycée</span>
              <h1 className='lg:text-5xl md:text-4xl text-3xl text-blue-500 my-2 font-semibold flex flex-col justify-center items-center'>15-18<p className='md:text-xl text-lg -mt-2 text-white font-bold'>ans</p></h1>
              <p className='w-[90%] hidden lg:block text-center text-neutral-900/50 text-base'>
                Préparer à des réussites supérieures et durables.
              </p>
              <h5 className="w-[90%] hidden opacity-0 text-center tiny xl:text-base">Un cadre structuré pour accompagner les élèves dans leurs ambitions scolaires et personnelles.</h5>
              <button className="underline text-white/90 hidden">Lire plus</button>
            </div>
          </span>
        </motion.div>

        <motion.section {...animationProps(0.3,false)} className='flex flex-col justify-center items-center mt-4 md:mt-12 text-white/60 text-justify text-base'>
        <p className='w-[89%] md:mb-2 mt-4 text-[9px] md:text-base'><b>"Les Écoles La Tour Eiffel" </b>se démarquent comme l'une des rares institutions éducatives au Maroc certifiées ISO 9001:2015, témoignant de leur engagement envers l'excellence. Adoptant une approche pédagogique innovante, elles vont au-delà de l’éducation classique en cultivant les talents et le potentiel de chaque enfant.
Grâce à des partenariats avec des institutions de renom, telles que l'Institut Cervantes, l'Institut Français du Maroc et l'Ambassade de France, elles offrent une immersion unique dans les cultures hispanique et francophone. Leur programme en anglais, certifié Cambridge English, garantit également un enseignement de qualité internationale.

</p>
            <img className='md:h-32 h-12 w-[90%] object-cover opacity-70 md:-mb-12  lg:-mb-12 md:mt-5 lg:mt-10  overflow-auto' alt='img' src={process.env.PUBLIC_URL+'/images/portonariat.png'}/>
        </motion.section>
  
      </motion.div>
    )
}
