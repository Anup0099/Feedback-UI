import React, { useState } from "react";
import Card from "./shared/Card";
import Buttons from "./Buttons";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({handleAdd}) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setDisabled] = useState(true);
  const [message,setMessage]=useState("");

  const handleClick = (e) => {
    if(text===''){
      setDisabled(true);
      setMessage(null)
    }else if(text !== '' && text.trim().length <= 10){
      setDisabled(true);
      setMessage("Please enter atleast 10 characters")
    }else{
      setDisabled(false);
      setMessage(null)
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length>10){
      const newFeedback = {
        text,
        rating,
      }

      handleAdd(newFeedback);
      setText("");
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>how would you rate our service with us?</h2>
        <RatingSelect select={(rating)=>setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            onChange={handleClick}
            placeholder="Write a review"
            value={text}
          />
          <Buttons type="submit" 
          version="secondary" isDisabled={btnDisabled} >
            Send
          </Buttons>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
