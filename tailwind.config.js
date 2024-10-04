/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue-1': '#F1FAFB',
        'light-blue-2': '#E1F4F6',
        'light-blue-3': '#F7FCFF',
        'tail-blue':'#50799E',
        'light-tail':'#1AA5C0',
        'light-grey':"#E5EBF0",
        'gray':"#858585",
        'dark-royal-blue': "#335D84",
        'custom-placeholder': '#50799E26',

    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(89.8deg, #E6F5FF -0.13%, #F3FAFF 23.56%, #F7FCFF 99.83%)',
      'custom-gradient-2':' linear-gradient(108.56deg, #20A8D3 5.8%, #01D1FF 122.34%)',
      'custom-gradient-3': 'linear-gradient(89.36deg, #FDFDFD 8.29%, #EEFCFD 98.21%)',
      'custom-gradient-4':' linear-gradient(90.84deg, #2786DD 2.37%, #19C8D3 101.75%)',



    },
    fontFamily: {
      ubuntu: ['Ubuntu', 'sans-serif'],
    },
    boxShadow: {
      'custom': '0px 2px 4px 0px #00000040', 
      'custom-2': '0px 1px 4px 0px #00467740',
      'custom-3': "2.86px 3.81px 3.81px 0px #0D88B4",
      'custom-4': "0px 4px 4px 0px #50799E57",
  


    },


  },
  plugins: [],
}

}