import React from 'react';
import axios from 'axios';
import './App.css';

 class App extends React.Component {
   state = {
     user:[],
     followers:[]
   };

   componentDidMount(){
     axios
     .get('https://api.github.com/users/richknicks')
     .then(response =>
      console.log (response))
     .catch(error =>
      console.log(error))
   }






  render (){
  return (
    <div className="App">
      
    </div>
  );
}
 }
export default App;
