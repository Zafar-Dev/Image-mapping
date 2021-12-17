
import { useEffect, useState } from 'react';
import './App.css';
import MapImage from './map';
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
    <div className="App">      
      <MapImage items={items} setItems={setitems} file={file} setFile={setFile}/>
    </div>
  );
}

export default App;
