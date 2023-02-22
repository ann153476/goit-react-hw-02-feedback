import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

import s from './vote.module.css';

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

  countPositiveFeedbackPercentage() {
    const value = this.state.good;
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const result = Math.round((value / total) * 100);
    return result;
  }

  //ця функція має бути стрілочною інакше втратимо thise
  leaveVote = propName => {
    this.setState(prevState => {
      return { [propName]: prevState[propName] + 1 };
    });
  };

  render() {
    console.log(Object.keys(this.state));
    const total = this.countTotalFeedback();

    const positive = this.countPositiveFeedbackPercentage();
    return (
      <div className={s.box}>
        <Section>
          <FeedbackOptions
            options={Object.keys(this.state)}
            leaveVote={this.leaveVote}
          />
        </Section>

        {this.countTotalFeedback() ? (
          <Section>
            <Statistics
              total={total}
              positive={positive}
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default Vote;
