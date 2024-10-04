import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Import useDispatch
import { addPatient } from "../redux/patientSlice"; // Import the addPatient action
import dossier from "../assets/dossier.svg";
import { useNavigate } from "react-router-dom";

interface FormData {
  idNumber: string;
  lastName: string;
  firstName: string;
  gender: string;
  birthDate: string;
  coverage: string;
  region: string;
  city: string;
  commune: string;
  mobile: string;
  address: string;
  addressComplement: string;
}

const AddFolder: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    idNumber: "",
    lastName: "",
    firstName: "",
    gender: "Homme",
    birthDate: "",
    coverage: "CNOPS",
    region: "",
    city: "",
    commune: "",
    mobile: "",
    address: "",
    addressComplement: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    dispatch(addPatient({
      id: Date.now().toString(),
      dateOpened: new Date().toLocaleDateString(),
      lastName: formData.lastName,
      firstName: formData.firstName,
      birthDate: formData.birthDate,
      gender: formData.gender,
      idNumber: formData.idNumber,
      coverage: formData.coverage,
      lastUpdate: new Date().toLocaleString(), 
    }));

    setFormData({
      idNumber: "",
      lastName: "",
      firstName: "",
      gender: "Homme",
      birthDate: "",
      coverage: "CNOPS",
      region: "",
      city: "",
      commune: "",
      mobile: "",
      address: "",
      addressComplement: "",
    });
  
    navigate("/patients");
  };

  return (
    <div className="p-10 my-4 bg-custom-gradient-3 custom-div w-full rounded-[16px] min-h-screen ">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center h-auto md:h-24">
        <div className="flex justify-center items-center gap-4 h-24">
          <div className="w-full p-4 rounded-lg text-white flex items-center gap-2">
            <img src={dossier} alt="folder" />
            <h1 className="text-tail-blue font-bold font-ubuntu">
              Nouveau dossier
            </h1>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto rounded-[10px] p-6">
        <form className="grid grid-cols-4 gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-tail-blue mb-2 font-medium">CINE*</label>
            <input
              type="text"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleChange}
              className="border border-gray rounded-md w-full p-2"
              placeholder="Enter CINE"
              required
            />
          </div>

          <div>
            <label className="block text-tail-blue mb-2 font-medium">Nom*</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray rounded-md w-full p-2"
              placeholder="Enter Nom"
              required
            />
          </div>

          <div>
            <label className="block text-steel-blue mb-2 font-medium">Prénom*</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray rounded-md w-full p-2"
              placeholder="Enter Prénom"
              required
            />
          </div>

          <div>
            <label className="block text-tail-blue mb-2 font-medium">Sexe*</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border border-gray rounded-md w-full p-2"
              required
            >
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </select>
          </div>

          <div>
            <label className="block text-tail-blue mb-2 font-medium">Date de naissance*</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="border border-gray rounded-md w-full p-2"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-tail-blue mb-2 font-medium">Couverture*</label>
            <select
              name="coverage"
              value={formData.coverage}
              onChange={handleChange}
              className="border border-gray rounded-md w-full p-2"
              required
            >
              <option value="CNOPS">CNOPS</option>
              <option value="CNSS">CNSS</option>
            </select>
          </div>

          <div>
            <label className="block text-tail-blue mb-2 font-medium">Région*</label>
            <input
              type="text"
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="border border-gray rounded-md w-full p-2"
              placeholder="Enter Région"
              required
            />
          </div>

          <div>
            <label className="block text-tail-blue mb-2 font-medium">Ville*</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="border border-gray rounded-md w-full p-2"
              placeholder="Enter Ville"
              required
            />
          </div>

          <div>
            <label className="block text-tail-blue mb-2 font-medium">Commune*</label>
            <input
              type="text"
              name="commune"
              value={formData.commune}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter Commune"
            />
          </div>

          <div>
            <label className="block text-tail-blue mb-2 font-medium">Téléphone mobile</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="border border-gray rounded-md w-full p-2"
              placeholder="Enter Téléphone mobile"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-tail-blue mb-2 font-medium">Adresse</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border border-gray rounded-md w-full p-2"
              placeholder="Enter Adresse"
            />
          </div>

          <div className="col-span-4 ">
            <label className="block text-tail-blue mb-2 font-medium">Complément d'adresse*</label>
            <input
              type="text"
              name="addressComplement"
              value={formData.addressComplement}
              onChange={handleChange}
              className="border border-gray rounded-md w-full p-2"
              placeholder="Enter Complément d'adresse"
            />
          </div>
          <div className="mt-6 flex justify-between ">
          <button className="bg-[#E5E5E5] text-gray w-1/6 px-4 py-2 rounded-md" onClick={() => navigate("/patients")}>
            Annuler
          </button>
          <button type="submit" className="bg-cyan text-white px-4 py-2 w-1/6 rounded-md" >
            Terminer
          </button>
        </div>
        </form>

 
      </div>
    </div>
  );
};

export default AddFolder;