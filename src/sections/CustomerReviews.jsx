import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
const CustomerReviews  = () => {
    return ( 
        <section >
            <h2 className="font-palanquin text-4xl font-semibold text-center">What our <span className="text-coral-red">Customers</span> say</h2>
            <div className="flex flex-wrap justify-center gap-10 mt-8">
                {reviews.map((review,index) => (
                    <ReviewCard 
                    key={index}
                    rating={review.rating}
                    feedback={review.feedback}
                    customerName={review.customerName}
                    imgUrl={review.imgURL}
                    />
                ))}
            </div>
        </section>
     );
}
 
export default CustomerReviews ;