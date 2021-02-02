import React from "react";
import RatingIcon from "./components/StarIcon";
export default function Rating(props) {
  const { readOnly = false, fixRating, starNumber = [1, 2, 3, 4, 5] } = props;

  const [rating, setRating] = React.useState(fixRating || 0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const onMouseEnter = (index) => {
    if (!readOnly) setHoverRating(index);
  };
  const onMouseLeave = () => {
    if (!readOnly) setHoverRating(0);
  };
  const onSaveRating = (index) => {
    if (!readOnly) setRating(index);
  };
  return (
    <div className="d-flex">
      {starNumber.map((index) => {
        return (
          <RatingIcon
            index={index}
            rating={rating}
            readOnly={readOnly}
            hoverRating={hoverRating}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onSaveRating={onSaveRating}
          />
        );
      })}
    </div>
  );
}
