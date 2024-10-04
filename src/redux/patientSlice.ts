import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Patient {
  id: string;
  dateOpened: string;
  lastName: string;
  firstName: string;
  birthDate: string;
  gender: string;
  idNumber: string;
  coverage: string;
  lastUpdate: string;
  region: string;        
  city: string;                
  commune: string;            
  mobile: string;              
  address: string;              
  addressComplement: string; 
}

interface PatientState {
  patients: Patient[];
}

const initialState: PatientState = {
  patients: [
    {
      id: "1",
      dateOpened: "05/12/2023",
      lastName: "Bouayaben",
      firstName: "Mehdi",
      birthDate: "01/01/1997",
      gender: "M",
      idNumber: "BK653575",
      coverage: "CNOPS",
      lastUpdate: "05/12/2023 12:45",
      region: "Region 1",           
      city: "City 1",                
      commune: "Commune 1",          
      mobile: "123456789",         
      address: "123 Main St",       
      addressComplement: "Apt 4B",
    },
    {
      id: "2",
      dateOpened: "05/12/2023",
      lastName: "Cherkaoui",
      firstName: "Mehdi",
      birthDate: "15/08/1984",
      gender: "M",
      idNumber: "BK326584",
      coverage: "CNSS",
      lastUpdate: "05/12/2023 12:45",
      region: "Region 2",           
      city: "City 2",                
      commune: "Commune 2",          
      mobile: "123456789",         
      address: "123 Main St",       
      addressComplement: "Apt 4B",
    },
    {
      id: "3",
      dateOpened: "05/12/2023",
      lastName: "Mohtadi",
      firstName: "Amina",
      birthDate: "29/10/1994",
      gender: "F",
      idNumber: "BK125863",
      coverage: "CNSS",
      lastUpdate: "05/12/2023 12:45",
      region: "Region 3",           
      city: "City 3",                
      commune: "Commune 3",          
      mobile: "123456789",         
      address: "123 Main St",       
      addressComplement: "Apt 4B",
    },
    {
      id: "4",
      dateOpened: "05/12/2023",
      lastName: "Lakhdar",
      firstName: "Karim",
      birthDate: "16/05/2000",
      gender: "M",
      idNumber: "BK224108",
      coverage: "CNSS",
      lastUpdate: "05/12/2023 12:45",
      region: "Region 1",           
      city: "City 1",                
      commune: "Commune 1",          
      mobile: "123456789",         
      address: "123 Main St",       
      addressComplement: "Apt 4B",
    },
    {
      id: "5",
      dateOpened: "05/12/2023",
      lastName: "Sbai",
      firstName: "Yassine",
      birthDate: "10/12/1979",
      gender: "M",
      idNumber: "BK235114",
      coverage: "CNOPS",
      lastUpdate: "05/12/2023 12:45",
      region: "Region 2",           
      city: "City 2",                
      commune: "Commune 2",          
      mobile: "123456789",         
      address: "123 Main St",       
      addressComplement: "Apt 4B",
    },
    {
      id: "6",
      dateOpened: "05/12/2023",
      lastName: "Ait Taleb",
      firstName: "Asmaa",
      birthDate: "22/06/1995",
      gender: "F",
      idNumber: "BK121416",
      coverage: "CNOPS",
      lastUpdate: "05/12/2023 12:45",
      region: "Region 3",           
      city: "City 3",                
      commune: "Commune 3",          
      mobile: "123456789",         
      address: "123 Main St",       
      addressComplement: "Apt 4B",
    },
    {
      id: "7",
      dateOpened: "05/12/2023",
      lastName: "Ait Taleb",
      firstName: "Asmaa",
      birthDate: "22/06/1995",
      gender: "F",
      idNumber: "BK121416",
      coverage: "CNOPS",
      lastUpdate: "05/12/2023 12:45",
      region: "Region 1",           
      city: "City 1",                
      commune: "Commune 1",          
      mobile: "123456789",         
      address: "123 Main St",       
      addressComplement: "Apt 4B",
    },
    {
      id: "8",
      dateOpened: "05/12/2023",
      lastName: "Bouayaben",
      firstName: "Mehdi",
      birthDate: "01/01/1997",
      gender: "M",
      idNumber: "BK653575",
      coverage: "CNOPS",
      lastUpdate: "05/12/2023 12:45",
      region: "Region 2",           
      city: "City 2",                
      commune: "Commune 2",          
      mobile: "123456789",         
      address: "123 Main St",       
      addressComplement: "Apt 4B",
    },
    {
      id: "9",
      dateOpened: "05/12/2023",
      lastName: "Cherkaoui",
      firstName: "Mehdi",
      birthDate: "15/08/1984",
      gender: "M",
      idNumber: "BK326584",
      coverage: "CNSS",
      lastUpdate: "05/12/2023 12:45",
      region: "Region 3",           
      city: "City 3",                
      commune: "Commune 3",          
      mobile: "123456789",         
      address: "123 Main St",       
      addressComplement: "Apt 4B",
    },
    {
      id: "10",
      dateOpened: "05/12/2023",
      lastName: "Mohtadi",
      firstName: "Amina",
      birthDate: "29/10/1994",
      gender: "F",
      idNumber: "BK125863",
      coverage: "CNSS",
      lastUpdate: "05/12/2023 12:45",
      region: "Region 1",           
      city: "City 1",                
      commune: "Commune 1",          
      mobile: "123456789",         
      address: "123 Main St",       
      addressComplement: "Apt 4B",
    },
    {
      id: "11",
      dateOpened: "05/12/2023",
      lastName: "Lakhdar",
      firstName: "Karim",
      birthDate: "16/05/2000",
      gender: "M",
      idNumber: "BK224108",
      coverage: "CNSS",
      lastUpdate: "05/12/2023 12:45",
      region: "Region 2",           
      city: "City 2",                
      commune: "Commune 2",          
      mobile: "123456789",         
      address: "123 Main St",       
      addressComplement: "Apt 4B",
    },
    {
      id: "12",
      dateOpened: "05/12/2023",
      lastName: "Sbai",
      firstName: "Yassine",
      birthDate: "10/12/1979",
      gender: "M",
      idNumber: "BK235114",
      coverage: "CNOPS",
      lastUpdate: "05/12/2023 12:45",
      region: "Region 3",           
      city: "City 3",                
      commune: "Commune 3",          
      mobile: "123456789",         
      address: "123 Main St",       
      addressComplement: "Apt 4B",
    },
  ],
};

const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    addPatient: (state, action: PayloadAction<Patient>) => {
      state.patients.push(action.payload);
    },
  },
});

export const { addPatient } = patientSlice.actions;
export const selectPatients = (state: { patients: PatientState }) =>
  state.patients.patients;
export const selectPatientById = (id: string) => (state: { patients: PatientState }) =>
  state.patients.patients.find(patient => patient.id === id);

export default patientSlice.reducer;