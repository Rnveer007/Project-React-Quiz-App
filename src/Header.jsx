// import { space } from "postcss/lib/list";
import React, { useEffect, useState } from "react";
import './App.css'

function Header({ showAlert,setShowAlert, latestUser,setLatestUser ,setShowSecondPage,showSecondPage}) {
  const [showUserBox, setShowUserBox] = useState(false);
  const [succesfullAlert, setSuccesfullAlert] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [showUserName, setUserName] = useState(false);
 
  // const [showSecondPage , setShowSecondPage] = useState(false);

  const [users, SetUsers] = useState(
    localStorage.getItem('userData') !== null ? JSON.parse(localStorage.getItem("userData")) : []
  )

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(users))
  }, [users]);

  function showCreateUserBox() {
    setShowUserBox(true);
  }

  function hideCreateUserbox() {
    setShowUserBox(false);
    setUserInput("")
  }


  function hideUserCreateBoxAndShowSuccessAlert() {
    if (userInput === "") {
      alert("Username cannot be empty.")
      return;
    }

    const userObj = { id: Date.now(), name: userInput };
    SetUsers([...users, userObj]);
    setLatestUser(userObj)

    setShowUserBox(false);
    setSuccesfullAlert(true);
    setUserName(true);
    // setShowSecondPage(true);

    setTimeout(() => {
      setSuccesfullAlert(false);
    }, 2000);
  }



  return (
    <>
      <div className="h-full bg-black relative">
        <div className = {`pageFirstHeader flex justify-evenly bg-black h-full py-12 items-center ${showSecondPage ? "hidden" : ""} `}>
          <h1 className="text-white text-2xl">Quiz Pop</h1>
          <div>
            <button
              onClick={showCreateUserBox}
              className={`text-white text-xl border-2 px-3 py-1 cursor-pointer ${showUserName ? "hidden" : ""}`}
            >
              Create User
            </button>

            <h1
              className={`text-white text-xl px-3 py-2 cursor-pointer capitalize ${showUserName ? "" : "hidden"}`}
            >
              <span>{latestUser?.name}</span>
            </h1>
          </div>
        </div>



        <div className={`pageSecondHeader flex justify-evenly bg-black h-full py-12 items-center ${showSecondPage ? "" : "hidden"}`}>
          <h1 className="text-white text-2xl">Quiz Pop</h1>

          <ul className="flex text-white">
            <li className="mx-4 cursor-pointer">Home</li>
            <li className="mx-4 cursor-pointer">Quiz</li>
            <li className="mx-4 cursor-pointer">Score</li>
          </ul>

          <h1
            className={`text-white text-xl px-3 py-2 cursor-pointer capitalize`}
          >
            <span>{latestUser?.name}</span>
          </h1>
        </div>



        {/* Success Alert */}
        <div
          className={`font-bold w-[300px] bg-green-600 text-center py-3 absolute right-170 top-50 ${succesfullAlert ? "" : "hidden"}`}
        >
          <h1>User Created Successfully</h1>
        </div>

        {/* User Input */}
        <div
          id="hideUserbox"
          className={`bg-white w-[600px] h-[250px] px-10 absolute right-120 ${showUserBox ? "" : "hidden"} `}
        >
          <h3 className="text-2xl my-8">Create Username</h3>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="border-2 w-[400px] py-1 pl-6 capitalize"
          />

          <div className="flex justify-between my-10 w-[250px]">
            <button onClick={hideUserCreateBoxAndShowSuccessAlert}
              className="bg-black text-white px-10 py-1 cursor-pointer">
              Create
            </button>
            <button onClick={hideCreateUserbox}
              className="bg-red-800 text-white px-10 py-1 cursor-pointer">
              Quit
            </button>
          </div>
        </div>
      </div>

    </>
  );
}

export default Header;
