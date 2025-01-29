import React, { useEffect, useState } from 'react'
import { questions } from './FileOfQuestions'

function QuiestionShow() {
    const [currentQuestion, setCurrentQuestion] = useState(getRandomQuestion())

  function getRandomQuestion( ){
    const randomIndex = Math.floor(Math.random() * questions.length)
    return questions[randomIndex] 
  }

function nextQuestionHandle (){
       setCurrentQuestion(getRandomQuestion())

}

    return (
        <div>
            <div className='bg-black text-white h-screen flex justify-center pt-36'>
                <div>
                    <h1 className='text-4xl font-bold'>Coading Quiz</h1>
                    <div>
                        <h2>{currentQuestion.q}</h2>
                        <button onClick={nextQuestionHandle}> NEXT</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default QuiestionShow