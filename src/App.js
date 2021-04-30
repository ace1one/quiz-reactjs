import './App.css';
import {useState} from 'react'
import { MainMenu } from './Components/MainMenu';
import {EndScreen} from './Components/EndScreen'
import {Quiz} from './Components/Quiz'
import {QuizContext} from './Helpers/Context'

function App() {
  const [gameState, setGameState] = useState("menu")
  const [name, setName] = useState("")
  const [score, setScore] = useState(0)
  return (
    <div className="App">
      <h3>Quiz App</h3>
     <QuizContext.Provider value= {{gameState,setGameState, name,setName,score, setScore}}>
        {gameState==="menu" && <MainMenu /> }
        {gameState==="quiz" && <Quiz />}
        {gameState==="end" &&  <EndScreen /> }
      </QuizContext.Provider>
      
     
    </div>
  );
}

export default App;
