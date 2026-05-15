
import React , {useState} from 'react'


export default function Textform(props) {
    const [Text,setText] = useState('Enter Text Here')
    const handleUpClick = ()=>{
      let newtext = Text.toUpperCase()
      setText(newtext);
      console.log("Uppercase was clicked ") ;      
      
    }
    const handleOnChange = (event)=>{
      console.log("OnChnage was Clicked")
      setText(event.target.value)
    }
    
    return (
        <div>
    <h1> {props.heading} </h1>
    <div className="mb-3">
    
    <textarea className="form-control" id="myBox" rows="13" onChange={handleOnChange} value = {Text} ></textarea>
    </div>
    <button className = "btn btn-primary" onClick = {handleUpClick}>Convert To Uppercase</button> 
    </div>

  )
}
