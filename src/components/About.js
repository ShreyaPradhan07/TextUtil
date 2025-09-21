import React ,{useState} from 'react'

export default function About(props) {
  // const [mystyle,setmystyle]=useState({
  //   color:'black',
  //   backgroundColor:'white'
  // })
  // const [btntext,setBtnText]=useState("enable dark mode")
  // const togglestyle=()=>{
  //   if(mystyle.color=='white'){
  //     setmystyle({
  //       color:'black',
  //       backgroundColor:'white'
  //     })
  //     setBtnText("Enable dark mode")
  //   }
  //   else{
  //     setmystyle({
  //       color:'white',
  //       backgroundColor:'black'
  //     })
  //     setBtnText("Enable dark mode")
  //   }
  // }

  let mystyle={
    color:props.mode==='dark'?'black':'black',
    backgroundColor:props.mode==='dark'?'#A9BCD0':'white',
    
  }
  return (
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor:props.mode=='dark'? '#05445E':'white' }}>
        <h1 className="my-3" style={{color:props.mode==='dark'?'black':'black'}}>About Us</h1>
    <div className="accordion" id="accordionExample" style={mystyle}>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>Analyze your Text</strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
        TextUtils gives you a way to analyze your text quickly and efficiently. Whether you're a student, professional, or content creator, TextUtils simplifies your work by providing a variety of tools to process and refine your text.        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <strong>Free to Use</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
          TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text.TextUtils reports the number of words and characters.Thus it is suitable for writing text with words/characters limit.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <strong>Browser Compatible</strong>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
          This word counter software works in any web browser such as Chrome,Firefox ,Internet Explorer,Safari,Opera.It suits to count characters in facebook,blog,books,excel document,pdf document,essays,stc.
        </div>
      </div>
    </div>
  </div>
  {/* <div className="container my-3">
      <button  onClick={togglestyle} type="button" className="btn btn-primary">btntext</button>
  </div> */}
  </div>
  )
}
