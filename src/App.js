import './App.css';
import React, { useState, useEffect} from 'react'; 
import firebase from './firebase';
import Home from './Components/Home';
import { mediaHandler, projectCategory } from './Data/Data';


function App()
{

  //State
  const [links, setJavaProject] = useState([]);
  const [loading, setLoading] = useState(false);
  
  //Firebase Fetch
  const ref = firebase.firestore().collection("java");

  //Fetch data
  function getLinks(){
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const item = [];
      querySnapshot.forEach((doc) => { item.push(doc.data()); });
      setJavaProject(item);
      setLoading(false);
    });
  }

  //React Hooks
  useEffect(() => { getLinks(); }, []);

  //Loader
  if(loading){ return <h1>Loading...</h1>; }

  //Final Landing
  return <Home projectlinks={links} weblinks={mediaHandler} category={projectCategory}/>;

}

export default App;
