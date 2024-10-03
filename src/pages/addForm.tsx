import React from 'react';
import recherche from '../assets/recherche.svg';
import dossier from '../assets/dossier.svg';

const AddForm: React.FC = () => {
  return (
    <div className="p-4 my-4 bg-custom-gradient w-full rounded-[10px] ">
      {/* Header */}
      <div className='flex justify-center items-center gap-4 h-24'>
      <div className="w-1/3 p-4 rounded-lg text-white flex items-center gap-2">
        <img src={dossier} alt='recherche'/>
        <h1 className="text-tail-blue font-bold font-ubuntu">Nouveau dossier</h1>
        </div></div>

      <div className="overflow-x-auto  border-2 border-tail-blue rounded-[10px]">
        <form>

        </form>
      </div>

      {/* Pagination */}
      <div className="flex mt-4 w-full">
        <div className="">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">1</button>
        </div>
        <div className="">
        <button className="bg-gray-200 px-4 py-2 rounded-lg">2</button>
</div>
      </div>
    </div>
  );
};

export default AddForm;

