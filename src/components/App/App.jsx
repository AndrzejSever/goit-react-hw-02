import { useState, useEffect } from "react";

import Notification from "../Notification/Notification";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";

export default function App() {
 const [clicks, setClicks] = useState(() => {
  const savedClicks = window.localStorage.getItem("saved-clicks");
  return savedClicks !== null ? JSON.parse(savedClicks) : 0;
 });

 const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
 const positive = Math.round((clicks.good / totalFeedback) * 100);

 useEffect(() => {
  window.localStorage.setItem("saved-clicks", JSON.stringify(clicks));
 }, [clicks]);

 const updateFeedback = (feedbackType) => {
  setClicks({
   ...clicks,
   [feedbackType]: clicks[feedbackType] + 1,
  });
 };

 const resetFeedback = () => {
  setClicks({
   good: 0,
   neutral: 0,
   bad: 0,
  });
 };

 return (
  <>
   <Description />
   <Options updateFeedback={updateFeedback} value={totalFeedback} resetFeedback={resetFeedback} />
   {totalFeedback == 0 ? (
    <Notification />
   ) : (
    <Feedback value={clicks} totalFeedback={totalFeedback} positive={positive}></Feedback>
   )}
  </>
 );
}
