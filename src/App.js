/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import generatePassword from "./Components/password";
import RangeSlider from "./Components/RangeSlider";
import Navbar from "./Components/Navbar";
import Radio from "./Components/Radio";
import "./App.css";
import { selectValue }  from './constant/constant';

function App() {
  const [passwords, setPasswords] = useState([]);
  const [passwordLen, setPasswordLen] = useState(8);
  const [numberOfPassword, setNumberOfPassword] = useState(1);
 

  const generateRandomPassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let password = '';
    if (numberOfPassword > 1) {
      
      for (let i = 0; i < numberOfPassword; i++) {
        // create password
        for (let i = 0; i < passwordLen; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          password += characters[randomIndex];
        }
        // set password
        setPasswords(prevPassword => [...prevPassword, password]);
      }
      
    }
    
    for (let i = 0; i < passwordLen; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    setPasswords(password);
    }
  const onLengthChange = (data)=>{
    setPasswordLen(data);
  };
  
 useEffect(() => {
  console.log('password length',passwordLen);
 },[passwordLen]);
  

  

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        This Tool Will Help You Generate Secure,Strong And Random Passwords. To
        Help Ensure Your Security
      </div>

      {/* ------   Password show   --------- */}

      <div className="heading">Password</div>
      <div className="password">
        <ul id="listPasswords">{passwords}</ul>
      </div>

      {/* ---------  times to generate password    ------------- */}

      <div className="modifiers">
        <div className="button-dropdown">
          <button className="button">Copy Password</button>
          <span className="dropdown">
            <select value={numberOfPassword} onChange={(e)=> {setNumberOfPassword(e.target.value); console.log(e.target.value);}}>
              {selectValue.map((item, i)=> {
                return(
                  <option key={i} value={item.value} >
                {item.title}
              </option>
                )
              })}
            </select>
          </span>
        </div>
        <div>

         {/* ----------- Slider ------------- */}

         <RangeSlider
         value = {passwordLen}
         setValue ={onLengthChange}
         />
        </div>

        {/* -------   Options for password  ------- */}

        <div>
          <input type="checkbox" id="incUpperKeys" />
          <label>Include UpperCase (e.g. A-Z)</label>
        </div>
        <div>
          <input type="checkbox" id="incNumberKeys" />
          <label>Include Numbers (e.g. 0-9)</label>
        </div>
        <div>
          <input type="checkbox" id="incSpecialKeys" />
          <label>Include Symbols (e.g. !@#$%^&*_-+,.(){}[])</label>
        </div>
        <Radio />
        <div>
          <label>
            Exclude Characters
            <input type="text" />
          </label>
        </div>

        {/* ----------  generate password  --------- */}

        <div className="generate-button">
          <button className="generate" onClick={generateRandomPassword} >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
