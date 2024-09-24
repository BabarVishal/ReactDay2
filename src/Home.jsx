import React, { useState } from 'react'
import './Home.css';
import Card from './Componats/Card';

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
   <>
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
      <div className='SMedia'>
        <Card userName="Danish Bhai" img="https://wallpapercave.com/wp/wp4108059.jpg"/>
        <Card userName="Om Bhai" img="https://images.news18.com/ibnlive/uploads/2022/12/virat-kohli-celebrates-his-44th-odi-ton-ap-photo-167066553516x9.jpg"/>
      </div>
   
   </>
  )
}

export default Home
