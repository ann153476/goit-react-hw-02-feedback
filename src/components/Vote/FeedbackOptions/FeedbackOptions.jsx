import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, leaveVote }) => {
  return (
    <section>
      <h4>Leave your vote</h4>

      {options.map(option => (
        <button key={option} onClick={() => leaveVote(option)}>
          {option}
        </button>
      ))}
    </section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.string.isRequired,
      neutral: PropTypes.string.isRequired,
      bad: PropTypes.string.isRequired,
    })
  ),
  leaveVote: PropTypes.func.isRequired,
};

export default FeedbackOptions;
