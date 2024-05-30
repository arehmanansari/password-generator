import { useState, useCallback, useMemo, useEffect } from "react";
import generatePassword from "./Components/password";
import RangeSlider from "./Components/RangeSlider";
import Navbar from "./Components/Navbar";
import Radio from "./Components/Radio";
import "./App.css";

function App() {
  const [passwords, setPasswords] = useState([]);
  const [parentVal, setParentVal] = useState(8);
  const [selectData, setSelectData] = useState(1);

  const selectValue =[
    {value: 1, title: 'Generate 1 Password'},
    {value: 5, title: 'Generate 5 Password'},
    {value: 10, title: 'Generate 10 Password'},
    {value: 20, title: 'Generate 20 Password'},
    {value: 50, title: 'Generate 50 Password'},
    {value: 100, title: 'Generate 100 Password'},
  ];

  function clickGeneratePassword() {
    let numberOfTimes = document.getElementById("repeatGeneration").value;
    document.getElementById("listPasswords").innerHTML = "";

    for (let i = 1; i <= numberOfTimes; i++) {
      passwords.push(generatePassword(parentVal));
    }

    setPasswords([...passwords]);
  }

  const sliderValueChanged = useCallback((val) => {
    setParentVal(val);
  });
  const sliderProps = useMemo(
    () => ({
      min: 5,
      max: 100,
      value: parentVal,
      step: 1,
      onChange: (e) => sliderValueChanged(e),
    }),
    [parentVal]
  );

  useEffect(()=>{
    console.log('selectedValue: ',selectData);
  },[selectData]);

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        This Tool Will Help You Generate Secure,Strong And Random Passwords. To
        Help Ensure Your Security
      </div>
      <div className="heading">Password</div>
      <div className="password">
        <ul id="listPasswords">
          {passwords.map((password) => (
            <li>{password}</li>
          ))}
        </ul>
      </div>
      <div className="modifiers">
        <div className="button-dropdown">
          <button className="button">Copy Password</button>
          <span className="dropdown">
            <select id="repeatGeneration" value={selectData} onChange={(e)=> {setSelectData(e.target.value); console.log(e.target.value);}}>
              {selectValue.map((item, index)=> {
                return(
                  <option key={index} value={item.value} onChange={()=> {setSelectData(item.value);}}>
                {item.title}
              </option>
                )
              })}
              {/* <option value="1" selected>
                Generate 1 Password
              </option>
              <option value="5">Generate 5 Password</option>
              <option value="10">Generate 10 Password</option>
              <option value="20">Generate 20 Password</option>
              <option value="50">Generate 50 Password</option>
              <option value="100">Generate 100 Password</option> */}
            </select>
          </span>
        </div>
        <div>
          <RangeSlider
            {...sliderProps}
            label="Password Length"
            classes="additional-css-classes"
          />
        </div>
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
        <div className="generate-button">
          <button className="generate" onClick={clickGeneratePassword}>
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
