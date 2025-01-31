import React, { useState } from 'react';
import { questions } from './FileOfQuestions';

function QuestionShow() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [clickedAns, setClickedAns] = useState([]);  // Store selected answers as an array

    // Function to move to the next question
    function nextQuestionHandle() {
        if (questionIndex < questions.length - 1) {
            setQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            // Calculate score based on clickedAns array
            let finalScore = 0;
            clickedAns.forEach((answer, idx) => {
                if (answer === questions[idx].correctAnswer) {
                    finalScore++;
                }
            });
            setScore(finalScore); // Set final score
            setShowResult(true);  // Show results
        }
    }

    // Function to restart the quiz
    function restartQuiz() {
        setQuestionIndex(0);
        setScore(0);
        setShowResult(false);
        setClickedAns([]); // Clear clicked answers on restart
    }

    // Function to handle answer selection
    function selectAnswer(item) {
        const updatedAnswers = [...clickedAns];
        updatedAnswers[questionIndex] = item;  // Update the selected answer for the current question
        setClickedAns(updatedAnswers);  // Store the updated answers

        // Optional: Immediate feedback for selecting an answer
    }

    return (
        <div>
            <div className='bg-black text-white h-screen flex justify-center pt-36'>
                <div>
                    <h1 className='text-6xl font-bold text-center'>Coding Quiz</h1>
                    <div className='w-[600px] text-center m-auto'>
                        {!showResult ? (
                            <>
                                <h2 className='text-xl font-bold my-8'>{"Q :- "} {questions[questionIndex].q}</h2>
                                {questions[questionIndex].opt.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => selectAnswer(item)}  // Store the selected answer
                                        className={`block my-4 border-2 px-4 py-1 w-64 cursor-pointer m-auto
                                             ${clickedAns[questionIndex] === item ? 'bg-blue-500' : ''}`} // Highlight selected answer
                                    >
                                        {item}
                                    </button>
                                ))}
                                <div className='mt-10 flex justify-between'>
                                    <button
                                        onClick={nextQuestionHandle} 
                                        className='w-26 border-2 py-1 bg-green-500 text-black cursor-pointer font-bold m-auto'
                                    >
                                        NEXT
                                    </button>
                                    <button 
                                        onClick={restartQuiz}
                                        className='w-26 border-2 py-1 bg-red-500 text-black cursor-pointer font-bold m-auto'
                                    >
                                        Quit
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className='text-center'>
                                <h2 className='text-4xl font-bold my-8'>Quiz Completed!</h2>
                                <p className='text-2xl'>Your score: {score} / {questions.length}</p>
                                <button
                                    onClick={restartQuiz}
                                    className='w-32 border-2 py-2 bg-green-500 text-black cursor-pointer font-bold mt-6'
                                >
                                    Play Again
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestionShow;
