import React, {useState} from 'react'

export default function Topics() {
    const [text, setText] = useState('Hey There !!');

    const changeText = function() {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const emitText = function(event) {
        setText(event.target.value)
    }

    return (
        <div>
            <h1>Change the state - {text}</h1>
            <div className="container my-3">
            <div className="mb-3">
                <textarea  className="form-control" id="myBox" onChange={emitText} value = {text} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={changeText}>click Me!</button>
            </div>
        </div>
    )
}
