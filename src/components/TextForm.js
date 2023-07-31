import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleCopy = () =>{
    console.log("I am a copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);


  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleLoClick = ()=>{
    //console.log("Uppercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = ()=>{
    //console.log("Uppercase was clicked: " + text);
    let newText = '';
    setText(newText);
  }

  const handleOnChange = (event)=>{
    //console.log("On Change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');

  return (
    <>

    <div className="container">
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>

    </div>
    <div className="container my-3">
      <h2> Your text summary</h2>
      <p>{text.split (" ").length} words, {text.length} characters</p>
    </div>
    </>
  )
}
