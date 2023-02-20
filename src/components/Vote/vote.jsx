import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

import s from './vote.module.css';

const message = 'There is no feedback';

class Vote extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage(name) {
    const value = this.state[name];
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const result = Math.round((value / total) * 100);
    return result;
  }

  calcNumber(name) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[name];
    const result = value;
    return result;
  }

  //ця функція має бути стрілочною інакше втратимо thise
  leaveVote = propName => {
    this.setState(prevState => {
      return { [propName]: prevState[propName] + 1 };
    });
  };

  render() {
    const total = this.countTotalFeedback();

    const positive = this.countPositiveFeedbackPercentage('good');
    const good = this.calcNumber('good');
    const neutral = this.calcNumber('neutral');
    const bad = this.calcNumber('bad');
    return (
      <div className={s.box}>
        <FeedbackOptions leaveVote={this.leaveVote} />
        {this.countTotalFeedback() ? (
          <Statistics
            total={total}
            positive={positive}
            good={good}
            neutral={neutral}
            bad={bad}
          />
        ) : (
          <Notification message={message} />
        )}
      </div>
    );
  }
}

export default Vote;
