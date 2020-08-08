import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="col-12">
            <input type={Number} alt="Enter the number"></input>
            <button onClick={returnNumber}>Submit</button>
        </div>
      </header>
    </div>
  );
}
async function returnNumber(){
  console.log('Calling Function');
  var data = await axios.post('http://localhost:5000/count', {
  number: Number
});
var list = data['wordsWithCount'];
for(let i = 0; i < list.length; i++)
{
var name = list[i]['name'];
var count = list[i]['total'];
}
console.log(list);
}

export default App;
