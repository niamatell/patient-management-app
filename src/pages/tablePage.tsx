
import React from 'react';
import recherche from '../assets/recherche.svg';
import search from '../assets/search.svg';
import filter from '../assets/filter.svg';
import nouveauPatient from '../assets/nouveauPatient.svg';
import next from '../assets/next.svg';

interface Patient {
  dateOpened: string;
  lastName: string;
  firstName: string;
  birthDate: string;
  gender: string;
  idNumber: string;
  coverage: string;
  lastUpdate: string;
}

const patients: Patient[] = [
    { dateOpened: "05/12/2023", lastName: "Bouayaben", firstName: "Mehdi", birthDate: "01/01/1997", gender: "M", idNumber: "BK653575", coverage: "CNOPS", lastUpdate: "05/12/2023 12:45" },
    { dateOpened: "05/12/2023", lastName: "Cherkaoui", firstName: "Mehdi", birthDate: "15/08/1984", gender: "M", idNumber: "BK326584", coverage: "CNSS", lastUpdate: "05/12/2023 12:45" },
    { dateOpened: "05/12/2023", lastName: "Mohtadi", firstName: "Amina", birthDate: "29/10/1994", gender: "F", idNumber: "BK125863", coverage: "CNSS", lastUpdate: "05/12/2023 12:45" },
    { dateOpened: "05/12/2023", lastName: "Lakhdar", firstName: "Karim", birthDate: "16/05/2000", gender: "M", idNumber: "BK224108", coverage: "CNSS", lastUpdate: "05/12/2023 12:45" },
    { dateOpened: "05/12/2023", lastName: "Sbai", firstName: "Yassine", birthDate: "10/12/1979", gender: "M", idNumber: "BK235114", coverage: "CNOPS", lastUpdate: "05/12/2023 12:45" },
    { dateOpened: "05/12/2023", lastName: "Ait Taleb", firstName: "Asmaa", birthDate: "22/06/1995", gender: "F", idNumber: "BK121416", coverage: "CNOPS", lastUpdate: "05/12/2023 12:45" },
  ];

const TablePage: React.FC = () => {
  return (
    <div className="p-4 my-4 w-full rounded-[10px] bg-custom-gradient-3">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 h-auto md:h-24"> 
        <div className="w-full md:w-1/3 p-4 rounded-lg text-white flex items-center gap-2">
          <img src={recherche} alt='recherche' />
          <h1 className="text-tail-blue font-bold font-Ubuntu text-[24px]">Recherche de patients</h1>
        </div>

        <div className="w-full md:w-1/2 flex flex-col sm:flex-row items-center gap-4 justify-start">
          <div className='mb-1 relative w-2/3'>
            <input
              type="text"
              placeholder="Recherche par (Nom, Prénom, CINE...)"
              className="w-full p-2 border-2 border-tail-blue rounded-[30px] h-[50px] pr-10"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <img src={search} alt="search-icon" />
            </span>
          </div>

          <button className="border-2 border-tail-blue rounded-[30px] text-light-tail h-[50px] px-4 py-2 flex items-center">
            <img src={filter} alt="filter" />
            &nbsp; &nbsp;Filtre
          </button>
        </div>

        <div className="w-full md:w-auto p-4 rounded-lg text-white">
          <button className="bg-light-tail text-white px-4 py-2 rounded-[20px] flex items-center">
            <img src={nouveauPatient} alt="nouveau-patient" />
            <span>&nbsp; Nouveau dossier</span>
          </button>
        </div>
      </div>

      {/* Patient Table */}
      <div className="overflow-x-auto border-2 border-tail-blue rounded-[10px] p-8 mt-4">
        <table className="min-w-full table-auto"> 
          <thead>
            <tr className="w-full text-light-tail items-center text-center">
              <th className="p-3">Date d'ouverture</th>
              <th className="p-3">Nom</th>
              <th className="p-3">Prénom</th>
              <th className="p-3">Date de naissance</th>
              <th className="p-3">Sexe</th>
              <th className="p-3">N°CINE</th>
              <th className="p-3">Couverture</th>
              <th className="p-3">Dernière mise à jour</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr
                key={index}
                className={`border-t font-Ubuntu font-bold text-[16px] text-tail-blue text-center ${
                  index % 2 === 0 ? 'bg-[#d9e3ec]' : 'bg-transparent'
                }`}
              >
                <td className="p-3">{patient.dateOpened}</td>
                <td className="p-3">{patient.lastName}</td>
                <td className="p-3">{patient.firstName}</td>
                <td className="p-3">{patient.birthDate}</td>
                <td className="p-3">{patient.gender}</td>
                <td className="p-3">{patient.idNumber}</td>
                <td className="p-3">{patient.coverage}</td>
                <td className="p-3">{patient.lastUpdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="w-full bg-white flex justify-end mt-4">
        <div className="flex items-center">
          <button className="px-4 py-2 rounded-lg">1</button>
          <button className="px-4 py-2 rounded-lg">2</button>
          <button className="px-4 py-2 rounded-lg">3</button>
        </div>
        <button className="p-2 w-12">
          <img src={next} alt='next' />
        </button>
      </div>
    </div>
  );
};

export default TablePage;
