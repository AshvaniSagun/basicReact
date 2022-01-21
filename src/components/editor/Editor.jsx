import React, { useState } from 'react'

export default function Topics() {
    const [text, setText] = useState('Hey There !!');

    const upperText = function () {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const lowerText = function () {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const emitText = function (event) {
        setText(event.target.value)
    }

    const resetInputField = () => {
        setText("");
      }

    return (
        <>
            <div>
                <h1>Text Editor</h1>
                <div className="container my-3">
                    <div className="mb-3">
                        <textarea className="form-control" id="myBox" onChange={emitText} value={text} rows="8"></textarea>
                    </div>
                    <button className="btn btn-primary mx-2" onClick={upperText}>To Upper</button>
                    <button className="btn btn-primary mx-2" onClick={lowerText}>To Lower</button>
                    <button className="btn btn-primary mx-2" onClick={resetInputField}>Clear</button>
                </div>
            </div>
            <div className="container">
                {text.split(" ").length} words and {text.length} characters
            </div>
            <div className="container">
                <h1>Preview</h1>
                <div>
                    {text}
                </div>
            </div>
        </>
    )
}
