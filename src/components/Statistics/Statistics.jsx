import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  Description,
  Value,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        <Description>
          Good:
          <Value>{good}</Value>
        </Description>
      </StatisticsItem>

      <StatisticsItem>
        <Description>
          Neutral:
          <Value>{neutral}</Value>
        </Description>
      </StatisticsItem>

      <StatisticsItem>
        <Description>
          Bad:
          <Value>{bad}</Value>
        </Description>
      </StatisticsItem>

      <StatisticsItem>
        <Description>
          Total:
          <Value>{total}</Value>
        </Description>
      </StatisticsItem>

      <StatisticsItem>
        <Description>
          Positive Feedback:
          <Value>{positivePercentage}%</Value>
        </Description>
      </StatisticsItem>
    </StatisticsList>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
