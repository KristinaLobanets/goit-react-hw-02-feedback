import React, { Component } from "react";
import Title from "../components/titlle/title";
import FeedbackOptions from "../components/feedback/feedback";
import Statistik from "../components/statistik/statistik";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  good = this.state.good;
  neutral = this.state.neutral;
  bad = this.state.bad;

  clickGood = (good) => {
    return good + 1;
  };
  clickNeutral = (neutral) => {
    return neutral + 1;
  };
  clickBad = (bad) => {
    return bad + 1;
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, countTotalFeedback) => {
    return (countTotalFeedback / good) * 100;
  };

  render() {
    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;
    return (
      <>
        <Title />
        <FeedbackOptions />
        <Statistik
          good={good}
          neutral={neutral}
          bad={bad}
          countTotal={this.countTotalFeedback()}
          countPercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}
export default App;
