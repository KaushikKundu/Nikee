import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
import { shoes, statistics } from "../constants";
const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex lg:flex-row flex-col justify-center min-h-screen gap-1 max-container"
    >
      <div className="relative lg:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-montserrat text-[72px] font-bold leading-tight">
          <span className="whitespace-nowrap relative z-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-5 mb-12 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start w-full mt-20 gap-8 whitespace-nowrap">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center flex-col lg:min-h-screen max-xl:py-20 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={550}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex justify-center items-center w-full py-8 z-10 gap-5 absolute -bottom-[10%]">
          {shoes.map((shoe) => (
            <ShoeCard key={shoe.thumbnail} 
            imgUrl={shoe}
            bigShoeImg={bigShoeImg}
            changeBigShoeImg= {(shoe) => setBigShoeImg(shoe)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
