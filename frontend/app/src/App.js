import './App.css';
import axios from 'axios';
import Heros from "./Components/Hero/Heros"
import Demo from "./Components/Demo/Demo"
//==================================================================
//never connect 6000port that is reserved
axios.defaults.baseURL="http://127.0.0.1:7000"
axios.defaults.withCredentials=true;
//==================================================================

function App() {
  return (
    <main>
   <div className="">
       <div className=''>sad</div>
       <div className='app'>
        <Heros/>
        <Demo/>
       </div>
    </div>
    </main>
  );
}

export default App;
