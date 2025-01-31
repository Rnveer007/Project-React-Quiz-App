import React from 'react'
import { useState } from 'react'
import Header from './header';
import App from './App';
import QuiestionShow from './QuiestionShow';

function First() {
    // const [userAvailable, setUserAvailable] = useState(false); 
     const [showAlert, setShowAlert] = useState(false)
     const [latestUser, setLatestUser] = useState(null);
     const [showSecondPage, setShowSecondPage] = useState(false);
     const [showQuizSection, setShowQuizsection] = useState(false)


    return (
        <>
            <Header showAlert ={showAlert}  setShowAlert ={setShowAlert} latestUser ={latestUser} setLatestUser = {setLatestUser} showSecondPage = {showSecondPage} setShowSecondPage = {setShowSecondPage} showQuizSection ={showQuizSection} setShowQuizsection ={setShowQuizsection} />
            <App showAlert ={showAlert} setShowAlert = {setShowAlert}  latestUser ={latestUser} setLatestUser = {setLatestUser} showSecondPage = {showSecondPage} setShowSecondPage ={setShowSecondPage} showQuizSection ={showQuizSection}  setShowQuizsection ={setShowQuizsection} />
            < QuiestionShow showQuizSection ={showQuizSection} setShowQuizsection ={setShowQuizsection} showSecondPage ={showSecondPage} setShowSecondPage ={setShowSecondPage}  />
        </>
    )
}

export default First