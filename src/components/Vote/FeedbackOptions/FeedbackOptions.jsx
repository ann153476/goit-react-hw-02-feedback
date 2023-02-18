import PropTypes from 'prop-types';

const FeedbackOptions = ({leaveVote}) => {
    return (
        <section>
            <h4>Leave your vote</h4>
            <button onClick={()=> leaveVote("good")}>good</button>
            <button onClick={()=> leaveVote("neutral")}>neutral</button>
            <button onClick={()=> leaveVote("bad")}>bad</button>
        </section>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;