import React, { useEffect, useState } from "react";
// import './App.css'

function Header() {
  const [showUserBox, setShowUserBox] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [savedUserInput, setSavedUserInput] = useState("");
  const [addUserValue, setAddUserValue] = useState(false);
  const [succesfullAlert, setSuccesfullAlert] = useState(false);

  function showCreateUserBTn() {
    setShowUserBox(true);
  }

  function quitCreatUserbox() {
    setShowUserBox(false);
    setUserInput("")
  }

  function addUserAndShowAlert() {
    if (userInput.trim() === "") {
      alert("Username cannot be empty.");
      return;
    }


    setShowUserBox(false);
    setAddUserValue(true);
    setSavedUserInput(userInput);
    setSuccesfullAlert(true);
    setUserInput("")

    // save data in local storage
    localStorage.setItem("user", userInput)

    setTimeout(() => {
      setSuccesfullAlert(false);
    }, 2000);
  }


  useEffect(() => {
    const storedUser = localStorage.getItem("user");
  }, []);

  return (
    <>
      <div className="h-full bg-black relative">
        <div className="flex justify-evenly bg-black h-full py-12 items-center">
          <h1 className="text-white text-2xl">Quiz Pop</h1>
          <div>
            <button
              onClick={showCreateUserBTn}
              className={`text-white text-xl border-2 px-3 py-1 cursor-pointer ${addUserValue ? "hidden" : ""
                }`}
            >
              Create User
            </button>

            <h1
              className={`text-white text-xl px-3 py-2 cursor-pointer capitalize ${addUserValue ? "" : "hidden"
                }`}
            >
              {savedUserInput}
            </h1>
          </div>
        </div>

        {/* Success Alert */}
        <div
          className={`font-bold w-[300px] bg-green-600 text-center py-3 absolute right-170 top-50  ${succesfullAlert ? "" : "hidden"
            }`}
        >
          <h1>User Created Successfully</h1>
        </div>

        {/* User Input */}
        <div
          id="hideUserbox"
          className={`bg-white w-[600px] h-[250px] px-10 absolute right-120  ${showUserBox ? "" : "hidden"
            }`}
        >
          <h3 className="text-2xl my-8">Create Username</h3>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="border-2 w-[400px] py-1 pl-6"
          />

          <div className="flex justify-between my-10 w-[250px]">
            <button onClick={addUserAndShowAlert}
              className="bg-black text-white px-10 py-1 cursor-pointer">
              Create
            </button>
            <button onClick={quitCreatUserbox}
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
