import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUser, faEllipsisV, faTrash } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import adminsList from "./data/admins.json";

export default function AdminsDash() {
  const [admins, setAdmins] = useState(adminsList);
  const [showForm, setShowForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(null);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this admin?')) {
      setAdmins(prev => prev.filter(a => a.required.id !== id));
    }
    setMenuOpen(null);
  };

  const toggleMenu = (id) => setMenuOpen(prev => (prev === id ? null : id));

  return (
    <div className="w-full min-h-screen p-2 md:p-8  bg-apple-light/30 rounded-3xl text-apple-dark relative">
      <h1 className="text-2xl md:text-4xl font-bold text-center apple-title text-blue-500 mb-10">
        Liste des Administrateurs ETL
      </h1>

      <div className="flex justify-center mb-8" onClick={() => setShowForm(true)}>
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-5 w-full max-w-lg bg-apple-light rounded-3xl cursor-pointer flex items-center justify-between shadow-lg hover:shadow-xl transition-all"
        >
          <p className="text-apple-dark font-semibold md:text-xl">Créer un admin</p>
          <FontAwesomeIcon icon={faUserPlus} className="text-apple-dark text-xl md:text-3xl" />
        </motion.div>
      </div>

      <div className="space-y-6">
        {admins.map(admin => (
          <motion.div
            key={admin.required.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            layout
            className="relative p-6 bg-white rounded-3xl shadow-md hover:shadow-lg text-left transition-all cursor-pointer overflow-hidden"
            onClick={() => setSelectedAdmin(admin)}
          >
            <div className="flex items-center">
              {admin.optional.picture ? (
                <img
                  src={admin.optional.picture}
                  alt={`${admin.required.prenom} ${admin.required.nom}`}
                  className="w-14 h-14 rounded-full object-cover"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
                  <FontAwesomeIcon icon={faUser} className="text-gray-400 text-xl" />
                </div>
              )}
              <div className="ml-5 flex-1">
                <p className="font-semibold text-lg">
                  {admin.required.prenom} {admin.required.nom} {admin.required.isSuperadmin && <span className="text-xs opacity-60">(Super Admin)</span>}
                </p>
                <p className=" text-blue-500 capitalize mb-1">
                  {admin.required.role}
                </p>
                <p className=" text-gray-600">{admin.required.email}</p>
              </div>
              <button
                onClick={e => { e.stopPropagation(); toggleMenu(admin.required.id); }}
              >
                <FontAwesomeIcon icon={faEllipsisV} className="text-gray-400 hover:text-apple-dark" />
              </button>
            </div>

            {menuOpen === admin.required.id && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute top-12 right-6 bg-white border border-gray-200 rounded-lg shadow-md py-2"
              >
                <button
                  onClick={() => handleDelete(admin.required.id)}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                >
                  <FontAwesomeIcon icon={faTrash} className="mr-2" /> Supprimer
                </button>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedAdmin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center backdrop-blur-lg blurey text-left"
            onClick={() => setSelectedAdmin(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-xl w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-500">
                Détails Administrateur
              </h2>
              <div className="flex items-center mb-4">
                {selectedAdmin.optional.picture ? (
                  <img
                    src={selectedAdmin.optional.picture}
                    alt={`${selectedAdmin.required.prenom} ${selectedAdmin.required.nom}`}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <FontAwesomeIcon icon={faUser} className="text-gray-400" />
                  </div>
                )}
                <div className="ml-4">
                  <p className="font-semibold text-xl">
                    {selectedAdmin.required.prenom} {selectedAdmin.required.nom}
                  </p>
                  <p className="text-sm text-gray-500 capitalize">
                    {selectedAdmin.required.role}
                  </p>
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>ID:</strong> {selectedAdmin.required.id}</li>
                <li><strong>Email:</strong> {selectedAdmin.required.email}</li>
                <li><strong>Téléphone:</strong> {selectedAdmin.required.telephone}</li>
                <li><strong>Adresse:</strong> {selectedAdmin.optional.adresse || "-"}</li>
                <li><strong>Anniversaire:</strong> {selectedAdmin.optional.birthday || "-"}</li>
              </ul>
              <div className="mt-6 text-right">
                <button
                  onClick={() => setSelectedAdmin(null)}
                  className="px-4 py-2 rounded-lg font-medium "
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center backdrop-blur-lg blurey py-10 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-xl w-full max-w-md"
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-500">
                Nouveau Administrateur
              </h2>
              <form className="space-y-4">
                <input type="text" name="prenom" placeholder="Prénom" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none" />
                <input type="text" name="nom" placeholder="Nom" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none" />
                <input type="email" name="email" placeholder="Email" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none" />
                <input type="text" name="telephone" placeholder="Téléphone" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none" />
                <input type="text" name="role" placeholder="Rôle" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none" />
                <input type="text" name="adresse" placeholder="Adresse" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none" />
                <input type="date" name="birthday" placeholder="Anniversaire" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none" />
                <input type="text" name="picture" placeholder="URL Image (optionnel)" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none" />
                <div className="flex justify-end space-x-4 pt-4">
                  <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 rounded-lg font-medium border border-gray-200 hover:bg-gray-50">Annuler</button>
                  <button type="submit" className="px-4 py-2 rounded-lg font-medium bg-blue-500 text-white hover:bg-blue-600">Ajouter</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
