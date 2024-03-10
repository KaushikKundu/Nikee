const ProductShoeCard = ({imgURL,name, price}) => {
    return ( 
        <div className="flex flex-col gap-2 cursor-pointer hover:shadow-2xl p-3 rounded-xl ">
        <img src={imgURL} alt="productcard" className="object-contain" width={300} height={300} />
        <p className="font-palanquin text-xl font-medium">{name}</p>
        <p className="font-palanquin text-coral-red text-xl">{price}</p>
        </div>
     );
}
 
export default ProductShoeCard;