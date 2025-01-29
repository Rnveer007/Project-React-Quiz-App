import React from 'react'
import { useState } from 'react'
import Header from './header';
import App from './App';

function First() {
    // const [userAvailable, setUserAvailable] = useState(false); 
     const [showAlert, setShowAlert] = useState(false)
     const [latestUser, setLatestUser] = useState(null);


    return (
        <>
            <Header showAlert ={showAlert}  setShowAlert ={setShowAlert} latestUser ={latestUser} setLatestUser = {setLatestUser}/>
            <App showAlert ={showAlert} setShowAlert = {setShowAlert}  latestUser ={latestUser} setLatestUser = {setLatestUser} />
        </>
    )
}

export default First