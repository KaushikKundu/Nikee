import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return (
    <section className="bg-slate-950 w-full flex flex-col gap-6 py-10 h-fit items-start px-20 ">
      <div className="flex items-baseline gap-2">
        <img 
        src={footerLogo} alt="footerlogo" width={150} height={100} 
        className="object-contain mx-auto "/>
        <h2 className="text-2xl font-palanquin">Nike</h2>
      </div>
      <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-xl'>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
    <div className="flex gap-10"> 
    {
        socialMedia.map((icon) => (
           <img src={icon.src} key={icon.alt} width={40} 
           className="rounded-full bg-white p-1 hover:bg-slate-800"
           />
        ))
    }
    </div>
    <div className="flex gap-x-20 flex-wrap justify-center ">
        {
            footerLinks.map((links => (
                <div className="font-montserrat">
                    <h4 className="text-xl text-coral-red pb-5 ">{links.title}</h4>
                    <ul className="list-none">
                        {
                            links.links.map(link => (
                                <li key={link.link}
                                className="text-white-400 text-md hover:text-slate-300 p-1">
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            ))
                        }
                        </ul>
                </div>
            )))
        }
    </div>
    </section>
  );
};

export default Footer;
