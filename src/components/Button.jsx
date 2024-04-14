const Button = ({ label, iconUrl }) => {
  return (
    <button className="bg-coral-red text-white font-bold py-3 px-4 rounded-full flex items-center justify-center gap-2 font-montserrat border-coral-red leading-none
     hover:bg-red-600 hover:text-white transition duration-300 ease-in-out hover:scale-x-110">
      {label}
      <img src={iconUrl} alt="button-logo" className="w-10 h-8 ml-2 rounded-full" />
    </button>
  );
};

export default Button;
