import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ clickGood, clickNeutral, clickBad }) => {
  return (
    <div>
      <button type="button" name="good" onClick={clickGood}>
        Good
      </button>
      <button type="button" name="neutral" onClick={clickNeutral}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={clickBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
