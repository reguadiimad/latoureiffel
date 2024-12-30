import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../redux(toolKit)/slices/contentSlice";

const Menu = ({ visible }) => {
    const isHome = useSelector((state) => state.isHome);
    const dispatch = useDispatch();
    const [linked, setlinked] = useState(0);
    const [langClicked, setLangClicked] = useState(false);
    const { language } = useSelector((state) => state.presntion); // Assuming Redux store
    const menuList = {
        fr: ["Accueil", "À propos", "Cycles", "Services", "Actualités", "Galerie", "Contact", "Inscription"],
        en: ["Home", "About", "Cycles", "Services", "News", "Gallery", "Contact", "Registration"],
        ar: ["الرئيسية", "حولنا", "الدورات", "الخدمات", "الأخبار", "المعرض", " اتصل بنا", "التسجيل"],
    };
    const routes = ["/", "/about", "/cycles", "/services", "/news", "/gallery", "/contact", "/registration"];

    const [showMenu, setShowMenu] = useState(true); // State to toggle menu visibility
    const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowMenu(false); // Hide menu when scrolling down
            } else {
                setShowMenu(true); // Show menu when scrolling up
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const dropAndPopAnimation = () => ({
        initial: { y: "-100%",  scale: 0.5 },
        animate: { y: 0, scale: 1 },
        exit: { y: "-100%", scale: 0.5 },
        transition: { type: "spring",damping: 13 },
    });

    const currentMenuList = menuList[language] || menuList["fr"];

    const langButtons = (lang) => {
        if (lang === "ar") {
            return (
                <>
                    <button onClick={() => dispatch(setLanguage("fr"))}>fr</button>
                    <button onClick={() => dispatch(setLanguage("en"))}>en</button>
                </>
            );
        } else if (lang === "fr") {
            return (
                <>
                    <button onClick={() => dispatch(setLanguage("en"))}>en</button>
                    <button onClick={() => dispatch(setLanguage("ar"))}>ar</button>
                </>
            );
        } else {
            return (
                <>
                    <button onClick={() => dispatch(setLanguage("fr"))}>fr</button>
                    <button onClick={() => dispatch(setLanguage("ar"))}>ar</button>
                </>
            );
        }
    };

    return (
        <>
            <AnimatePresence>
                {visible && showMenu && (
                    <motion.div
                        className="md:w-full fixed top-0 left-0 flex items-center justify-center bg-gradient-to-b from-black/10 to-transparent pt-5 pb-10 lg:text-base md:text-sm sm:w-0 md:overflow-visible sm:overflow-hidden nav z-50"
                        {...dropAndPopAnimation()}
                    >
                        <motion.div
                            {...dropAndPopAnimation()}
                            className="xl:w-[58%] md:w-[85%] md:block p-2.5 bg-gradient-to-tr from-white/10 to-white/30 blurey backdrop-blur-2xl border border-white/30 rounded-full flex items-center justify-center shadow-xl"
                        >
                            <div className="w-[100%] flex items-center justify-between relative sm:hidden md:flex">
                                <motion.span
                                    whileHover={{ opacity: 0.5, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{ width: 100 / currentMenuList.length + "%", left: linked * (100 / currentMenuList.length) + "%" }}
                                    className="absolute bg-red-500/90 h-full rounded-full flash"
                                />
                                {currentMenuList.map((text, index) => (
                                    <Link
                                        to={routes[index]}
                                        key={index}
                                        style={{ width: 100 / currentMenuList.length + "%" }}
                                        className={`text-center z-40  xl:py-5 md:py-4 lg:text-base md:text-sm ${
                                            language === "ar" ? "lg:text-lg" : "lg:text-base"
                                        } ${linked === index ? "text-white/90" : "text-neutral-900/90 hover:animate-pulse mix-blend-difference"}`}
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

            <div className="fixed bottom-0 left-0 w-52 h-52 blur-3xl scale-150 z-50">
                <div className="w-44 h-44 bg-black/50 rounded-full absolute -bottom-16 -left-32 scale-150"></div>
            </div>
            <div className="w-[4%] scale-110 gap-y-2 pb-5 bottom-0 left-0 fixed flex flex-col items-center language ease-in duration-200 z-50">
                <AnimatePresence>
                    {langClicked && (
                        <motion.div
                            key="lang-menu"
                            initial={{y:50,scale:0.5}} animate={{y:0,scale:1}} exit={{y:80,scale:0.2}} duration={200}  transition={{type:"spring",damping:13,duration:'0.1s'}}
                            className="w-10  text-white/70 bg-black/10 backdrop-blur-lg duration-0 rounded-full flex flex-col items-center justify-center gap-y-2 py-2"
                        >
                            {langButtons(language)}
                        </motion.div>
                    )}
                </AnimatePresence>
                <button
                    onClick={() => setLangClicked(!langClicked)}
                    className="text-white/70 bg-black/10 rounded-full w-10 h-10 backdrop-blur-lg font-semibold hover:bg-black/5"
                >
                    {language}
                </button>
            </div>
        </>
    );
};

export default Menu;
