import PropTypes from 'prop-types';

import {
  ButtonList,
  ButtonItem,
  Button,
} from 'components/FeedbackOptions/FeedbackOptionst.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {Object.keys(options).map(option => {
        return (
          <ButtonItem key={option}>
            <Button type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </Button>
          </ButtonItem>
        );
      })}
    </ButtonList>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
