const Button = ({ label, iconUrl }) => {
  return (
    <button className="bg-coral-red text-white font-bold py-2 px-4 rounded-full flex items-center justify-center gap-2 font-montserrat border-coral-red leading-none">
      {label}
      <img src={iconUrl} alt="button-logo" className="w-5 h-5 ml-2 rounded-full" />
    </button>
  );
};

export default Button;
