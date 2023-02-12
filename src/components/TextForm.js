import React ,{useState} from 'react'

export default function TextForm(props) {
const [text,setText] = useState("Enter Text here");
const handleOnChange = (event) => {
      setText(event.target.value);
}
const handleUpClick = ()=>{
  let new_Text = text.toUpperCase()
  setText(new_Text);
  props.showAlert("Converted to UpperCase","success");
 }
 
const handleLoClick = ()=>{
  let new_Text = text.toLowerCase()
  setText(new_Text);
  props.showAlert("Converted to LowerCase","success"); 
}
 const handleInvClick = ()=>{
  let newText =''
   
  for(let i=0; i<text.length; i++){
     var c = text[i]
     if(c>="A" && c<"a"){
        newText=newText+c.toLowerCase()
        console.log("#")
        
     }
     else if(c>="a")
     {
      newText=newText+c.toUpperCase()
      console.log("!")
     }
     else{
      newText=newText+" "
     }

   }
   console.log(newText)
   setText(newText);
   props.showAlert("Converted  UpperCase to LowerCase and LowerCase to UpperCase","success");
}
return (
<>
<div className="mb-3">
   <h1 className={`text-${props.textMode}`}>{props.heading}</h1> 
  <textarea className={`form-control bg-${props.mode} text-${props.textMode}`} value = {text} onChange={handleOnChange} placeholderid="exampleFormControlTextarea1" rows="10"></textarea>
</div>
<button type="button" className={`btn btn-${props.btnMode} mx-2`} onClick= { handleUpClick } >Convert to UpperCase</button>
<button type="button" className={`btn btn-${props.btnMode} mx-2`} onClick= { handleLoClick } >Convert to LowerCase</button>
<button type="button" className={`btn btn-${props.btnMode} mx-2`} onClick= { handleInvClick } >Convert to InverseCase</button>
<div>
<h3 className={`text-${props.textMode}`}>Your Text Summary</h3>
<p className={`text-${props.textMode}`}>{text.split(" ").length} words and {text.length} characters</p>
<p className={`text-${props.textMode}`}> Avg. Reading time {0.125*text.split(" ").length}</p>
</div>

</>
);
}
