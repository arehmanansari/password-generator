import React, { useState, useEffect } from "react";
import '../App.css';

const RangeSlider = ({ value, setValue }) => {
    const [sliderVal, setSliderVal] = useState(0);
    const [mouseState, setMouseState] = useState(null);

    useEffect(() => {
      setSliderVal(value); 
    }, [value]);

    const changeCallback = (e) => {
      setSliderVal(e.target.value);
      // console.log('slider:',sliderVal);
    };
    
    useEffect(()=>{
      if (mouseState === "up") {
        setValue(sliderVal);
      }
    }, [mouseState]);
    
    return (
      <div className="range-slider">
        <p>Password Length</p>
        <input
          type="range"
          value={sliderVal}
          onChange={changeCallback}
          onMouseDown={() => setMouseState("down")}
          onMouseUp={() => setMouseState("up")}
        /> <span>{sliderVal} characters</span>
      </div>
    );
  };

export default RangeSlider;
