// import logo from './logo.svg';
import './App.css';
import Taskbar from "./components/Taskbar";
import {Route, Routes} from "react-router";
import Home from "./components/Home";
import Chatroom from "./components/Chatroom";
import NumberSumUp from "./components/NumberSumUp";

function App() {
  return (
    <div className="App">
        <Taskbar/>
        <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route path="/chatroom" element={<Chatroom/>}/>
            <Route path="/NumberSum" element={<NumberSumUp/>}/>
        </Routes>
     <button className={"btn btn-primary"}>Click Me</button>
    </div>
  );
}

export default App;
