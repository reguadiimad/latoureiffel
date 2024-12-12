import {motion} from "framer-motion"
const GalleryPrev = () => {
    const custumAnimation = (op=0,x,y,delay) => {
        return {
            initial:{opacity:op,x:x,y:y},
            whileInView:{opacity:1,x:0,y:0},
            transition:{type: "spring", stiffness: 100, damping: 15,delay:delay},
        }
      }
    return(
        <>
            <div className="w-[90%]  flex flex-col lg:mt-10 md:-mt-10 -mt-20">
                <motion.p {...custumAnimation(0,'-80%',0,0)} className="text-sm md:text-lg lg:text-2xl text-neutral-300 mt-10">Nous n'avons pas manqué le moment.</motion.p>
                <div className="w-full flex">
                <motion.h1 {...custumAnimation(0,'-80%',0,0.2)} className="text-4xl md:text-7xl lg:text-8xl w-[60%] text-blue-500 font-bold mt-2">
                Venez nous voir à la Galerie.
                </motion.h1>
                <div className="w-[40%] flex justify-end items-end">
                    <motion.button {...custumAnimation(0,0,'100%',0.2)} className="bg-red-500 mb-2  p-2 md:p-4 md:px-6 md:text-xl rounded-[40px] z-40 text-white font-semibold">Découvrer plus</motion.button>
                </div>
                </div>     
            </div>

            <div  className="overflow-hidden w-full scale-90  -mt-10 relative zaz">
                <div className="w-[200%] md:w-[300%] lg:w-[200%] gall flex">
                    <div className="w-[100%] animate-scroll flex items-center justify-center">
                    <div className="w-[100%] md:h-[550px] h-[350px] flex items-center justify-center gap-x-4 mb-10 mt-10">
                <div className="w-[20%] h-full flex items-center justify-center flex-col gap-y-4">
                    <img src={process.env.PUBLIC_URL+'/gallery/gal9.jpg'} alt='img' className="w-full h-[35%] rounded-[40px] object-cover"/>
                    <img src={process.env.PUBLIC_URL+'/gallery/gal11.jpg'} alt='img' className="w-full h-[45%] rounded-[40px] object-cover"/>
                </div>
                <div className="w-[20%] h-full  flex items-center justify-center">
                   <img src={process.env.PUBLIC_URL+'/gallery/gal3.jpg'} alt='img' className="w-full h-[95%] rounded-[40px] object-cover"/>
                </div>
                <div className="w-[20%] h-full flex items-center justify-center flex-col gap-y-4">
                    <img src={process.env.PUBLIC_URL+'/gallery/gal2.jpg'} alt='img' className="w-full h-[35%] rounded-[40px] object-cover"/>
                    <img src={process.env.PUBLIC_URL+'/gallery/gal4.jpg'} alt='img' className="w-full h-[45%] rounded-[40px] object-cover"/>
                </div>
                <div className="w-[20%] h-full  flex items-center justify-center">
                    <img src={process.env.PUBLIC_URL+'/gallery/gal1.jpg'} alt='img' className="w-full h-full rounded-[40px] object-fill"/>
                </div>
                <div className="w-[20%] h-full flex items-center justify-center flex-col gap-y-4">
                    <img src={process.env.PUBLIC_URL+'/gallery/gal5.jpg'} alt='img' className="w-full h-[50%] rounded-[40px] object-cover"/>
                    <img src={process.env.PUBLIC_URL+'/gallery/gal6.jpg'} alt='img' className="w-full h-[30%] rounded-[40px] object-cover"/>
                </div>
                <div className="w-[20%] h-full  flex items-center justify-center">
                    <img src={process.env.PUBLIC_URL+'/gallery/gal8.jpg'} alt='img' className="w-full h-[95%] rounded-[40px] object-cover"/>
                </div>
                <div className="w-[20%] h-full flex items-center justify-center flex-col gap-y-4">
                    <img src={process.env.PUBLIC_URL+'/gallery/gal12.jpg'} alt='img' className="w-full h-[35%] rounded-[40px] object-cover"/>
                    <img src={process.env.PUBLIC_URL+'/gallery/gal13.jpg'} alt='img' className="w-full h-[45%] rounded-[40px] object-cover"/>
                </div>
                </div>
            </div>
                <div className="w-[100%] animate-scroll flex items-center justify-center">
                    <div className="w-[98%] md:h-[550px] h-[350px] flex items-center justify-center gap-x-4 mb-10 mt-10">
                        <div className="w-[20%] h-full flex items-center justify-center flex-col gap-y-4">
                            <img src={process.env.PUBLIC_URL+'/gallery/gal9.jpg'} alt='img' className="w-full h-[35%] rounded-[40px] object-cover"/>
                            <img src={process.env.PUBLIC_URL+'/gallery/gal11.jpg'} alt='img' className="w-full h-[45%] rounded-[40px] object-cover"/>
                        </div>
                        <div className="w-[20%] h-full  flex items-center justify-center">
                        <img src={process.env.PUBLIC_URL+'/gallery/gal3.jpg'} alt='img' className="w-full h-[95%] rounded-[40px] object-cover"/>
                        </div>
                        <div className="w-[20%] h-full flex items-center justify-center flex-col gap-y-4">
                            <img src={process.env.PUBLIC_URL+'/gallery/gal2.jpg'} alt='img' className="w-full h-[35%] rounded-[40px] object-cover"/>
                            <img src={process.env.PUBLIC_URL+'/gallery/gal4.jpg'} alt='img' className="w-full h-[45%] rounded-[40px] object-cover"/>
                        </div>
                        <div className="w-[20%] h-full  flex items-center justify-center">
                            <img src={process.env.PUBLIC_URL+'/gallery/gal1.jpg'} alt='img' className="w-full h-full rounded-[40px] object-fill"/>
                        </div>
                        <div className="w-[20%] h-full flex items-center justify-center flex-col gap-y-4">
                            <img src={process.env.PUBLIC_URL+'/gallery/gal5.jpg'} alt='img' className="w-full h-[50%] rounded-[40px] object-cover"/>
                            <img src={process.env.PUBLIC_URL+'/gallery/gal6.jpg'} alt='img' className="w-full h-[30%] rounded-[40px] object-cover"/>
                        </div>
                        <div className="w-[20%] h-full  flex items-center justify-center">
                            <img src={process.env.PUBLIC_URL+'/gallery/gal8.jpg'} alt='img' className="w-full h-[95%] rounded-[40px] object-cover"/>
                        </div>
                        <div className="w-[20%] h-full flex items-center justify-center flex-col gap-y-4">
                            <img src={process.env.PUBLIC_URL+'/gallery/gal12.jpg'} alt='img' className="w-full h-[35%] rounded-[40px] object-cover"/>
                            <img src={process.env.PUBLIC_URL+'/gallery/gal13.jpg'} alt='img' className="w-full h-[45%] rounded-[40px] object-cover"/>
                        </div>
                    </div>
                </div>
                </div>
                <div className="zaza w-full md:h-full h-[90%] absolute md:top-0 top-[10%] left-0 flex items-center justify-center flex-col bg-white/10 backdrop-blur-lg gap-y-3 galCover">
                    <p className="text-white/60  md:text-xl">Une galerie qui immortalise les élèves
                    </p>
                    <h1 className="md:text-8xl text-4xl text-white/85 font-extrabold">
                        +12 000 Photos
                    </h1>
                    <button className="bg-black/20 p-2 md:p-4 md:px-6 md:text-xl rounded-[40px] text-white font-semibold shadow-lg">
                        Découvrir plus
                    </button>
                    <p className="text-center text-[9px] md:text-sm text-black/30 md:text-white/40 w-[80%] absolute bottom-24 -mb-3 ">Aux Écoles La Tour Eiffel, nous avons créé un espace spécial pour préserver les souvenirs qui marquent la vie de nos élèves. C’est un endroit où les moments partagés, les événements marquants et les instants de joie restent vivants dans nos mémoires.</p>
                </div>
                
            </div>
           
        </>
    )
}
export default GalleryPrev;