import React from 'react'
import {BrowserRouter as Router,Routes,Route}  from "react-router-dom"
import Admin from "./pages/Admin.js"
import {getDatabase ,ref,set} from 'firebase/database'
import {app} from './firebase.js'

const db= getDatabase(app);

function App() {

  // const putData=()=>{
  //   set(ref(db,"user/devesh"),{
  //     id:"1",
  //     name:"devesh",  
  //     age:21
  //   })
  // }

  

  return (
    // <>
    //   <button onClick={putData}>Onclick</button>
    // </>
    <Router>
      <Routes>
        <Route path="/" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
 