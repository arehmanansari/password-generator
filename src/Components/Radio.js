import { useState } from "react"
import React from 'react'
import "../App.css"

const Radio = () => {
    const [chooseKeyboard, setChooseKeyboard] = useState("full");
    const [beginingCharacter, setBeginingCharacter] = useState("any");
    const [endingCharacter, setEndingCharacter] = useState("any");

    const handlerChooseKeyboard = (e) => {
        setChooseKeyboard(e.target.value);
    };
    const beginingCharacterChanger = (e) => {
        setBeginingCharacter(e.target.value);
    };
    const endingCharacterChanger = (e) => {
        setEndingCharacter(e.target.value);
    };
    return (
        <div>
            <div>
                <div className="radio">
                    <label>Keyboard Type </label>
                    <input
                        type="radio"
                        value="full"
                        id="fullKeyboardType"
                        name="keyboardType"
                        checked={chooseKeyboard === "full"}
                        onChange={handlerChooseKeyboard}
                    />
                    Full Keyboard
                    <input
                        type="radio"
                        value="left"
                        id="leftKeyboardType"
                        name="keyboardType"
                        checked={chooseKeyboard === "left"}
                        onChange={handlerChooseKeyboard}
                    />
                    Lefthand Keyboard
                    <input
                        type="radio"
                        value="right"
                        id="rightKeyboardType"
                        name="keyboardType"
                        checked={chooseKeyboard === "right"}
                        onChange={handlerChooseKeyboard}
                    />
                    Righthand Keyboard
                </div>
                <div>
                    <label>Begin With</label>
                    <input
                        type="radio"
                        value="any"
                        id="startingAnyCharacter"
                        name="beginingWord"
                        checked={beginingCharacter === "any"}
                        onChange={beginingCharacterChanger}
                    />
                    Any
                    <input
                        type="radio"
                        value="letter"
                        id="startingLetter"
                        name="beginingWord"
                        checked={beginingCharacter === "letter"}
                        onChange={beginingCharacterChanger}
                    />
                    Letter
                    <input
                        type="radio"
                        value="number"
                        id="startingNumber"
                        name="beginingWord"
                        checked={beginingCharacter === "number"}
                        onChange={beginingCharacterChanger}
                    />
                    Number
                </div>
            </div>
            <div>
                <label>End With </label>
                <input
                    type="radio"
                    value="any"
                    id="endingAnyCharacter"
                    name="endingWord"
                    checked={endingCharacter === "any"}
                    onChange={endingCharacterChanger}
                />
                Any
                <input
                    type="radio"
                    value="letter"
                    id="endingLetter"
                    name="endingWord"
                    checked={endingCharacter === "letter"}
                    onChange={endingCharacterChanger}
                />
                Letter
                <input
                    type="radio"
                    value="number"
                    id="endingNumber"
                    name="endingWord"
                    checked={endingCharacter === "number"}
                    onChange={endingCharacterChanger}
                />
                Number
            </div>
        </div>
    )
}

export default Radio