import React , {useState} from 'react';
import './App.css';

function App(){
    const[count, setcount] = useState(0);
    const increment = () => {
        setcount(count + 1);
    }
    const decrement = () =>{
        setcount(count - 1);
    }
    return(
    <div className="Counter" >
        <h1>{count}</h1>
        <div className="buttons">
            <button className="but" onClick={increment}> + </button>
            <button className="but" onClick={decrement}> - </button>
        </div>
    </div>
    )
}

export default App;