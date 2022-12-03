import React, { Component } from 'react';
import { Container } from 'components/Container/Container.styled';
import { WidgetWrap } from 'components/FeedbackOptions/FeedbackOptionst.styled';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleMakeStat = event => {
    if (event.target.name === 'good') {
      this.setState(prevState => {
        return { good: prevState.good + 1 };
      });
    }
    if (event.target.name === 'neutral') {
      this.setState(prevState => {
        return { neutral: prevState.neutral + 1 };
      });
    }
    if (event.target.name === 'bad') {
      this.setState(prevState => {
        return { bad: prevState.bad + 1 };
      });
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = total => {
    return Math.floor((this.state.good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();

    const positiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage(total);

    return (
      <Container>
        <WidgetWrap>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleMakeStat}
            />
          </Section>

          <Section title="Statistics">
            {total > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positiveFeedbackPercentage}
              />
            ) : (
              <Notification message={'There is no feedback'} />
            )}
          </Section>
        </WidgetWrap>
      </Container>
    );
  }
}
