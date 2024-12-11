import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const MobileStckMenu = ({ visible, onOpen }) => {
    // Animation variants for the container
    const menuVariants = {
        hidden: { y: '-100%', opacity: 0, scale: 0.9 },
        visible: { 
            y: 0, 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.25, ease: [0.25, 1, 0.5, 1] }
        },
        exit: { y: '-100%', opacity: 0, transition: { duration: 0.3 } },
    };

    // Animation variants for the logo (slide from the left)
    const logoVariants = {
        hidden: { x: '-50%', opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1, 
            transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1], delay: 0.1 }
        },
    };

    // Animation variants for the menu bars (slide from the right)
    const barsVariants = {
        hidden: { x: '50%', opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1, 
            transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1], delay: 0.1 }
        },
    };

    return (
        <motion.div
            className="top-0 fixed w-full p-4 bg-gradient-to-b from-black/70 pb-7 to-transparent  md:hidden flex items-baseline justify-center z-40"
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
            exit="exit"
            variants={menuVariants}
        >
            {/* Logo with slide-in from the left */}
            <motion.div className="w-[50%]" variants={logoVariants}>
                <img src={`${process.env.PUBLIC_URL}/logos/logo1.png`} className="h-10" alt="logo" />
            </motion.div>
            
            {/* Menu bars icon with slide-in from the right */}
            <motion.div className="w-[50%] flex flex-row-reverse" variants={barsVariants}>
                <FontAwesomeIcon 
                    onClick={onOpen} 
                    icon={faBars} 
                    className="text-custom-red text-2xl cursor-pointer text-white" 
                />
            </motion.div>
        </motion.div>
    );
};

export default MobileStckMenu;