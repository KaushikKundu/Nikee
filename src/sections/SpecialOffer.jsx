import { offer } from "../assets/images";
const SpecialOffer = () => {
  return (
    <section>
      <h2 className="font-montserrat font-semibold text-4xl text-center">
        Special
        <span className="text-coral-red ml-2">Offer</span>
      </h2>
      <section className="flex items-center justify-evenly max-md:flex-col">
      <div className="flex-1 mt-8 ">
        <img
          src={offer}
          alt="shoeImage"
          width={450}
          height={400}
          className="object-contain"
        />
      </div>
      <section className="pt-6 flex flex-col flex-1">
        <p className="mt-2 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-8 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
      </section>
     
      </section>
    </section>
  );
};

export default SpecialOffer;
