import './App.css';
import React, { useState, useEffect} from 'react'; 
import firebase from './firebase';
import Home from './Components/Home';
import { mediaHandler, projectCategory } from './Data/Data';


function App()
{

  //State
  const [links, setJavaProject] = useState([]);
  const [community, setCommunity] = useState([]);
  const [loading, setLoading] = useState(false);
  
  //Firebase Fetch
  
  const ref1 = firebase.firestore().collection("java");
  const ref2 = firebase.firestore().collection("community");

  //Fetch data
  function getLinks(){
    setLoading(true);

    ref1.onSnapshot((querySnapshot) => {
      const item1 = [];
      querySnapshot.forEach((doc) => { item1.push(doc.data()); });
      setJavaProject(item1);
      //setLoading(false);
    });

    ref2.onSnapshot((querySnapshot) => {
      const item2 = [];
      querySnapshot.forEach((doc) => { item2.push(doc.data()); });
      setCommunity(item2);
      setLoading(false);
    });
  }

  //React Hooks
  useEffect(() => { getLinks(); }, []);

  //Loader
  if(loading){ return <h1>Loading...</h1>; }

  //Final Landing
  return <Home community={community} projectlinks={links} weblinks={mediaHandler} category={projectCategory}/>;

}

export default App;
