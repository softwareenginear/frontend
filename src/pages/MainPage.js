import React from 'react'
import {Link} from 'react-router-dom'
import './Mainpage.css'
function MainPage() {
    return (
        <div className="Mainpage">
          <Link to="/MCQselection"><button className="Mainpage__mcqbutton">MCQ paper</button></Link>
          <button className="Mainpage__theorybutton">Theory paper</button>
        </div>
    )
}

export default MainPage
