import { faChalkboardTeacher, faClose, faEnvelope, faGraduationCap, faHome, faInfoCircle, faNewspaper, faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ visble, onClose }) => {
    const [active, setActive] = useState(0);

    const navLinks = [
        { icon: faHome, label: 'Accueil', href: '/' },
        { icon: faInfoCircle, label: 'À propos', href: '/about' },
        { icon: faGraduationCap, label: 'Cycles', href: '/cycles' },
        { icon: faChalkboardTeacher, label: 'Services', href: '/services' },
        { icon: faNewspaper, label: 'Actualités', href: '/news' },
        { icon: faPhotoFilm, label: 'Galerie', href: '/gallery' },
        { icon: faEnvelope, label: 'Contact', href: '/contact' },
    ];

   // Define optimized animation variants with faster transitions
const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.1, ease: [0.25, 1, 0.5, 1] } },
    exit: { opacity: 0, transition: { duration: 0.08, ease: [0.25, 1, 0.5, 1] } },
};

const menuVariants = {
    hidden: { x: "-100%" },
    visible: {
        x: '0%',
        transition: { duration: 0.25, ease: [0.25, 1, 0.5, 1] }
    },
    exit: { x: "-100%", transition: { duration: 0.2, ease: [0.25, 1, 0.5, 1] } },
};

const closeIconVariants = {
    hidden: { opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.15, ease: [0.25, 1, 0.5, 1] }
    },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.12, ease: [0.25, 1, 0.5, 1] } },
};


    return (
        <AnimatePresence>
            {visble && (
                <motion.div
                    className="w-full h-screen bg-black/15 fixed top-0 left-0 backdrop-blur-xl z-50 flex items-center lg:hidden navMobile mobile"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {/* Close Icon */}
                    <motion.div
                        variants={closeIconVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-6 right-6 text-4xl text-white cursor-pointer"
                        onClick={onClose}
                    >
                        <FontAwesomeIcon icon={faClose} />
                    </motion.div>

                    {/* Sliding Menu */}
                    <motion.div
                        className="w-[80%] h-full bg-custom-red shadow-3xl flex items-center justify-center"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <nav className="w-[85%] h-[90%]">
                            <img src={`${process.env.PUBLIC_URL}/logos/logo1.png`} className="md:h-24 h-16" alt="logo" />
                            <p className="md:mt-6 text-white/50 mt-1.5 text-xs md:scale-100">
                                Veuillez choisir un lien ci-dessous pour naviguer sur le site officiel de l'école.
                            </p>
                            <div className="mt-20 text-lg liens">
                                {navLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        to={link.href}
                                        className={`lien flex text-xl mb-4 items-baseline p-2 my-3 hover:animate-pulse hover:text-white ${index === active ? 'text-white' : 'text-white/70'}`}
                                        onClick={() => setActive(index)}
                                    >
                                        <FontAwesomeIcon className="w-8 mr-4" icon={link.icon} />
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                            <div className="inscription w-[90%] flex flex-row-reverse p-2 mt-32">
                                <button className="p-4 bg-white rounded-lg text-custom-red ml-6">Inscription</button>
                                <button className="text-white/50 underline" onClick={onClose}>
                                    Retourner
                                </button>
                            </div>
                        </nav>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
