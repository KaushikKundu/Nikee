import { products } from "../constants";
import ProductShoeCard from "../components/ProductShoeCard";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-10">
      <div className="flex flex-col justify-center flex-wrap gap-10">
        <h2 className="text-4xl font-semibold font-montserrat py-1 leading-3">
          Popular <span className="text-coral-red">Products</span>
        </h2>
        <p className="text-lg font-montserrat text-slate-gray leading-6">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {products.map((product) => (
            <ProductShoeCard key={product.imgURL} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
