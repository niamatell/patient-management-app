/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue-1': '#E6F5FF',
        'light-blue-2': '#F3FAFF',
        'light-blue-3': '#F7FCFF',
        'tail-blue':'#50799E',
        'light-tail':'#1AA5C0',
        'light-grey':"#E5EBF0",

    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(89.8deg, #E6F5FF -0.13%, #F3FAFF 23.56%, #F7FCFF 99.83%)',
      'custom-gradient-2':' linear-gradient(108.56deg, #20A8D3 5.8%, #01D1FF 122.34%)',
      'custom-gradient-3': 'linear-gradient(89.36deg, #FDFDFD 8.29%, #EEFCFD 98.21%)',


    },
    fontFamily: {
      ubuntu: ['Ubuntu', 'sans-serif'],
    },


  },
  plugins: [],
}

}