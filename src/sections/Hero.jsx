import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { statistics } from "../constants";
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full border-2 border-red-500 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">
          Our Summer Collection
        </p>
        <h1 className="text-4xl font-palanquin font-bold mt-10 max-sm:text-[72px] max-sm:leading-none">
          <span className="xl:bg-white xl:whitespace-nowrap z-10 relative pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mr-3">Nike</span>
          Shoes
        </h1>
        <p className="mt-10 text-lg font-montserrat text-slate-gray leading-8 mb-14 sm:max-w-sm">
          {" "}
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex justify-starts items-start gap-16 mt-10 w-full flex-wrap">
          {statistics.map((item) => (
            <div key={item.label}>
              <p className="font-bold text-3xl leading-7 font-montserrat">
                {item.value}
              </p>
              <p className="text-slate-gray font-palanquin ">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe1}
          alt="heroshoe"
          className="object-contain z-10 relative"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;