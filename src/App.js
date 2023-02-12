import './App.css';
import About from './components/About';
import Navbar  from './components/Navbar';
import TextForm  from './components/TextForm';
import React , {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [textMode,setTextMode] = useState('dark')
  const [mode,setMode] = useState('light')
  const[switchMode , setSwitchMode] = useState('dark')
  const [btnMode,setbtnMode] = useState('primary')
  const [alert, setAlert] = useState(null)
  const showAlert = (message,Type) =>{
           setAlert({
            message: message,
            Type:Type
           }
           )
          setTimeout(()=>{
            setAlert(null)
          },2000) 
      }
  const callingFunction = (functionToBeCalled) => {
        functionToBeCalled();
    }
    
    const anotherFunction = () => {
        console.log("This is the function to be finally called!");
    }
     
  const toggleMode = (theme) =>{
    console.log(theme)   
    switch(theme){
       case 'primary':
        setMode('dark')
        document.body.style.background='#041d43'
        setTextMode(theme)
        setbtnMode(theme)
        document.title= 'TextUtils '+theme
        showAlert(`${theme} mode has been enabled`,"success")
        break;
        case 'secondary' : 
        setMode('dark')
        document.body.style.background='#041d43'
        setTextMode(theme)
        setbtnMode(theme)
        document.title= 'TextUtils '+theme
        showAlert(`${theme} mode has been enabled`,"success")
        break;
        case 'success' :
        setMode('dark')
        document.body.style.background='black'
        setTextMode(theme)
        setbtnMode(theme)
        document.title= 'TextUtils '+theme
        showAlert(`${theme} mode has been enabled`,"success")
        break;
        case 'danger' :
        setMode('dark')
        document.body.style.background='black'
        setTextMode(theme)
        setbtnMode(theme)
        document.title= 'TextUtils '+theme
        showAlert(`${theme} mode has been enabled`,"success")
        break;
        case 'warning' :
        setMode('dark')
        document.body.style.background='black'
        setTextMode(theme)
        setbtnMode(theme)
        document.title= 'TextUtils '+theme
        showAlert(`${theme} mode has been enabled`,"success")
        break;
        case 'light' :
        setMode('success')
        document.body.style.background='black'
        setTextMode(theme)
        setbtnMode(theme)
        document.title= 'TextUtils '+theme
        showAlert(`${theme} mode has been enabled`,"success")
        break;
        case 'dark' :
        setMode(theme)
        document.body.style.background='black'
        setTextMode('light')
        setbtnMode('light')
        document.title= 'TextUtils '+theme
        showAlert(`${theme} mode has been enabled`,"success")
        break;
        


      } 
    // if(mode==='light'){
    //     setMode('dark')
    //     setSwitchMode('light')
    //     document.body.style.background='black' 
    //     setTextMode('warning')
    //     setbtnMode('warning')
    //     showAlert("Dark mode has been enabled","success")
    //   }
    //    else{
    //     setMode('light')
    //     setSwitchMode('dark')
    //     document.body.style.background='white'
    //     setTextMode('dark')
    //     setbtnMode('primary')
    //     showAlert("Light mode has been enabled","success")
    //   }


  }
  return (
    
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode = {mode} toggleMode={toggleMode} 
      switchMode={switchMode} />
      <Alert alert={alert}/> 
      <BrowserRouter>
      <div className="container my-5">
      <Routes> 
      <Route exact path="/" element = {<TextForm heading="Enter" mode ={mode} textMode={textMode} btnMode= 
         {btnMode} showAlert={showAlert}/>}/>
      <Route exact path="/about" element = {<About/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
