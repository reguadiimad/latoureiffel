import { useState,useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ConfirmationModal, TheInput, TheSelect } from "./InsCard"

export function InscStep1({ isActive, refProp, onNext, onDataChange }) {
  const [responsableFName, setResponsableFName] = useState("")
  const [responsableLName, setResponsableLName] = useState("")
  const [responsableEmail, setResponsableEmail] = useState("")
  const [responsablePhone, setResponsablePhone] = useState("")
  const [responsableType, setResponsableType] = useState("Pére")
  const [h, hs] = useState(false)
  const [errors, setErrors] = useState({ prenom: "", nom: "", email: "", phone: "" })
  const [isModalVisible, setIsModalVisible] = useState(false)

  function validateField(field, value) {
    switch (field) {
      case "prenom": return value.trim() === "" ? "Prénom est requis." : ""
      case "nom": return value.trim() === "" ? "Nom est requis." : ""
      case "email": 
        if (value.trim() === "") return "Email est requis."
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{1,5}$/.test(value)) return "Format d'email invalide."
        return ""
      case "phone": 
        if (value.trim() === "") return "Téléphone est requis."
        if (!/^(05|06|07)[0-9]{8}$/.test(value)) return "Numéro invalide. Format: 05XXXXXXXX"
        return ""
      default: return ""
    }
  }

  const handleChange = (field, value) => {
    setErrors(prev => ({ ...prev, [field]: validateField(field, value) }))
    switch (field) {
      case "prenom": setResponsableFName(value); break
      case "nom": setResponsableLName(value); break
      case "email": setResponsableEmail(value); break
      case "phone": setResponsablePhone(value); break
    }
  }

  const countFilledFields = () => {
    const fields = [responsableFName, responsableLName, responsableEmail, responsablePhone]
    return fields.filter(field => field !== "").length
  }

  function validateForm() {
    const newErrors = {
      prenom: validateField("prenom", responsableFName),
      nom: validateField("nom", responsableLName),
      email: validateField("email", responsableEmail),
      phone: validateField("phone", responsablePhone)
    }
    setErrors(newErrors)
    return Object.values(newErrors).every(e => e === "")
  }

  const handleClear = () => {
    if (countFilledFields() > 2) {
      setIsModalVisible(true)
    } else {
      clearForm()
    }
  }

  const clearForm = () => {
    setResponsableFName(""); setResponsableLName(""); setResponsableEmail(""); setResponsablePhone("")
    setErrors({ prenom: "", nom: "", email: "", phone: "" })
  }

  const confirmClearForm = () => {
    clearForm()
    setIsModalVisible(false)
  }

  const handleCloseModal = () => setIsModalVisible(false)

  useEffect(() => {
    onDataChange({
      responsableFName: responsableFName,
      responsableLName: responsableLName,
      responsableEmail: responsableEmail,
      responsablePhone: responsablePhone,
      responsableType: responsableType
    });
  }, [responsableFName,responsableLName,responsableEmail,responsablePhone,responsableType]);

  return (
    <div className={`flex-none w-full lg:w-[60%] h-[600px] lg:h-[750px] my-10 flex items-center justify-center transition-transform duration-500 ${isActive ? "scale-100 blur-0" : "scale-90 blur-sm"}`} ref={refProp}>
      <div className="bg-white w-full h-[95%] flex justify-center lg:p-8 rounded-[20px] shadow-xl overflow-y-scroll text-apple-title">
        <div className="w-[90%] relative h-full flex flex-col items-center justify-center text-center">
          <img className="h-14 lg:h-16 -mr-2 -mt-10" src={process.env.PUBLIC_URL + "/images/rspb1.png"} alt="logo" />
          <p className="text-xl lg:text-2xl font-semibold">Remplir les informations du <span className="text-blue-500 font-semibold">Responsable</span></p>
          <p className="lg:text-base text-apple-dark w-[85%]">Identifiez et informez-nous sur le responsable de l’élève pour finaliser l’inscription.</p>
          <div className="w-full flex items-center justify-center mt-6 gap-2 lg:mt-14 lg:gap-5 ">
            <div className="flex-1">
              <TheInput name="Prénom" value={responsableFName} onValueChange={(val) => handleChange("prenom", val)} error={errors.prenom} />
            </div>
            <div className="flex-1">
              <TheInput name="Nom" value={responsableLName} onValueChange={(val) => handleChange("nom", val)} error={errors.nom} />
            </div>
          </div>
          <div className={`w-full mt-5 flex items-center justify-center rounded-xl lg:rounded-2xl border px-3 py-1 relative ${h ? "border-blue-500 border-2" : "border-apple-dark"}`}>
            <span className="absolute text-[10px] top-1 lg:top-0 w-full pointer-events-none flex px-3 lg:px-4 bg-transparent text-apple-dark/80">Lien avec l'élève</span>
            <select onFocus={() => hs(true)} onBlur={() => hs(false)} value={responsableType} onChange={(e) => setResponsableType(e.target.value)} className="w-full py-5 pb-2 outline-none  text-apple-title">
              <option value={"Pére"}>Pére</option>
              <option value={"Mére"}>Mére</option>
              <option value={"Tuteur"}>Tuteur</option>
            </select>
          </div>
          <div className="my-6 w-[95%] h-[2px] bg-apple-light rounded-full"></div>
          <div className="w-full flex items-center justify-center">
            <div className="flex-1">
              <TheInput type="email" name="nom@example.com" value={responsableEmail} onValueChange={(val) => handleChange("email", val)} error={errors.email} />
            </div>
          </div>
          <div className="w-full flex items-stretch justify-center mt-5 gap-5">
            <div className="flex-1 h-full">
              <TheInput name="N° Téléphone" value={responsablePhone} onValueChange={(val) => handleChange("phone", val)} error={errors.phone} />
            </div>
          </div>
          <div className="flex absolute bottom-3 lg:bottom-1 items-center justify-center gap-4 cursor-pointer">
            <div className="text-apple-dark underline" onClick={handleClear}>Vider</div>
            <div onClick={() => { if (validateForm()) { onNext() }}} className="px-4 py-2  bg-blue-500 text-white rounded-lg font-semibold">Continuer</div>
          </div>
        </div>
      </div>
     <ConfirmationModal isVisible={isModalVisible} onClose={handleCloseModal} onConfirm={confirmClearForm} />
    </div>
  )
}
