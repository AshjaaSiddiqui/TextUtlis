
import React , {useState} from 'react'


export default function Textform(props) {
    const [Text,setText] = useState('')
    

    const handleUpClick = ()=>{
      let newtext = Text.toUpperCase()
      setText(newtext);
      console.log("Uppercase was clicked ") ;      
      
    }

    const handleLowClick = ()=>{
      let newtext = Text.toLowerCase();
      setText(newtext);
      console.log("Uppercase was clicked ") ;      
      
    }

    const handleOnChange = (event)=>{
      console.log("OnChnage was Clicked")
      setText(event.target.value)
    }

    const handleClearText = ()=>
      { setText("") }

    return (
    <> 

    <div className='container'>
       <h1> {props.heading} </h1>

       <div className="mb-3">
       <textarea className="form-control" id="myBox" rows="13" onChange={handleOnChange} value = {Text} ></textarea>
       </div >

       <button  className = "btn btn-primary" onClick = {handleUpClick}>Convert To Uppercase</button>
       <button     className = "btn btn-primary mx-1" onClick = {handleLowClick}>Convert To Lowercase</button>
       <button     className = "btn btn-danger mx-1" onClick = {handleClearText}>Clear Text</button>
    </div>
    <div className='container my-3'>
      <h2>Your Text Summary</h2>
      <p>   { Text.length == 0 && Text.split(" ").length == 1 ?  "0" : Text.split(" ").length    } Words and {Text.length} Characters </p>
      <p> {0.008 * Text.split(" ").length} Minutes Read </p>
      <h2>Preview</h2>
      <p>{Text.length>0?Text:"Enter Something To Preview It Here"}</p>
    </div> 



    </>

  )
}
