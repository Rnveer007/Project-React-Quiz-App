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


    return (
        <>
            <Header showAlert ={showAlert}  setShowAlert ={setShowAlert} latestUser ={latestUser} setLatestUser = {setLatestUser} showSecondPage = {showSecondPage} setShowSecondPage = {setShowSecondPage}/>
            <App showAlert ={showAlert} setShowAlert = {setShowAlert}  latestUser ={latestUser} setLatestUser = {setLatestUser} showSecondPage = {showSecondPage} setShowSecondPage ={setShowSecondPage} />
            < QuiestionShow />
        </>
    )
}

export default First