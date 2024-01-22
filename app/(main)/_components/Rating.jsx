import { Rating } from "react-simple-star-rating";
const RatingComponent = () => {
  return (
    <div>
      <Rating
        rtl={true}
        className="text-yellow-light"
        size={15}
        initialValue={0.5}
        SVGclassName={"inline-block"}
      />
    </div>
  );
};
export default RatingComponent;
