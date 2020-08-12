import React from "react";

const Statistik = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>

      <div>
        <p>
          <span>Good: </span> {good}
        </p>
        <p>
          <span>Neutral: </span>
          {neutral}
        </p>
        <p>
          <span>Bad: </span>
          {bad}
        </p>
        {/* <p>
          <span>Total: </span>
          {countTotalFeedback()}
        </p> */}
        {/* <p>
          <span>Positive feedback: </span>
          {countPositiveFeedbackPercentage()}%
        </p> */}
      </div>
    </div>
  );
};

export default Statistik;
