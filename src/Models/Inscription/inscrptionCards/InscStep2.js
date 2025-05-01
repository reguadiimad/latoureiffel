import { useState,useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ConfirmationModal, TheInput, TheSelect } from "./InsCard"

export function InscStep2({ isActive, refProp,onNext,onDataChange }) {
    const [eleveFName, setEleveFName] = useState("")
    const [eleveLName, setEleveLName] = useState("")
    const [eleveYear,setEleveYear] = useState("");
    const [eleveMonth,setEleveMonth] = useState("");
    const [eleveDay,setEleveDay] = useState("");
    const [nivSco,setNivSco] = useState("");
    const [classActual,setClassActual] = useState("");
    const [institut,setInstitut] = useState("");
    const [errors, setErrors] = useState({ prenom: "", nom: "", year: 0, month: 0, day:0, nivSco:"", classAct:" ", institut:""})
    const [touched, setTouched] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);


    const currentYear = new Date().getFullYear();
    const yearData = Array.from({ length: 25 }, (_, i) => (currentYear - 1) - i);
    const monthsFr = [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    const getDaysInMonth = (year, month) => {
      if (!year || !month) return [];
    
      const monthIndex = typeof month === "string"
        ? monthsFr.findIndex(m => m === month)
        : month - 1; // if you're using numeric months
    
      // JS month is 0-indexed; adding 1 to get the next month and setting day = 0 gives the last day of the selected month
      const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    
      return Array.from({ length: daysInMonth }, (_, i) => i + 1);
      
    };

    const daysData = getDaysInMonth(eleveYear, eleveMonth);
    const nivScoData = ["Pas Encore","Maternelle","Élemontaire","Collège","Lycée"];
    const classActualData = [[""],["Petite section","Moyenne section","Grande section"],["CP","CE1","CE2","CM1","CM2","CE6"],["1AC","2AC","3AC"],["Tronc Commun","1ère année Bac","2éme année Bac"]]
    const getClassOptions = (nivSco) => {
      switch (nivSco) {
        case "Pas Encore":
          return classActualData[0]; 
        case "Maternelle":
          return classActualData[1]; // Empty
        case "Élemontaire":
          return classActualData[2];
        case "Collège":
          return classActualData[3];
        case "Lycée":
          return classActualData[4];
        default:
          return classActualData[0];
      }
    };


    function validateField(field, value) {
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 24;
    const maxYear = currentYear;

    switch (field) {
        case "prenom":
        return value.trim() === "" ? "Prénom est requis." : "";
        case "nom":
        return value.trim() === "" ? "Nom est requis." : "";
        case "year":
        if (value.trim() === "") return "Année est requise.";
        if (isNaN(value) || value < minYear || value > maxYear)
            return `Année invalide. Entre ${minYear} et ${maxYear}.`;
        return "";
        case "month":
        if (value.trim() === "") return "Mois est requis.";
        if (!monthsFr.includes(value)) return "Mois invalide.";
        return "";
        case "day":
        if (value.trim() === "") return "Jour est requis.";
        if (isNaN(value) || value < 1 || value > 31) return "Jour invalide.";
        return "";
        case "nivSco":
        return value.trim() === "" ? "Niveau scolaire requis." : "";
        case "classAct":
        // only required if nivSco !== nivScoData[0]
        return (nivSco !== nivScoData[0] && value.trim() === "")
            ? "Classe actuelle requise."
            : "";
        case "institut":
        // only required if nivSco !== nivScoData[0]
        return (nivSco !== nivScoData[0] && value.trim() === "")
            ? "Institut requis."
            : "";
        default:
        return "";
    }
    }

    const handleChange = (field, value) => {
        setTouched(prev => ({ ...prev, [field]: true }))
        setErrors(prev => ({ ...prev, [field]: validateField(field, value) }));

    switch (field) {
        case "prenom":
        setEleveFName(value);
        break;
        case "nom":
        setEleveLName(value);
        break;
        case "year":
        setEleveYear(value);
        break;
        case "month":
        setEleveMonth(value);
        break;
        case "day":
        setEleveDay(value);
        break;
        case "nivSco":
        setNivSco(value);
        break;
        case "classAct":
        setClassActual(value);
        break;
        case "institut":
        setInstitut(value);
        break;
        default:
        break;
    }
    };


    function validateForm() {
        const currentYear = new Date().getFullYear();
        const minYear = currentYear - 24;
        const maxYear = currentYear;
      
        const isNivScoFirst = nivSco === nivScoData[0]; // This is your special case
      
        const newErrors = {
          prenom: validateField("prenom", eleveFName),
          nom: validateField("nom", eleveLName),
          year: validateField("year", eleveYear),
          month: validateField("month", eleveMonth),
          day: validateField("day", eleveDay),
          nivSco: validateField("nivSco", nivSco),
          classAct: isNivScoFirst ? "" : validateField("classAct", classActual),
          institut: isNivScoFirst ? "" : validateField("institut", institut)
        }
      
        setErrors(newErrors)
        return Object.values(newErrors).every(e => e === "")
    }
      
    const clearForm = () => {
    setEleveFName("");
    setEleveLName("");
    setEleveYear("");
    setEleveMonth("");
    setEleveDay("");
    setNivSco("");
    setClassActual("");
    setInstitut("");
    setErrors({
        prenom: "",
        nom: "",
        year: "",
        month: "",
        day: "",
        nivSco: "",
        classAct: "",
        institut: ""
    });
    };
      

    const countFilledFields = () => {
        const fields = [
          eleveFName,
          eleveLName,
          eleveYear,
          eleveMonth,
          eleveDay,
          nivSco,
          classActual,
          institut
        ];
      
        return fields.filter(field => field !== "").length; // Count non-empty fields
    };

  
    const handleClear = () => {
      if (countFilledFields() > 2) {
        setIsModalVisible(true); // Show the modal if more than two fields are filled
      } else {
        clearForm(); // Otherwise, clear the form without confirmation
      }
    };
    const handleCloseModal = () => {
      setIsModalVisible(false); // Close the modal without clearing the form
    };
    const confirmClearForm = () => {
      clearForm(); // Call clear form function if the user confirms
      setIsModalVisible(false); // Close the modal after confirming
    };

    useEffect(() => {
      onDataChange({
        eleveFName: eleveFName,
        eleveLName: eleveLName,
        eleveYear: eleveYear,
        eleveMonth: eleveMonth,
        eleveDay: eleveDay,
        nivSco,
        classActual,
        institut
      });
    }, [eleveFName, eleveLName, eleveYear, eleveMonth, eleveDay, nivSco, classActual, institut]);
                  
    
    
    
  
  
    return (
      <div className={`flex-none w-full lg:w-[60%] h-[600px] lg:h-[750px] my-10 flex items-center justify-center transition-transform duration-500 ${isActive ? "scale-100 blur-0" : "scale-90 blur-sm"}`} ref={refProp}>
      <div className="bg-white w-full h-[95%] flex justify-center lg:p-8 rounded-[20px] shadow-xl overflow-y-scroll text-apple-title">
        <div className="w-[90%] relative h-full flex flex-col items-center justify-center text-center">
          <img className="h-14 lg:h-16 -mr-2 -mt-10" src={process.env.PUBLIC_URL + "/images/eleve1.png"} alt="logo" />
            <p className="text-xl lg:text-2xl font-semibold">Remplir les informations du <span className="text-blue-500 font-semibold">Éleve</span></p>
            <p className="lg:text-base text-apple-dark w-[85%]">Identifiez et informez-nous sur l’élève pour finaliser l’inscription.</p>
            <div className="w-full flex items-center justify-center mt-4 lg:mt-8 lg:gap-5 gap-2">
              <div className="flex-1">
                <TheInput name="Prénom" value={eleveFName} onValueChange={(val) => handleChange("prenom", val)} error={errors.prenom} />
              </div>
              <div className="flex-1">
                <TheInput name="Nom" value={eleveLName} onValueChange={(val) => handleChange("nom", val)} error={errors.nom}  />
              </div>
            </div>
            <p className="text-apple-title w-full text-left font-semibold mt-2">Date de naicence</p>
            <div className="w-full flex items-center justify-center gap-2  lg:gap-5 mt-2">
              <div className="flex-1">
                <TheSelect name="Annee" value={eleveYear} data={yearData}  onValueChange={(val) => handleChange("year", val)} error={errors.year} />
              </div>
              <div className="flex-1">
                <TheSelect name="Mois" value={eleveMonth} data={monthsFr} disabled={eleveYear===""}  onValueChange={(val) => handleChange("month", val)} error={errors.month} />
              </div>
              <div className="flex-1">
                <TheSelect name="Jour" value={eleveDay} data={daysData} disabled={eleveMonth===""} onValueChange={(val) => handleChange("day", val)} error={errors.day} />
              </div>
            </div>
            <div className="lg:my-6 my-2 w-[95%] h-[2px] bg-apple-light rounded-full"></div>
            <p className="text-apple-title w-full text-left font-semibold">Niveau Scolaire Actuelle</p>
  
            
            <div className="w-full flex items-center justify-center  lg:gap-5 gap-2 mt-2">
              <div className="flex-1">
                <TheSelect name="Niveau Scolaire" value={nivSco} data={nivScoData}   onValueChange={(val) => handleChange("nivSco", val)} error={errors.nivSco} />
              </div>
              <div className="flex-1">
                <TheSelect name="Classe" value={classActual} data={getClassOptions(nivSco)} disabled={nivSco===""||nivSco===nivScoData[0]}  onValueChange={(val) => handleChange("classAct", val)} error={touched.classAct ? errors.classAct : ""} />
              </div>
            
  
            </div>
            <div className="w-full flex items-center justify-center  lg:mt-5 gap-5">
              
              <div className="flex-1">
                <TheInput name="Institut de Province" disabled={nivSco===nivScoData[0]}  value={institut} onValueChange={(val) => handleChange("institut", val)} error={errors.institut} />
              </div>
            </div>
            
            <div className="flex absolute bottom-3 lg:-bottom-3 items-center justify-center gap-4 cursor-pointer">
              <div onClick={handleClear} className="text-apple-dark underline">Vider</div>
              <div onClick={() => { if (validateForm()) { onNext() }}} className="px-4 py-2  bg-blue-500 text-white rounded-lg font-semibold">Continuer</div>

            </div>
          </div>
        </div>
        <ConfirmationModal isVisible={isModalVisible} onClose={handleCloseModal} onConfirm={confirmClearForm} />
      </div>
    )
  }