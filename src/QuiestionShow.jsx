import React, { useEffect, useState } from 'react'
import { questions } from './FileOfQuestions'

function QuiestionShow() {
    const [currentQuestion, setCurrentQuestion] = useState(getRandomQuestion())

    function getRandomQuestion() {
        const randomIndex = Math.floor(Math.random() * questions.length)
        return questions[randomIndex]
    }

    function nextQuestionHandle() {
        setCurrentQuestion(getRandomQuestion())

    }

    return (
        <div>
            <div className='bg-black text-white h-screen flex justify-center pt-36 hidden'>
                <div>
                    <h1 className='text-6xl font-bold text-center'>Coading Quiz</h1>
                    <div className='w-[600px] text-center m-auto'>
                        <h2 className='text-xl font-bold my-8'>{"Q :- "} {currentQuestion.q}</h2>
                        {
                            currentQuestion.opt.map((item, index) => {
                                return (<button key={index} className='block my-4 border-2 px-4 py-1 w-64 cursor-pointer m-auto'> {item} </button>
                                )
                            })
                        }
                      <div className='mt-10 flex justify-between'>
                      <button onClick={nextQuestionHandle} className='w-26 border-2 py-1 bg-green-500 text-black cursor-pointer font-bold m-auto'> NEXT</button>
                      <button className='w-26 border-2 py-1 bg-red-500 text-black cursor-pointer font-bold m-auto'>Quit</button>
                      </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default QuiestionShow