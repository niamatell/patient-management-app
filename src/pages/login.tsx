import React, { useState } from 'react';
import map from '../assets/Morrocomap.png';
import eye from '../assets/eye.svg';
import select from '../assets/select.svg';
import arrows from '../assets/arrows.svg';
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";



const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    location: "UM Amezmiz",
    box: "BOX 1",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(userData));
    navigate("/patients");
  };
  return (
    <div>
        <div className="relative flex  mt-10">

        <div className=" justify-start flex ">
          <img src={map} alt="map" className="h-[82%] mr-[-10vr]" />
        </div>

        <form onSubmit={handleLogin} className=" bg-white shadow-lg w-[30%] p-10 flex flex-col rounded-lg font-inter h-[80%] mt-16 ml-[17rem]">
          <h1 className="text-center text-tail-blue text-[21px] p-4">Connectez-vous à votre compte</h1>
          <div className="mb-4 relative">
            <select id="location"
              className="w-full p-2 border-[1.67px] border-tail-blue rounded-[7px] h-[50px] text-light-tail appearance-none focus:outline-none focus:border-tail-blue focus:border-[2px]"
              value={userData.location}
            onChange={handleChange}
              
            >
              <option value="UM Amezmiz">UM Amezmiz</option>
              <option value="Tanger">CHU Tanger</option>
              <option value="Rabat">Souissi Rabat</option>
            </select>
            <div className="absolute top-1/2 right-4 w-[11.11px] h-[19.28px]  transform  clip-path-triangle">
            <img src={select} alt="select" />
          </div>
          </div>

          <div className="mb-4 relative">
            <select id="box"
              className=" w-full p-2 border-[1.67px] border-tail-blue rounded-[7px] h-[50px] text-light-tail appearance-none focus:outline-none focus:border-tail-blue focus:border-[2px]"
              value={userData.box}
            onChange={handleChange}
            >
            <option value="BOX 1">BOX 1</option>
            <option value="BOX 2">BOX 2</option>
            <option value="BOX 3">BOX 3</option>
            </select>
            <div className="absolute top-1/2 right-4 w-[11.11px] h-[19.28px]  transform  clip-path-triangle">
            <img src={select} alt="select" />
          </div>
          </div>

          <hr className='border-[1.5px] border-light-grey rounded-[4px]'/>
           <br/>
          <div className="mb-4">
            <input id="username"
              type="text"
              placeholder="Entrez votre identifiant"
              className="w-full p-2 border border-tail-blue rounded-[7px] h-[50px]"
              value={userData.username}
            onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4 relative">
            <input id="password"
              type="password"
              placeholder="Tapez votre mot de passe"
              className="w-full p-2 border border-tail-blue rounded-[7px] h-[50px]  pr-10"
              value={userData.password}
            onChange={handleChange}
              required
            />      
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2"> 
            <img src={eye} alt="eye icon" /> 
          </span>
            
  
        </div>
        <button
            onClick={handleLogin}
            className="w-full bg-custom-gradient-2 text-white py-2 rounded-lg flex items-center justify-center"
          >
            Connexion 
            <img src={arrows} alt="vectorgrp" className="ml-2 mt-[3px] h-[15px] w-[15px]" />
          </button>
      </form>
</div>
</div>
  );
};

export default Login;
