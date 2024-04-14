import { star } from "../assets/icons";
const ReviewCard = (props) => {
  const { rating, feedback, customerName, imgUrl } = props;
  return (
    <div className="flex gap-4 items-center flex-col p-3 cursor-pointer border-2  hover:shadow-lg hover rounded-lg">
      <img
        src={imgUrl}
        className="object-cover rounded-full"
        alt={customerName}
        width={100}
        height={100}
      />
      <p className="max-w-sm info-text text-center">{feedback}</p>
      <div className="flex items-center ">
        <img src={star} alt="star" />
        <p className="p-1">{rating}</p>
      </div>
      <h5 className="text-xl font-palanquin">{customerName}</h5>
    </div>
  );
};

export default ReviewCard;
