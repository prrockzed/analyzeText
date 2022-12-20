import React, { useState } from 'react'


export default function TextForm(props) {
  const handleClearText = () => {
    let newText = "";
    setText(newText)
  }
  const handleSenClick = () => {
    let newText = text.toLowerCase().split("");
    newText[0] = newText[0].toUpperCase();
    for (var i = 1; i < newText.length; i++) {
      if (newText[i - 2] === '.') {
        newText[i] = newText[i].toUpperCase();
      }
    }
    newText = newText.join("");
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

  const handleCapClick = (event) => {
    let newText = text.toLowerCase();
    newText = newText.split("");
    newText[0] = newText[0].toUpperCase();
    for (var i = 1; i < newText.length; i++) {
      if (newText[i - 1] === ' ') {
        newText[i] = newText[i].toUpperCase();
      }
    }
    newText = newText.join("");
    setText(newText)
  }

  const handleInvClick = () => {
    let newText = text.split("");
    for (var i = 0; i < newText.length; i++) {
      if (newText[i] == newText[i].toLowerCase()) {
        newText[i] = newText[i].toUpperCase();
      } else {
        newText[i] = newText[i].toLowerCase();
      }
    }
    setText(newText.join(""));
  }

  const handleSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleCopyClick = () => {
    var newText = document.getElementById("myBox")
    newText.select();
    navigator.clipboard.writeText(newText.value)
  }

  const handleDownloadClick = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('myBox').value], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }


  const [text, setText] = useState("")
  return (
    <>
      <div className="container my-5" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'rgb(215, 215, 215)', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="10" placeholder='Your Text Here'></textarea>
          <button className='btn btn-primary my-2' onClick={handleUpClick}>UPPER CASE</button>
          <button className='btn btn-primary my-2 mx-2' onClick={handleLoClick}>lower case</button>
          <button className='btn btn-primary my-2' onClick={handleAlterClick}>aLtErNaTe cAsE</button>
          <button className='btn btn-primary my-2 mx-2' onClick={handleSenClick}>Sentence case</button>
          <button className='btn btn-primary my-2' onClick={handleCapClick}>Capitalized Case</button>
          <button className='btn btn-primary my-2 mx-2' onClick={handleInvClick}>Inverse Case</button>
          <button className='btn btn-primary my-2' onClick={handleSpaceClick}>Remove Xtra Space</button>
          <button className='btn btn-primary my-2 mx-2' onClick={handleDownloadClick}>Download Text</button>
          <button className='btn btn-primary my-2' onClick={handleCopyClick}>Copy Text</button>
          <button className='btn btn-primary' onClick={handleClearText}>Clear Text</button>
        </div>
      </div>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
        <p>{text.length === 0 ? '0' : (text.slice(-1) === ' ' ? (text.split(" ").length - 1) : (text.split(" ").length))} words, {text.length} characters</p>
        <p>{text.length === 0 ? '0' : (0.008 * text.split(" ").length).toFixed(3)} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter your text in the textbox above to preview it here'}</p>
      </div>
    </>
  )
}
