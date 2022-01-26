import { useState } from "react";
import "./App.css";
import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";
import FeedbackData from "./components/Feedbackdata";
import FeedbackList from "./components/FeedbackList";

import FeedbackStat from "./components/FeedbackStat";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";
import AboutPage from "./pages/AboutPage";
import { Router } from "react-router-dom";
function App() {
  const [feedback, SetFeedBack] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    SetFeedBack([...feedback, newFeedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      SetFeedBack(feedback.filter((item) => item.id != id));
    }
  };

  return (
    <Router>
      <Header />

      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStat feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        <AboutPage/>
        
      </div>
    </Router>
  );
}

export default App;
