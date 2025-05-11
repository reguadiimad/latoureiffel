import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

export default function ProfileDash() {
  const admin = {
    required: {
      id: "LT-ADM-0001",
      nom: "El Baze",
      prenom: "Ibrahim",
      role: "fondateur",
      sex: "M",
      isSuperadmin: true,
      email: "ibrahim.elbaze@latoureiffel.ma",
      telephone: "+212612345678",
    },
    optional: {
      picture: null,
      adresse: "10 Avenue Mohammed V, Casablanca",
      birthday: "1975-06-21",
    },
  };

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nom: admin.required.nom,
    prenom: admin.required.prenom,
    email: admin.required.email,
    telephone: admin.required.telephone,
    adresse: admin.optional.adresse,
    birthday: admin.optional.birthday,
  });

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: call API to save changes
    toggleEdit();
  };

  return (
    <div className="w-full min-h-full p-6 bg-apple-light/20 rounded-3xl text-apple-dark relative">
      <button
            onClick={toggleEdit}
            className="mt-4 md:mt-0 ml-auto opacity-70 transition absolute top-0 right-0 p-5"
            aria-label="Modifier Profil"
          >
            <FontAwesomeIcon icon={faUserEdit} size="lg" />
          </button>
      <h1 className="text-3xl md:text-4xl font-bold text-center apple-title text-blue-500 mb-8">
        Mon Profil
      </h1>

      <div className="w-[90%] mx-auto bg-opacity-50 backdrop-blur-lg rounded-2xl  overflow-hidden">
        <div className="flex flex-col items-center justify-center p-6 mb-4">
          <div className="flex-shrink-0">
            {admin.optional.picture ? (
              <img
                src={admin.optional.picture}
                alt="Profile"
                className="h-32 w-32  object-cover border-4 mb-4 border-blue-500"
              />
            ) : (
              <div className="h-32 w-32 rounded-[40px] flex items-center justify-center bg-blue-500 text-white text-4xl">
                <FontAwesomeIcon icon={faUser} />
              </div>
            )}
          </div>
          <div className="mt-8   flex flex-col gap-2 flex-1 ">
            <h2 className="text-2xl font-semibold text-center">{`${admin.required.prenom} ${admin.required.nom}`}</h2>
            <p className="text-sm text-blue-500 -mt-2 mb-4 text-center capitalize">{admin.required.role}</p>
            <p className="mt-2 text-sm"><span className="font-medium">Email:</span> {admin.required.email}</p>
            <p className="mt-1 text-sm"><span className="font-medium">Tel:</span> {admin.required.telephone}</p>
            <p className="mt-1 text-sm"><span className="font-medium">Adresse:</span> {admin.optional.adresse}</p>
            <p className="mt-1 text-sm"><span className="font-medium">Né(e) le:</span> {admin.optional.birthday}</p>
          </div>
          
        </div>

        <AnimatePresence>
          {isEditing && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-6 border-t border-gray-200 "
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Modifier mon Profil</h3>
                <button onClick={toggleEdit}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col">
                    <span className="text-sm font-medium">Prénom</span>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-sm font-medium">Nom</span>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </label>
                </div>

                <label className="flex flex-col">
                  <span className="text-sm font-medium">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium">Téléphone</span>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col">
                    <span className="text-sm font-medium">Adresse</span>
                    <input
                      type="text"
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleChange}
                      className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-sm font-medium">Date de naissance</span>
                    <input
                      type="date"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleChange}
                      className="mt-1 w-full mx-auto p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={toggleEdit}
                    className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                  >
                    Enregistrer
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}