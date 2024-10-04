import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPatient } from "../redux/patientSlice"; 
import dossier from "../assets/dossier.svg";
import { useNavigate } from "react-router-dom";
import select from '../assets/select.svg';

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
const calculateAge = (birthDateString: string): number => {
    const birthDate = new Date(birthDateString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
  
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

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
  const [formatData, setFormatData] = useState({ birthDate: "" });
  const [age, setAge] = useState<number | null>(null); 
  const handleBlur = () => {
    const birthDate = formatData.birthDate;
    if (birthDate.length === 10 && /^\d{4}-\d{2}-\d{2}$/.test(birthDate)) {
      const calculatedAge = calculateAge(birthDate);
      setAge(calculatedAge);
    } else {
      setAge(null); 
    }
  };
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormatData({ ...formatData, [name]: value });
  };
  

  return (
    <div className="p-10 my-4 bg-custom-gradient-3  w-full rounded-[16px] min-h-screen ">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center h-auto md:h-24">
        <div className="flex justify-center items-center gap-4 h-24">
          <div className="w-full p-4 rounded-lg text-white flex items-center gap-2">
            <img src={dossier} alt="folder" />
            <h1 className="text-tail-blue font-bold font-ubuntu text-[24px]">
              Nouveau dossier
            </h1>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto rounded-[10px] p-6">
        <form className="grid grid-cols-4 gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-tail-blue mb-2 font-medium">CINE<span className="text-light-tail">*</span></label>
            <input
              type="text"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleChange}
              className="border-[1.4px] border-gray rounded-md w-full p-2"
              placeholder="Enter CINE"
              required
            />
          </div>

          <div>
            <label className="block text-tail-blue mb-2 font-medium">Nom<span className="text-light-tail">*</span></label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border-[1.4px] border-gray rounded-md w-full p-2"
              placeholder="Enter Nom"
              required
            />
          </div>

          <div>
            <label className="block text-tail-blue mb-2 font-medium">Prénom<span className="text-light-tail">*</span></label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border-[1.4px] border-gray rounded-md w-full p-2"
              placeholder="Enter Prénom"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-tail-blue mb-2 font-medium">Sexe<span className="text-light-tail">*</span></label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className=" border-[1.4px] border-gray rounded-md w-full p-2 appearance-none focus:outline-none "
              required
            >
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </select>
            <div className="absolute top-2/3 right-4 w-[11.11px] h-[19.28px]  transform  clip-path-triangle">
            <img src={select} alt="select" />
          </div>

          </div>

          <div>
            <label className="block text-tail-blue mb-2 font-medium">Date de naissance<span className="text-light-tail">*</span></label>
            <div className="flex">
                <input
              type="text"
              name="birthDate"
              placeholder="YYYY-MM-DD"
              value={formatData.birthDate}
              onChange={handleDateChange}
              onBlur={handleBlur}
              className="border-[1.4px] border-gray rounded-md w-full p-2"
              required
            /> <button className="bg-tail-blue rounded-md text-white p-2 mx-2 w-1/2"> {age !== null ? `${age} ans` : "0 ans"}</button></div>
          </div>

          <div className="relative">
            <label className="block text-tail-blue mb-2 font-medium">Couverture<span className="text-light-tail">*</span></label>
            <select
              name="coverage"
              value={formData.coverage}
              onChange={handleChange}
              className="border-[1.4px] border-gray rounded-md w-full p-2 appearance-none focus:outline-none"
              required
            >
              <option value="CNOPS">CNOPS</option>
              <option value="CNSS">CNSS</option>
            </select>
            <div className="absolute top-2/3 right-4 w-[11.11px] h-[19.28px]  transform  clip-path-triangle">
            <img src={select} alt="select" />
          </div>
          </div>

          <div>
            <label className="block text-tail-blue mb-2 font-medium">Région<span className="text-light-tail">*</span></label>
            <input
              type="text"
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="border-[1.4px] border-gray rounded-md w-full p-2"
              placeholder="Enter Région"
              required
            />
          </div>

          <div>
            <label className="block text-tail-blue mb-2 font-medium">Ville<span className="text-light-tail">*</span></label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="border-[1.4px] border-gray rounded-md w-full p-2"
              placeholder="Enter Ville"
              required
            />
          </div>

          <div>
            <label className="block text-tail-blue mb-2 font-medium">Commune<span className="text-light-tail">*</span></label>
            <input
              type="text"
              name="commune"
              value={formData.commune}
              onChange={handleChange}
              className="border-[1.4px] border-gray rounded-md w-full p-2"
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
              className="border-[1.4px] border-gray rounded-md w-full p-2"
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
              className="border-[1.4px] border-gray rounded-md w-full p-2"
              placeholder="Enter Adresse"
            />
          </div>

          <div className="col-span-4 ">
            <label className="block text-tail-blue mb-2 font-medium">Complément d'adresse<span className="text-light-tail">*</span></label>
            <input
              type="text"
              name="addressComplement"
              value={formData.addressComplement}
              onChange={handleChange}
              className="border-[1.4px] border-gray rounded-md w-full p-2"
              placeholder="Enter Complément d'adresse"
            />
          </div>

          <div className="col-span-4 mt-20"> 
<div className="flex justify-between w-full">
  <button className="bg-[#E5E5E5] text-gray px-4 py-2 rounded-md w-64" onClick={() => navigate("/patients")}>
    Annuler
  </button>
  <button type="submit" className="bg-light-tail text-white px-4 py-2 rounded-md w-64">
    Terminer
  </button>
</div></div>


        </form>

 
      </div>
    </div>
  );
};

export default AddFolder;