import React from 'react'
import { useState } from 'react'
import Header from './header';
import App from './App';

function First() {
    const [userAvailable, setUserAvailable] = useState(false);

    return (
        <>
            <Header userAvailable ={userAvailable}  setUserAvailable ={setUserAvailable}/>
            <App userAvailable ={userAvailable} setUserAvailable = {setUserAvailable} />
        </>
    )
}

export default First