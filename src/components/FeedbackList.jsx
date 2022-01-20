import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

const FeedbackList = ({ feedback ,handleDelete}) => {
  if (!feedback || feedback.length === 0) {
    return (
      <div>
        <p>No feedback yet</p>
      </div>
    );
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item}  
        
        handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};
FeedbackList.prototype = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired

        })
    .isRequired
    ),
}
export default FeedbackList;
