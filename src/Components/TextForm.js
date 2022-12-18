import React, { useState } from 'react'


export default function TextForm(props) {
    const handleClearText = () => {
        let newText = "";
        setText(newText)
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleAlterClick = (event) => {
        let newText = text.toLowerCase();
        newText = newText.split("");
        for (var i = 1; i < newText.length; i += 2) {
            newText[i] = newText[i].toUpperCase();
        }
        newText = newText.join("");
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }


    const [text, setText] = useState("Your Text Here")
    return (
        <>
            <div className="container my-5">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                    <button className='btn btn-primary my-2' onClick={handleClearText}>Clear Text</button>
                    <button className='btn btn-primary my-2 mx-2' onClick={handleUpClick}>Upper Case</button>
                    <button className='btn btn-primary my-2' onClick={handleLoClick}>Lower Case</button>
                    <button className='btn btn-primary my-2 mx-2' onClick={handleAlterClick}>Alternate Case</button>
                </div>
            </div>
            <div className="container">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{(0.009 * text.split(" ").length).toFixed(3)} minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
