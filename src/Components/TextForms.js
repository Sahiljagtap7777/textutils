import React, {useState} from 'react'

export default function TextForms(props) {
    const [text,setText] = useState('');
    const [emails,setEmails]=useState([]);
   const handleUpClick=()=>{

    console.log("Uppercase was clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
   }

   const handleLoClick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowerCase","success");
   }

   const handleClearclick=()=>{
    let cltext='';
    setText(cltext);
    props.showAlert("Cleared all text","success");
   }

const handleReverseclick=()=>{
   let rev= text.split(" ");
   rev.reverse();
   setText(rev.join(" "));
   props.showAlert("Reversed","success");

}

const handleEmailclick=()=>{
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/g;
    const foundEmails = text.match(emailRegex);

    if(foundEmails){
        setEmails(foundEmails);
    }else{
        setEmails([]);
    }

}


   const handleOnChange=(event)=>{
    console.log("onchange")
    setText(event.target.value);
   }

   
     
  return (
    <>
    <div className='container mt-3' style={{color:props.mode==='dark'?'white':'black'}}>
      <div className="mb-3">
        <h1>{props.heading}</h1>
  <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8"></textarea>
</div>
<div className="d-flex gap-2">
 <button className="btn btn-primary" onClick={handleUpClick} >UpperCase</button>
 <button className="btn btn-primary" onClick={handleLoClick} >LowerCase</button>
 <button className="btn btn-primary" onClick={handleReverseclick}>Reverse</button>
 <button className="btn btn-primary" onClick={handleEmailclick}>Extract Emails</button>
 <button className="btn btn-primary" onClick={handleClearclick}>Clear</button>
 </div>
    </div>

    <div className="container " style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary:</h2>
        <p>{text.trim().split(/\s+/).filter((element) => element.length !== 0).length} words, {text.replace(/\s/g, "").length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
        <h2>Extracted emails:</h2>
        <ul>
        {emails.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
    </div>
    </>
  )
}
