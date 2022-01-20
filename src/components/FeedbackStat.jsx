import React from "react";

const FeedbackStat = ({ feedback }) => {
  let average =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;
    average=Math.round(average * 100) / 100;
  return (
    <div className="feedback-stats">
      <h4>{feedback.length}Reviews</h4>
      <h4>Average rating:{isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStat;
