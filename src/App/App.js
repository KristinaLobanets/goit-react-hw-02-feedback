import React, { Component } from "react";
import Title from "../components/titlle/title";
import FeedbackOptions from "../components/feedback/feedback";
import Statistik from "../components/statistik/statistik";
import Notification from "../components/Notification/Notification";
import PropTypes from "prop-types";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = (type) =>
    this.setState((preState) => ({
      [type]: preState[type] + 1,
    }));

  // clickGood = () =>
  //   this.setState((preState) => ({
  //     good: preState.good + 1,
  //   }));

  // clickNeutral = () =>
  //   this.setState((preState) => ({
  //     neutral: preState.neutral + 1,
  //   }));

  // clickBad = () =>
  //   this.setState((preState) => ({
  //     bad: preState.bad + 1,
  //   }));

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback());
  };

  render() {
    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;
    return (
      <>
        <Title />
        <FeedbackOptions
          onClick={this.onClick}
          // clickGood={this.clickGood}
          // clickNeutral={this.clickNeutral}
          // clickBad={this.clickBad}
        />
        {this.countTotalFeedback() > 0 ? (
          <Statistik
            good={good}
            neutral={neutral}
            bad={bad}
            countTotal={this.countTotalFeedback()}
            countPercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification />
        )}
      </>
    );
  }
}
export default App;

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
