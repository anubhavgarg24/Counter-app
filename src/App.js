import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header>
        <h1>This counter app using State | Hooks</h1>
      </header>
      <h2>The value of count is { count }</h2>
      <button onClick={() => setCount(0)}>Reset Button</button>
      <button onClick={() => setCount(count + 1)}>Increase Button</button>
      <button onClick={() => count>0 ? setCount(count - 1) : null}>Decrease Button</button>
    </div>
  );
}

export default App;
