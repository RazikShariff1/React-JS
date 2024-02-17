import React,{useState} from 'react'
// useState is a hook
// setText is used to set text
// hooks are used to use the class based features on a function without creating a class
export default function Textform(props) {
  
  const [text,setText]=useState("")
  const handleOnClick=()=>{
    // console.log("clicked")
    let newtext=text.toUpperCase()
    setText(newtext)
  }
  const handleLoClick=()=>{
    // console.log("clicked")
    let newtext=text.toLowerCase()
    setText(newtext)
  }

  // as clickin on the uppercase button is an event ,and further handeled .similarly textarea also runs an event 
  const handleonChange=(event)=>{
    // console.log("change")
    setText(event.target.value)
  }
  // text is a variable 
  // to change the text whenever then setText is used,lke text="hello"(is not possible)
  // can be done as setText("hello")
  
  return (
    <>
    <div>
    <h1>{props.heading}</h1>
<textarea className="form-control txta" id="mybix" value={text} onChange={handleonChange} rows="3"></textarea>
<button className='btn btn-primary my-2' onClick={handleOnClick}>conver to UppreCase</button>
<button className='btn btn-primary my-2 mx-1' onClick={handleLoClick}>conver to LowerCase</button>
  </div>
  <div className='container'>
  <h1>The Text data</h1>
  <p>the number of words are <strong>{text.split(" ").length}</strong> and characters are<strong> {text.length}</strong></p>
  <h3>Preveiw</h3> 
  <p>translate the text</p><input type="button" className='btn btn-primary' value="Language"></input>
  </div>
  </>
  )
}

