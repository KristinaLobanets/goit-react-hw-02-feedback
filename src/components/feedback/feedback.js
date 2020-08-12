import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ onClick }) => {
  return (
    <div>
      <button type="button" name="good" onClick={() => onClick("good")}>
        Good
      </button>
      <button type="button" name="neutral" onClick={() => onClick("neutral")}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={() => onClick("bad")}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  clickGood: PropTypes.func,
  clickNeutral: PropTypes.func,
  clickBad: PropTypes.func,
};
