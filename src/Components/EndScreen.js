import React,{useContext} from 'react'
import {QuizContext} from '../Helpers/Context'

export const EndScreen = () => {
    const {name,score} = useContext(QuizContext)
    return (
        <div className="EndScreen">
            <h1></h1>
        </div>
    )
}

