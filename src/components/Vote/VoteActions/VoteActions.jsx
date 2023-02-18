

const VoteActions = ({leaveVote}) => {
    return (
        <div>
            <h4>Leave your vote</h4>
            <button onClick={()=> leaveVote("good")}>good</button>
            <button onClick={()=> leaveVote("neutral")}>neutral</button>
            <button onClick={()=> leaveVote("bad")}>bad</button>
        </div>
    )
}

export default VoteActions;