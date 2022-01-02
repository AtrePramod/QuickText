import React,{useState} from 'react'

export default function Textform(props) {
   
const handleupclick=()=>{
  let newtext=text.toUpperCase();
  setText(newtext);
  props.showalert("Convert to UpperCase","success");
}

const handleonchange=(event)=>{
   // console.log("onchange");
    setText(event.target.value);
} 
const handlelowclick=(event)=>{
    let newtext=text.toLowerCase();
  setText(newtext);
  props.showalert("Convert to LowerCase","success");
 } 
 const cleartext=(event)=>{
    let newtext='';
    setText(newtext);
    props.showalert("Text Clear","success");
 } 
 const Copytext = () => { 
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value); 
    props.showalert("Copy Text","success");
}
const extraspaces = () => { 
    var newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showalert("ExtraSpaces remove","success");
}
const [text, setText] = useState('Enter the Text Here');
    return (
        <>
        <div className='container'style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>{props.head}</h2>
            <div className="mb-3"> 
            <textarea className="form-control"style={{backgroundColor:props.mode==='dark'?'#0d213f':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleonchange} id="myBox" rows="6"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleupclick}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-2' onClick={handlelowclick}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-2' onClick={cleartext}>Clear Text</button>
            <button className='btn btn-primary mx-2' onClick={Copytext}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={extraspaces}>Remove Extra spaces</button>
        </div>
        <div className='container my-3'style={{color:props.mode==='dark'?'white':'black'}}>
            <h1> Your text Summary</h1> 
            <p>{text.split(" ").length-1} Words and {text.length} Charaters </p>
            <p>{0.008*(text.split(" ").length-1)} minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>
        </div>
        </>
        
    )
}
