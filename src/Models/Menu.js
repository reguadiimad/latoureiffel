import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const Menu = ({ visible }) => {

    const dropAndPopAnimation = (stiffness = 120, damping = 12, duration = 0.1) => ({
        initial: { y: -100, opacity: 0, scale: 0.5 },
        animate: { y: 0, opacity: 1, scale: 1 },
        exit: { y: -100, opacity: 0, scale: 0.5 },
        transition: { type: "spring", stiffness, damping, duration, ease: "cubic-bezier(0.175, 0.885, 0.32, 1.15)"},
    });

    const [linked, setlinked] = useState(0);
    const menuList = ["Accueil", "À propos", "Cycles", "Services", "Actualités", "Galerie", "Contact", "Inscription"];

    return (
        <AnimatePresence>
            {visible && (
                <motion.div className="md:w-full fixed top-0 left-0 flex items-center justify-center bg-gradient-to-b from-black/20 to-transparent pt-5 lg:text-base md:text-sm sm:w-0 md:overflow-visible sm:overflow-hidden nav" initial="initial" animate="animate" exit="exit">
                    <motion.div {...dropAndPopAnimation(150, 15, 0.3)} className="xl:w-[58%] md:w-[85%] md:block p-2.5 bg-white/40 backdrop-blur-lg border border-white/70 rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-[100%] flex items-center justify-between relative sm:hidden md:flex">
                            <span style={{ width: 100 / menuList.length + "%", left: linked * (100 / menuList.length) + "%" }} className="absolute bg-custom-blue h-full rounded-full shadow-lg flash"></span>
                            {menuList.map((text, index) =>
                                <Link style={{ width: 100 / menuList.length + "%" }} className={`text-center z-40 xl:py-5 md:py-4 lg:text-base md:text-sm hover:animate-pulse ${linked === index ? "text-white/90" : "text-blue-950/90"}`} key={index} onClick={() => setlinked(index)}>
                                    {text}
                                </Link>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Menu;
