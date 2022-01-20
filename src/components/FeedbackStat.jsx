import React from 'react';

const FeedbackStat = ({feedback}) => {
  return <div className='feedback-stats'>
      <h4>{feedback.length}</h4>
  </div>;
};

export default FeedbackStat;
