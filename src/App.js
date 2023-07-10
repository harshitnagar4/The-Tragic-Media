import React, {useState} from 'react';
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

 const App=()=> {
  const [progress, setProgress] = useState(0);
  const apikey=process.env.REACT_APP_NEWSAPP
  const setProgress1 = (progress)=>{
  setProgress(progress)
  }
    return (
     <>
     <Router>
     <LoadingBar
     height={4}
        color='#f11946'
        progress={progress}
    
      />
     <Navbar/>
     <Routes>
     <Route  path="/" element={<News setProgress={setProgress1} apikey={apikey}  perPage={6} category="general" key="general"/>}/>
     <Route  path="/business"  element={<News setProgress={setProgress1} apikey={apikey}  perPage={6} category="business"key="business"/>}/>
     <Route  path="/entertainment"  element={<News setProgress={setProgress1} apikey={apikey}  perPage={6} category="entertainment"key="entertainment"/>}/>
     <Route  path="/general"  element={<News setProgress={setProgress1} apikey={apikey}  perPage={6} category="general" key="general"/>}/>
     <Route  path="/health"  element={<News setProgress={setProgress1}  apikey={apikey} perPage={6} category="health" key="health"/>}/>
     <Route  path="/science"  element={<News setProgress={setProgress1}  apikey={apikey} perPage={6} category="science" key="science"/>}/>
     <Route  path="/sports"  element={<News setProgress={setProgress1} apikey={apikey}  perPage={6} category="sports" key="sports"/>}/>
     <Route  path="/technology"  element={<News setProgress={setProgress1} apikey={apikey}  perPage={6} category="technology"key="technology"/>}/>
      </Routes>
      </Router>
     </>
    )
  
}

export default App
