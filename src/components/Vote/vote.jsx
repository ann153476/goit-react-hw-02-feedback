import { Component } from "react";
import VoteActions from "./VoteActions/VoteActions";
import VoteResult from "./VoteResult/VoteResult";

import s from "./vote.module.css";

class Vote extends Component {
    state = {
        good : 0,
        neutral : 0,
        bad : 0
    }

    calcTotal(){
        const {good,neutral,bad}= this.state;
        const total = good + neutral + bad;
        return total;
    }

    calcPercent(name) {
        const value = this.state[name]; 
        const total = this.calcTotal();
        if(!total) {return 0;}
        const result = Math.round((value / total) * 100);
        return result;
    }

    calcNumber(name) {
        const total = this.calcTotal();
        if(!total) {return 0;}
        const value = this.state[name]; 
        const result = value;
        return result;
    }

    //ця функція має бути стрілочною інакше втратимо thise
    leaveVote = (propName) => {
        this.setState(prevState => {
            return {[propName]:prevState[propName]+1}
        })
    }

    render(){
        const total = this.calcTotal();

        const positive = this.calcPercent("good");
        const good = this.calcNumber("good")
        const neutral = this.calcNumber("neutral");
        const bad = this.calcNumber("bad");
        return(
            <div className={s.box}>
                <VoteActions leaveVote={this.leaveVote}/>
                <VoteResult
                total={total} positive={positive} good={good} neutral={neutral} bad={bad}
                />
            </div>
            
        )
    }
}

export default Vote;