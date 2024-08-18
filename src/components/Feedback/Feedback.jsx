export default function Feedback({ value, totalFeedback, positive }) {
 return (
  <ul>
   <li>Good:{value.good}</li>
   <li>Neutral:{value.neutral}</li>
   <li>Bad:{value.bad}</li>
   <li>Total:{totalFeedback}</li>
   <li>Positive:{positive}%</li>
  </ul>
 );
}
