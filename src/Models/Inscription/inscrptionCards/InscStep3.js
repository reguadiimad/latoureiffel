import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ConfirmationModal, TheInput, TheSelect } from "./InsCard"

export function InscStep3({ isActive, refProp,onNext }) {
  const [reded,setIsReded] = useState(false);
  const [accpeted,setAccepted] = useState (false);
  

  
    return (
      <div className={`flex-none w-full lg:w-[60%] h-[600px] lg:h-[750px] my-10 flex items-center justify-center transition-transform duration-500 ${isActive ? "scale-100 blur-0" : "scale-90 blur-sm"}`} ref={refProp}>
      <div className="bg-white w-full h-[95%] flex justify-center lg:p-8 rounded-[20px] shadow-xl overflow-y-scroll text-apple-title">
        <div className="w-[90%] relative h-full flex flex-col items-center justify-center text-center">
          <img className="h-14 lg:h-16 -mr-2 -mt-10" src={process.env.PUBLIC_URL + "/images/eleve1.png"} alt="logo" />
             <p className="text-xl lg:text-2xl font-semibold"><span className="text-blue-500 font-semibold">Conditions </span>générales et <span className="text-blue-500 font-semibold"></span>termes</p>
            <p className="lg:text-base text-apple-dark w-[85%]">Veuillez lire attentivement les conditions générales d'inscription.</p>
            <div className="w-full h-[50%] lg:h-[65%] rounded-lg bg-apple-light mt-4  p-2  text-apple-dark text-left text-xs space-y-4">
              <div className="w-full h-full overflow-y-scroll ">
              <h3 className="font-semibold text-sm lg:text-base">IMPORTANT</h3>
  <p>
    Avant de finaliser l'inscription, veuillez prendre connaissance des conditions générales. L'acceptation de ces conditions est requise pour valider l'inscription de l'élève.
  </p>

  <h3 className="font-semibold lg:text-sm mt-4">1. Données personnelles</h3>
  <p>
    Les Données Personnelles des utilisateurs collectées via le site internet ecoleslatoureiffel.ma sont traitées conformément à la loi n°09-08 relative à la protection des personnes physiques à l’égard du traitement des données à caractère personnel. L’utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données le concernant. Ces droits peuvent être exercés en s’adressant directement à l’établissement via l'adresse email : ecoleslatoureiffel@gmail.com
  </p>

  <h3 className="font-semibold lg:text-sm mt-4">2. Gestion des cookies</h3>
  <p>
    Lors de la navigation sur le site, des cookies peuvent être automatiquement installés sur le navigateur de l’utilisateur. Ces fichiers permettent notamment de recueillir des données statistiques sur la navigation, d'améliorer les services proposés, et de personnaliser l’expérience utilisateur. L’utilisateur peut configurer son navigateur pour refuser l’installation de cookies.
  </p>

  <h3 className="font-semibold lg:text-sm mt-4">3. Propriété intellectuelle</h3>
  <p>
    Le site ecoleslatoureiffel.ma est la propriété exclusive des Écoles La Tour Eiffel. L’ensemble des éléments présents sur ce site, tels que les textes, images, vidéos, logos, icônes et sons sont protégés par les lois en vigueur sur la propriété intellectuelle. Toute reproduction ou représentation, totale ou partielle, de ces éléments est strictement interdite sans autorisation préalable.
  </p>

  <h3 className="font-semibold lg:text-sm mt-4">4. Liens vers d’autres sites</h3>
  <p>
    Le site peut contenir des liens vers d'autres sites internet. Ces liens sont proposés à titre informatif. Écoles La Tour Eiffel n’a aucun contrôle sur ces sites et ne saurait être tenue responsable de leur contenu, de leur politique de confidentialité ou des dommages pouvant résulter de leur utilisation.
  </p>

  <h3 className="font-semibold lg:text-sm mt-4">5. Responsabilité de l’utilisateur</h3>
  <p>
    L’utilisateur s’engage à utiliser le site dans le respect des lois en vigueur et à ne pas porter atteinte aux droits des tiers ou à la sécurité du site. Il est interdit d’introduire volontairement des virus ou tout autre programme nuisible. Toute utilisation abusive pourra faire l’objet de poursuites judiciaires.
  </p>

  <h3 className="font-semibold lg:text-sm mt-4">6. Responsabilité de l’établissement</h3>
  <p>
    Écoles La Tour Eiffel s’efforce de maintenir le site accessible 7j/7 et 24h/24, mais ne saurait être tenue responsable en cas d’interruption, de dysfonctionnement ou d’erreurs techniques. L’établissement se réserve le droit de suspendre ou de modifier le site à tout moment sans préavis.
  </p>

  <h3 className="font-semibold lg:text-sm mt-4">7. Sécurité du site</h3>
  <p>
    Des mesures de sécurité sont mises en place pour garantir la confidentialité et l’intégrité des données personnelles. Toutefois, aucune transmission de données sur Internet n’est totalement sécurisée, et Écoles La Tour Eiffel ne peut garantir la sécurité absolue des informations transmises via le site.
  </p>

  <h3 className="font-semibold lg:text-sm mt-4">8. Informations éditeur</h3>
  <p>
    Éditeur du site : Écoles La Tour Eiffel<br />
    Adresse : Lotissement Al Hadika, Imm. Chellah, Hay Al Walaa – Sidi Moumen, Casablanca, Maroc, 20402<br />
    Téléphone : 05 22 70 58 58<br />
    Email : ecoleslatoureiffel@gmail.com
  </p>

  <h3 className="font-semibold lg:text-sm mt-4">9. Modifications</h3>
  <p>
    Écoles La Tour Eiffel se réserve le droit de modifier à tout moment les présentes Conditions Générales d’Utilisation. L’utilisateur est invité à les consulter régulièrement afin de rester informé des éventuelles mises à jour.
  </p>

  <h3 className="font-semibold lg:text-sm mt-4">10. Litiges – Droit applicable</h3>
  <p>
    Tout litige relatif à l’utilisation du site sera soumis à la compétence exclusive des juridictions marocaines. Les présentes Conditions Générales d’Utilisation sont régies par le droit marocain.
  </p>
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-5">
              <div className="flex-1 flex items-center text-apple-dark gap-2">
                <input onChange={e=>setIsReded(e.target.checked)} className="cursor-pointer" type="checkbox"/>
                <p  className="lg:text-sm text-left">je lis tout les contions</p>
              </div>
              <div className="w-[70%] flex items-center justify-end gap-2 cursor-pointer">
                <div onClick={()=>{setAccepted(false); window.location.reload();}} className={`bg-apple-light p-1.5 lg:p-3 ${reded?"":"opacity-25 pointer-events-none"} ease-in-out duration-500 rounded-lg text-apple-dark lg:text-base font-semibold `}>Réfuser</div>
                <div onClick={()=>{setAccepted(true);onNext()}}  className={`bg-blue-500  p-1.5 lg:p-3 ${reded?"":"opacity-25 pointer-events-none"} ease-in-out duration-100  rounded-lg text-white lg:text-base font-semibold`}>Acceptez et continuer</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    )
  }