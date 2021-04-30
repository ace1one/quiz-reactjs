import React, {useContext} from 'react'
import {QuizContext} from '../Helpers/Context'
import '../App.css'

export const MainMenu = () => {
   const {gameState, setGameState} = useContext(QuizContext)
    return (
        <div className="Menu">
            <h1>Click To Start Quiz</h1>
            <div className="menu-inside">
            <input type="text" placeholder="Enter Name"  />
             <br></br>
            <button onClick={()=> setGameState("quiz")}>Click</button>
            </div>
            
        
        </div>
    )
}

