import React from 'react';
// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div>
//       <h1>Ghous Ahmed</h1>
//     </div>
//   );
// }  //function component name = App




class App extends React.Component {
  render(){
    let firsName = "Ghous"
    let lastName = "Ahmed"
    let fullName = firsName + " " + lastName;
    let arr = [1,2,3,4]
    return(
      <div>
        <h1>{`${firsName} ${lastName}`}</h1>
    <h1>{arr}</h1>
    <h1>{fullName}</h1>
      </div>
    )
  }
} // class component of App
 
export default App;
