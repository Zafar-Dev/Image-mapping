
import { useEffect, useState } from 'react';
import './App.css';
import MapImage from './map';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ViewMap from './assests/viewMap';
// import {data} from './data'
function App() {
  // const getItem =(id) => {
  //   return data.filter((el) => {
  //     return el.id == id
  //   })    
  // }
  
  // console.log(getItem("03"));

  const [items, setitems] = useState([])
  const [file, setFile] = useState() 

  // useEffect(()=>{
  //   console.log("In Parent");
  //   console.log(items);
  // }, [items])


  return (
    <Router>
    <div className="App">
        {/* <Nav /> */}
      <Routes>
      
      <Route path="/" element={<MapImage items={items} setItems={setitems} file={file} setFile={setFile}/>}/>
      <Route path="/view" element={<ViewMap items={items} setItems={setitems} file={file} setFile={setFile}/>}/>      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
