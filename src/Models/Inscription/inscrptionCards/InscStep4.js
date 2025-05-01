import { useState } from "react"
import { ValidateModal } from "./InsCard";

export function InscStep4({ isActive, values, onSubmit, onBackToStep,showValidateModal }) {
  const responsable = values.responsable;
  const eleve = values.eleve;

  return (
    <div className={`flex-none w-full lg:w-[60%] h-[600px] lg:h-[750px] my-10 flex items-center justify-center transition-transform duration-500 ${isActive ? "scale-100 blur-0" : "scale-90 blur-sm"}`} >
    <div className="bg-white w-full h-[95%] flex justify-center lg:p-8 rounded-[20px] shadow-xl overflow-y-scroll text-apple-title">
      <div className="w-[90%] relative h-full flex flex-col items-center justify-center text-center">
        <img className="h-14 lg:h-16 -mr-2 -mt-10" src={process.env.PUBLIC_URL + "/images/eleve1.png"} alt="logo" />
           <p className="text-xl lg:text-2xl font-semibold">
            Votre inscription prête pour <span className="text-blue-500 font-bold">envoi</span>
          </p>

  {/* Instruction de vérification */}
  <p className="lg:text-base text-apple-dark w-[85%]">
    Vérifiez ci-dessous toutes les informations que vous avez saisies. Si tout est correct, cliquez sur « Envoyer » pour finaliser votre inscription.
  </p>

          {/* DISPLAY DATA */}
          <div className="w-full h-auto rounded-lg bg-apple-light mt-2 lg:mt-6 p-4 text-apple-dark text-left lg:text-sm space-y-4">
            <div>
              <h3 className="font-semibold text-blue-500 lg:text-base">Informations du responsable</h3>
              <p>Nom: <strong>{responsable.responsableLName}</strong></p>
              <p>Prénom: <strong>{responsable.responsableFName}</strong></p>
              <p>Email: <strong>{responsable.responsableEmail}</strong></p>
              <p>Téléphone: <strong>{responsable.responsablePhone}</strong></p>
              <p>Type: <strong>{responsable.responsableType}</strong></p>
              <div onClick={() => onBackToStep(1)} className="text-blue-500 underline cursor-pointer lg:text-sm mt-1">Modifier</div>
            </div>

            <div>
              <h3 className="font-semibold text-blue-500 lg:text-base">Informations de l'élève</h3>
              <p>Nom: <strong>{eleve.eleveLName}</strong></p>
              <p>Prénom: <strong>{eleve.eleveFName}</strong></p>
              <p>Date de naissance: <strong>{eleve.eleveDay}/{eleve.eleveMonth}/{eleve.eleveYear}</strong></p>
              <p>Niveau scolaire: <strong>{eleve.nivSco}</strong></p>
              <p>Classe actuelle: <strong>{eleve.classActual}</strong></p>
              <p>Établissement actuel: <strong>{eleve.institut}</strong></p>
              <div onClick={() => onBackToStep(2)} className="text-blue-500 underline cursor-pointer lg:text-sm mt-1">Modifier</div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="w-full flex items-center justify-center mt-6 gap-3">
           
            <button onClick={onSubmit} className="bg-blue-500 px-6 py-2 rounded-lg text-white font-semibold">
              Envoyer
            </button>
          </div>
        </div>
      </div>
      <ValidateModal
        isVisible={showValidateModal}
        
      />
    </div>
  );
}
