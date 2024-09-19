import React, { useState } from 'react'
import './Home.css';

function Home() {

  let [counter, setCounter] = useState(0);

  const addValue = () => {
   if(counter <= 20){
    setCounter(counter++)
   }
  }

  const addvalueNegative = () => {
    if(counter >= 0){
      setCounter(counter--);
    }
  }

  return (
    <div>
    <section id="hero">
        <div class="hero-content">
            <h1>I Am Home Page</h1>
             <h1>Counter value = {counter}</h1>
             <br />
             <button onClick={addValue}>ClickFor++</button>
             <br />
             <br />
             <button onClick={addvalueNegative}>ClickFor--</button>
        </div>
    </section>
    </div>
  )
}

export default Home
