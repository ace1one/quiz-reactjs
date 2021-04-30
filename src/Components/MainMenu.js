import React, {useContext} from 'react'
import {QuizContext} from '../Helpers/Context'
import '../App.css'

export const MainMenu = () => {
   const {gameState, setGameState, name, setName} = useContext(QuizContext)

    const changeGameState= () =>{
        if (name=== ""){
            setGameState("menu")
        }
        else{
            setGameState("quiz")
        }
    }

    return (
       <div className="Menu">
         <h1>Click To Start Quiz</h1>
            <div className="menu-inside">
            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => changeGameState()}>Click</button>
            </div>
       </div>
    );
}

