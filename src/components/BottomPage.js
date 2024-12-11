import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

export default function BottomPage() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert(`Numéro copié : ${text}`);
      })
      .catch(() => {
        alert("Échec de la copie du numéro.");
      });
  };
  return (
    <div className="w-full flex items-center relative justify-center flex-col pt-5 links">
      <div className='md:h-[600px] h-[300px]  w-full absolute bottom-0 left-0 scale-x-125 z-0 '>
      <ShaderGradientCanvas
        className="w-full h-full absolute "
        style={{bottom:'-20%', left:0}}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=170&cDistance=2.9&cPolarAngle=70&cameraZoom=1&color1=%23ff311f&color2=%2345b1ff&color3=%23ffffff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=-0.4&positionY=-3.9&positionZ=-0.3&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=45&rotationY=0&rotationZ=0&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.2&uStrength=3.4&uTime=0&wireframe=false"
        />
      </ShaderGradientCanvas>
      </div>
      <div className='w-full h-full absolute top-0 left-0 '></div>
      <div className='md:w-[95%] w-full pt-2 h-full bg-gradient-to-b from-white/30  to-white/5  backdrop-blur-xl md:p-10 rounded-t-[40px] bg-white/30'>
      <div className="opacity-65 mb-4 ml-2">
        <div className="w-full flex md:text-base text-[10px] items-end">
          <div className="w-[20%] md:mr-40 mr-6 -mb-1">
            <img
              src={`${process.env.PUBLIC_URL}/logos/logo1.png`}
              alt="Logo"
              className="md:h-20 filter invert mb-2 "
            />
          </div>
          <h1 className="w-[20%] font-extrabold">La Tour Eiffel</h1>
          <h1 className="w-[20%] font-extrabold">Pédagogie</h1>
          <h1 className="w-[20%] font-extrabold">Prenote</h1>
          <h1 className="w-[20%] font-extrabold">Social</h1>
        </div>
      </div>

      {/* Deuxième section */}
      <div className="opacity-80 border-b ml-2 border-black/15 pb-14">
        <div className="w-full flex">
          <div className="w-[20%] mr-6 md:mr-40" />

          <div className="w-[20%] flex flex-col font-semibold gap-y-1 md:text-base text-[10px]">
            <Link to="/">Accueil</Link>
            <Link to="/a-propos">À propos</Link>
            <Link to="/mot-du-fondateur">Mot du fondateur</Link>
            <Link to="/nos-valeurs">Nos valeurs</Link>
            <Link to="/vie-scolaire">La vie scolaire</Link>
            <Link to="/admission">Admission</Link>
          </div>

          <div className="w-[20%] flex flex-col font-semibold gap-y-1 md:text-base text-[10px]">
            <Link to="/maternelle">Maternelle</Link>
            <Link to="/primaire">Primaire</Link>
            <Link to="/college">Collège</Link>
            <Link to="/lycee">Lycée</Link>
            <Link to="/conditions-generales">Conditions générales</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/actualites">Actualités et événements</Link>
          </div>

          <div className="w-[20%] flex flex-col font-semibold gap-y-1 md:text-base text-[10px]">
            <Link to="/cantine">Cantine</Link>
            <Link to="/transport">Transport</Link>
            <Link to="/clubs">Clubs</Link>
            <Link to="/garderie">Garderie</Link>
            <Link to="/galerie">Galerie</Link>
          </div>

          <div className="w-[20%] flex flex-col font-semibold gap-y-1 md:text-base text-[10px]">
            <div className="flex items-center md:gap-x-3">
              <FontAwesomeIcon className="md:text-xl text-[10px]" icon={faFacebook} />
              <a
                href="https://web.facebook.com/lesecoleslatoureiffel/photos?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className='md:block hidden'>Écoles La Tour Eiffel</p>
              </a>
            </div>
            <div className="flex items-center md:gap-x-3">
              <FontAwesomeIcon className="md:text-xl text-[10px]" icon={faInstagram} />
              <a
                href="https://www.instagram.com/lesecoleslatoureiffel2/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className='md:block hidden'>lesecoleslatoureiffel2</p>
              </a>
            </div>
            <div className="flex items-center ">
              <FontAwesomeIcon className="md:text-xl text-[10px] mr-3" icon={faWhatsapp} />
              <span
                className="cursor-pointer hover:text-black/70 mr-1 hidden md:block"
                onClick={() => copyToClipboard("05 22 70 58 58")}
              >
                05 22 70 58 58 /
              </span>   <span
                className="cursor-pointer hover:text-black/70 md:ml-1 hidden md:block"
                onClick={() => copyToClipboard("06 61 05 89 77")}
              >
                0661058977
              </span>
            </div>
            <div className="flex items-center md:gap-x-3">
              <FontAwesomeIcon className="md:text-xl text-[10px]" icon={faEnvelope} />
             
              <a href="mailto:ecoleslatoureiffel@gmail.com"><p className='md:block hidden'>ecoleslatoureiffel@gmail.com</p></a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex md:mt-10 m-2 md:m-0 opacity-80 md:text-base text-[10px] items-center justify-center">
        <div className="md:flex-1 w-[80%] gap-x-2 mb-2">
          <FontAwesomeIcon className="text-lg mr-2" icon={faLanguage} />
          <select
            id="language-selector"
            className="outline-none bg-transparent cursor-pointer"
            aria-label="Language Selector">
            <option value="fr">Français</option>
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
          <p>
            <b>Copyright © </b> {new Date().getFullYear()} Tous les droits réservés. Les Écoles La
            Tour Eiffel, SARL déposée.
          </p>
        </div>
        <div className="flex-1 flex flex-row-reverse opacity-85" />
        <img
          src={`${process.env.PUBLIC_URL}/logos/logo2.png`}
          alt="Logo 2"
          className="md:h-20 h-10 filter invert mb-2 opacity-85"
        />
      </div>
      </div>
  
     
    </div>
  );
}
