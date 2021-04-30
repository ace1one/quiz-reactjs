import React, {useState, useContext} from 'react'
import {Questions} from '../Helpers/QuestionBank'
import {QuizContext} from '../Helpers/Context'

export const Quiz = () => {
    const {score,setScore, setGameState} =  useContext(QuizContext)
    const [currquestion,setQuestion] = useState(0);
    const [ansChoose,setAnsChose] = useState("")

    const nextQuestion= ()=>{
        if(Questions[currquestion].ans === ansChoose ){
            setScore(score+1)
        }
        if(currquestion !==Questions.length -1 ){
            setQuestion(currquestion +1)
        }
        else{
            setGameState("end")
        }
        
    }

    return (
        <div className="QuesAns">
          
            <h1>{Questions[currquestion].ques}</h1>
          
            <button onClick={(e)=>setAnsChose("opt1")} >
                {Questions[currquestion].opt1} </button> <br></br>
            <button onClick={(e)=>setAnsChose("opt2")}>
                {Questions[currquestion].opt2}</button> <br></br>
            <button onClick={(e)=>setAnsChose("opt3")}>
                {Questions[currquestion].opt3}</button> <br></br>
            <button onClick={(e)=>setAnsChose("opt4")} >
                {Questions[currquestion].opt4}</button> <br></br>
           
         {currquestion ===Questions.length -1 ? <button id="finishButton" onClick={nextQuestion}>Finish</button>
         : <button id="nextButton" onClick={nextQuestion}>Next</button> }
           
        </div>
    )
}

