import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const TheInput = ({ value, onValueChange, name, error, type = "text", required, disabled = false,dealy=0 }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="w-full h-full flex flex-col gap-1">
      <div onFocus={() => setClicked(true)} onBlur={() => setClicked(false)} className="w-full h-full flex items-center inp relative">
        <input
          disabled={disabled}
          required
          type={type}
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          className={`w-full border rounded-xl lg:rounded-2xl lg:px-4 px-3 py-5 pb-2 outline-none duration-300 ${disabled && "opacity-20"} ${error ? "border-red-500 bg-red-100 focus:outline-red-500" : "border-apple-dark focus:outline-blue-500"}`}
        />
        <motion.span
          layout
          transition={{ type: "spring",dealy:dealy }}
          className={`absolute w-full pointer-events-none flex lg:px-4 px-3 ${error ? "text-red-500" : "text-apple-dark/80"} ${disabled && "opacity-20"} ${value !== "" || clicked ? "text-[10px] top-1 lg:top-0" : ""}`}
        >
          {name}
        </motion.span>
      </div>
      <span className="text-xs h-2 w-full text-left text-red-500 px-2">{error}</span>
      <div className="bg-red-400 text-blue-500" value="jjj"/>
    </div>
  );

};

export const TheSelect = ({ value = "", onValueChange, name, isMonth, error, required, data, disabled = false }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="w-full flex flex-col gap-1">
      <div className={`w-full px-4 rounded-xl lg:rounded-2xl relative cursor-pointer ease-in-out duration-300 ${disabled ? "opacity-20" : ""} ${error ? "border-red-500 border bg-red-100" : "border border-apple-dark bg-white"}`}>
        <select
          disabled={disabled}
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          className={`w-full appearance-none bg-transparent border-none outline-none ${value === "" ? "pt-3.5 pb-3.5 text-apple-dark/80" : "pt-5 pb-2"} ${(error && value === "") && "text-red-500"} rounded-2xl cursor-pointer`}
        >
          <option value="" disabled>
            {name}
          </option>
          {data.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
        <motion.span
          layout
          transition={{ type: "spring" }}
          className={`absolute w-full pointer-events-none flex ease-in-out duration-300 ${value === "" ? "opacity-0 top-3" : "opacity-100 top-0.5 lg:top-1 text-[10px] lg:text-xs"} ${error ? "text-red-500" : "text-apple-dark"}`}
        >
          {name}
        </motion.span>
      </div>
      <span className="text-xs h-2 w-full text-left text-red-500 px-2">{error === 0 ? "" : error}</span>
    </div>
  );
};

export const ConfirmationModal = ({ isVisible, onClose, onConfirm }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 180, scale: 0.7, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 180, scale: 0, opacity: 0 }}
          transition={{ type: "spring" }}
          className="absolute w-[50%] p-5 bg-white border-apple-dark/50 border flex-col rounded-3xl shadow-2xl flex items-center justify-center"
        >
          <p>Êtes-vous sûr de vouloir effacer toutes les données saisies ?</p>
          <div className="flex w-full items-center justify-center mt-5 cursor-pointer">
            <div className="flex-1">
              <div onClick={onClose}>Retourner</div>
            </div>
            <div className="flex-1 text-red-500 text-right cursor-pointer">
              <div onClick={onConfirm}>Vider</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ValidateModal = ({ isVisible, onClose, onConfirm }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 180, scale: 0.7, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 180, scale: 0, opacity: 0 }}
          transition={{ type: "spring" }}
          className="absolute w-[50%] p-5 bg-white/40 backdrop-blur-lg blurey  border flex-col rounded-3xl shadow-2xl flex items-center justify-center"
        >
          <p className="text-center">
            Merci d'avoir complété l'inscription de votre enfant.

           
          </p>
          <FontAwesomeIcon icon={faCheck} className="text-blue-500 text-7xl py-5"/>
          <div className="flex w-full items-center justify-center mt-5 cursor-pointer">

              <div onClick={()=>window.location.reload()}>Fermer</div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
