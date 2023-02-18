import s from "../vote.module.css";

const VoteResult = ({total,positive,good,neutral,bad}) => {
    return (
        <div>
            <h4>Results</h4>
            
            <p>good : {good}</p>
            <p>neutral : {neutral}</p>
            <p>bad : {bad}</p>
            <p>Positive feedback : {positive}%</p>
            <p className={s.total}>Total votes : {total}</p>

        </div>
    )
}

export default VoteResult;