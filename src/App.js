import { useState } from 'react';
import './App.css';
import FeedbackItem from './components/FeedbackItem';
import Header from './components/Header';
import FeedbackData from './components/Feedbackdata';
import FeedbackList from './components/FeedbackList';
import Card from './components/shared/Card';
import FeedbackStat from './components/FeedbackStat';
function App() {
  const [feedback,SetFeedBack]= useState(FeedbackData)

  const deleteFeedback=(id)=>{
    if(window.confirm('Are you sure you want to delete?')){
     SetFeedBack(feedback.filter((item)=>item.id !=id))
    }
  }
  return (
    <>
     <Header/>
     <div className='container'>
       <FeedbackStat feedback={feedback}/>
       <FeedbackList feedback={feedback} 
       handleDelete={deleteFeedback}
       />

       
       
     </div>
    </>
  );
}

export default App;
