import { useState } from "react";

export default function Options({ updateFeedback, resetFeedback, value }) {
 return (
  <div>
   <button onClick={() => updateFeedback("good")}>Good</button>
   <button onClick={() => updateFeedback("neutral")}>Neutral</button>
   <button onClick={() => updateFeedback("bad")}>Bad</button>
   {value && <button onClick={resetFeedback}>Reset</button>}
  </div>
 );
}
