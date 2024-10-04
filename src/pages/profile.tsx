import React from "react";
import patientpic from "../assets/patient.svg";
import depistage from "../assets/depistage.svg";
import earphone from "../assets/earphone.svg";
import heart from "../assets/heart.svg";
import calendar from "../assets/calendar.svg";
import UserIcon from "../assets/user-circle.svg";
import cons from "../assets/cons.svg";
import edit from "../assets/edit.svg";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPatientById } from "../redux/patientSlice";

const PatientProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const patient = useSelector(selectPatientById(id || ''));
  if (!id) {
    return <div>ID du patient non trouvé</div>;
  }

  if (!patient) {
    return <div>Patient non trouvé</div>;
  }
  return (
    <div className="min-h-screen bg-custom-gradient-3 p-10 flex flex-col items-center w-full rounded-[16px] mt-4">
      <div className="flex w-full justify-between items-center border-light-blue-2 bg-light-blue-1 shadow-custom-4 rounded-[16px] p-6">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-200 rounded-full p-4">
            <div className="w-12 h-12 rounded-full">
              <img src={patientpic} />
            </div>
          </div>
          <div className="space-x-48 flex ">
            <div>
              <h2 className="text-xl font-semibold">{patient.firstName} Mansar</h2>
              <p className="text-gray-500">Sexe: {patient.gender}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Date de naissance: {patient.birthDate}</h2>
              <p className="text-gray-500">Age: {patient.gender}</p>
            </div>
          </div>
        </div>

        <div className="space-x-4 flex">
          <button className="bg-dark-royal-blue text-white px-7 py-3 rounded-[36px] h-[52px] flex gap-2">
            <img src={calendar} alt="Signal Icon" className="w-6 h-6" />
            Réserver un rendez-vous
          </button>
          <button className="bg-custom-gradient-2 text-white px-7 py-3 rounded-[36px] h-[52px] flex gap-2">
            <img
              src={cons}
              alt="consultation"
              className="w-6 h-6"
            />
            Démarrer la consultation
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-8 divide-x divide-gray-300 text-gray-500 font-semibold bg-custom-gradient mt-5 w-full h-16">
        <button className="px-4 bg-custom-gradient flex items-center space-x-2">
          <img src={UserIcon} alt="Fiche Icon" className="w-5 h-5" />
          <span>Fiche patient</span>
        </button>
        <button className="px-4 flex items-center space-x-2">
          <img
            src={heart} 
            alt="Antécédents Icon"
            className="w-5 h-5"
          />
          <span>Antécédents</span>
        </button>
        <button className="px-4 flex items-center space-x-2">
          <img
           src={earphone} 
            alt="Constantes Icon"
            className="w-5 h-5"
          />
          <span>Constantes</span>
        </button>
        <button className="px-4 flex items-center space-x-2">
          <img
               src={depistage} 
            alt="Dépistage Icon"
            className="w-8 h-8"
          />
          <span>Dépistage</span>
        </button>
        <button className="px-4 flex items-center space-x-2">
          <img
            src={cons} 
            alt="Compte rendu Icon"
            className="w-5 h-5"
          />
          <span>Compte rendu</span>
        </button>
      </div>

      <div className="w-full mt-5 ">
        <div className="flex w-full p-8">
        <div className="items-center">
        <h3 className=" font-Ubuntu text-light-tail font-bold text-[24px]">Patient</h3></div>
        <div className="flex justify-end w-full">
          <button className="bg-[#5E5E5E] px-4 py-2 text-white font-Ubuntu rounded-3xl text-gray-700 flex items-center">
            <img src={edit} alt="edit"/>Modifier
          </button>
        </div></div>
        <div className="grid grid-cols-5 gap-6 mt-3 ml-9 border-b border-[#DADADA] pb-4">
          <div className="col-span-1">
            <p className="text-lg text-tail-blue mb-2 font-medium">CINE</p>
            <p className="text-lg">{patient.idNumber}</p>
          </div>
          <div className="col-span-1">
            <p className="text-lg text-tail-blue mb-2 font-medium">Nom</p>
            <p className="text-lg">{patient.lastName}</p>
          </div>
          <div className="col-span-1">
            <p className="text-lg text-tail-blue mb-2 font-medium">Prénom</p>
            <p className="text-lg">{patient.firstName}</p>
          </div>
          <div className="col-span-1">
            <p className="text-lg text-tail-blue mb-2 font-medium">Sexe</p>
            <p className="text-lg">{patient.gender}</p>
          </div>
          <div className="col-span-1">
            <p className="text-lg text-tail-blue mb-2 font-medium">Date de naissance <span className="text-light-tail">*</span></p>
            <p className="text-lg">{patient.birthDate}</p>
          </div></div>
          <div className="grid grid-cols-5 gap-6 mt-3 ml-9 border-b border-[#DADADA] pb-4">
          <div className="col-span-1 ">
            <p className="text-lg text-tail-blue mb-2 font-medium">Couverture</p>
            <p className="text-lg">{patient.coverage}</p>
          </div>
          <div className="col-span-1">
            <p className="text-lg text-tail-blue mb-2 font-medium">Région</p>
            <p className="text-lg">{patient.lastName}</p>
          </div>
          <div className="col-span-1">
            <p className="text-lg text-tail-blue mb-2 font-medium">Ville</p>
            <p className="text-lg">{patient.coverage}</p>
          </div>
          <div className="col-span-1">
            <p className="text-lg text-tail-blue mb-2 font-medium">Commune</p>
            <p className="text-lg">{patient.lastName}</p>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-6 mt-3 ml-9">
          <div className="col-span-1">
            <p className="text-lg text-tail-blue mb-2 font-medium">Téléphone mobile</p>
            <p className="text-lg">0637346201</p>
          </div>

          <div className="col-span-1">
            <p className="text-lg text-tail-blue mb-2 font-medium">Adresse</p>
            <p className="text-lg">93 Rue Meskallilie, Casablanca 20250</p>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-1">
            <p className="text-lg text-tail-blue mb-2 font-medium">Complément d’adresse</p>
            <p className="text-lg">93 Rue Meskallilie, Casablanca 20250</p>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;