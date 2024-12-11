import {motion} from "framer-motion"
const EmailUs = () => {
    const custumAnimation = (op=0,x,y,delay) => {
        return {
            initial:{opacity:op,x:x,y:y},
            whileInView:{opacity:1,x:0,y:0},
            transition:{type: "spring", stiffness: 100, damping: 15,delay:delay},
        }
    }
    return (
        <>
            <div className="w-[90%] h-[250px] md:h-[400px]  md:mb-20 md:mt-20">

                <motion.div {...custumAnimation(0,0,'100%')} className="w-full md:rounded-[50px] rounded-3xl bg-red-500 h-full  flex flex-col md:p-20 p-5 text-white relative overflow-hidden">
                    <motion.img {...custumAnimation(0,0,'100%',0.4)} className="absolute bottom-0 -right-[40%] md:right-0  h-full  w-auto" alt='img' src={process.env.PUBLIC_URL+'/images/eco.png'}/>
                    <motion.div className="h-[50%] w-full">
                        <h1 className="md:w-[45%] w-[65%] text-xl md:text-4xl font-bold">Recevez les actus et soyez averti des événements à venir.</h1>
                    </motion.div>

                    <div className="h-[50%] flex items-end">
                        <motion.div {...custumAnimation(0,0,'100%',0.3)} className="md:w-[60%] w-[75%] md:pl-8 h-[60%] pl-1 flex items-center justify-center bg-white rounded-2xl md:rounded-[30px]">
                            <input  className="w-[80%] placeholder:text-neutral-300 text-[9px] outline-none text-neutral-900" placeholder="Saisissez votre adresse e-mail ici"/>
                            <div className="w-[20%] flex items-center justify-end pr-2 h-full py-2">
                                <motion.button {...custumAnimation(0,0,'100%',0.5)} className="bg-red-500 h-full md:rounded-[23px] rounded-xl text-[10px] md:text-base px-2 md:px-4">S'abonner</motion.button>
                            </div>
                        </motion.div>
                    </div>
                    <p className="w-full bottom-2 md:absolute left-0 text-white/40 text-[10px] text-center hidden  ">
                    Nous allons vous envoyer toutes les informations liées à votre parcours en tant que grand étudiant(e) ou, si votre enfant étudie dans notre école, à son expérience à les Écoles La Tour Eiffel.</p>
                </motion.div>


            </div>
        </>
    )
}
export default EmailUs