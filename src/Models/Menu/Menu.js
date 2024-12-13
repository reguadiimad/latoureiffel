import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux"; // Assuming language state is managed via Redux

const Menu = ({ visible }) => {

    const dropAndPopAnimation = (stiffness = 100, damping = 14, duration = 0.1) => ({
        initial: { y: -200, opacity: 0, scale: 0.5 },
        animate: { y: 0, opacity: 1, scale: 1 },
        exit: { y: -100, opacity: 0, scale: 0.1 },
        transition: { type: "spring", stiffness, damping, duration, ease: 'backInOut' },
    });

    const [linked, setlinked] = useState(0);

    // Get the selected language from Redux store (or local state if using another approach)
    const { language } = useSelector((state) => state.presntion); 
    // Make sure your Redux store has the `language` state

    // Define menu list for each language
    const menuList = {
        fr: ["Accueil", "À propos", "Cycles", "Services", "Actualités", "Galerie", "Contact", "Inscription"],
        en: ["Home", "About", "Cycles", "Services", "News", "Gallery", "Contact", "Registration"],
        ar: ["الرئيسية", "حولنا", "الدورات", "الخدمات", "الأخبار", "المعرض", " اتصل بنا", "التسجيل"]
    };

    // Use the menu list for the current language
    const currentMenuList = menuList[language] || menuList['fr'];  // Default to French if no language is set

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="md:w-full fixed top-0 left-0 flex items-center justify-center bg-gradient-to-b from-black/40 to-transparent pt-5 pb-10 lg:text-base md:text-sm sm:w-0 md:overflow-visible sm:overflow-hidden nav z-50"
                    initial="initial" animate="animate" exit="exit"
                >
                    <motion.div
                        {...dropAndPopAnimation(150, 15, 0.3)}
                        className="xl:w-[58%] md:w-[85%] md:block p-2.5 bg-white/25 blurey backdrop-blur-xl border border-white/70 rounded-full flex items-center justify-center shadow-xl"
                    >
                        <div className="w-[100%] flex items-center justify-between relative sm:hidden md:flex">
                            <motion.span
                                whileHover={{ opacity: 0.5, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ width: 100 / currentMenuList.length + "%", left: linked * (100 / currentMenuList.length) + "%" }}
                                className="absolute bg-red-500/90 h-full rounded-full shadow-lg flash"
                            />
                            {currentMenuList.map((text, index) => (
                                <Link
                                    key={index}
                                    style={{ width: 100 / currentMenuList.length + "%" }}
                                    className={`text-center z-40 xl:py-5 md:py-4 lg:text-base md:text-sm ${linked === index ? "text-white/90" : "text-neutral-900 hover:animate-pulse"}`}
                                    onClick={() => setlinked(index)}
                                >
                                    {text}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Menu;
