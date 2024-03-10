const ShoeCard = ({ imgUrl, bigShoeImg, changeBigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl) {
        console.log(imgUrl)
      changeBigShoeImg(imgUrl.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${bigShoeImg == imgUrl.bigShoe ? "border-coral-red" : "border-slate-gray-400"} bg-cover bg-card bg-center cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <img
        src={imgUrl.thumbnail}
        alt="shoe collection"
        width={127}
        height={100}
        className="object-contain"
      />
    </div>
  );
};

export default ShoeCard;
