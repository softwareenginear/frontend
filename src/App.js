import React, {useState} from 'react';

import "./App.css";

import Navigationbar from './components/Navigationbar'
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'


import MCQpage from './pages/MCQpage';
import MCQselection from './pages/MCQselection';
import MainPage from './pages/MainPage';

//imprt compoenets
// import Nav from "./components/nav"
// import Tweets from "./components/tweets"

function App() {
  const [subject,setSubject]=useState('');
  const [system,setSystem]=useState('');
  const [board,setBoard]=useState('');
  const [series,setSeries]=useState('');
  const [paper,setPaper]=useState('');
  const [startDate, setStartDate] = useState('');
 
  return (
    
    <div className="App">
    
    <Navigationbar></Navigationbar>
    <Router>
      <Switch>
        
        <Route path="/MCQpage">
        <MCQpage startDate={startDate} setStartDate={setStartDate} subject={subject}  setSubject={setSubject} system={system} setSystem={setSystem} board={board} setBoard={setBoard} series={series} setSeries={setSeries} paper={paper} setPaper={setPaper}></MCQpage>
        </Route>
        <Route path="/MCQselection">
          <MCQselection startDate={startDate} setStartDate={setStartDate} subject={subject} setSubject={setSubject} system={system} setSystem={setSystem} board={board} setBoard={setBoard} series={series} setSeries={setSeries} paper={paper} setPaper={setPaper}></MCQselection>
        </Route>
        <Route path="/">
          <MainPage></MainPage>
        </Route>
      </Switch>
    </Router>
    
    </div>
    
  );
}

export default App;

