import React,{useContext} from 'react'
import {QuizContext} from '../Helpers/Context'
import {Questions} from '../Helpers/QuestionBank'

export const EndScreen = () => {
    const {name,score,setScore,setGameState} = useContext(QuizContext)
    const playAgain= ()=>{
         setScore(0)
         setGameState("quiz")
    }
   const quitAgain=()=>{
       setScore(0)
       setGameState("menu")
   }

    return (
        <div className="EndScreen">
            <h1>{name}, You have score {score} out of {Questions.length} </h1>
            <div> <button id="again"   onClick={playAgain}>Play Again</button> 
             <button id="quit" onClick={quitAgain}>Quit</button> </div>
           

        </div>
    )
}

