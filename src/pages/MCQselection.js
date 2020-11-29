import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import DatePicker from "react-datepicker";
import './MCQselection.css'

import "react-datepicker/dist/react-datepicker.css";

function MCQselection({startDate,setStartDate,subject,setSubject,system, setSystem,board, setBoard, series, setSeries, paper, setPaper}) {
    
    const [Date,setDate]=useState('')
    // const [subject,setSubject]=useState('');
    const onButtonCLick=()=>{
        // console.log(startDate)
   
    }
    const OnSubjectChange=(e)=>{
        setSubject(e.target.value)
    }
    const onSystemChange=(e)=>{
        setSystem(e.target.value)
    }
    const onBoardChange=(e)=>{
        setBoard(e.target.value)
    }
    const onSeriesChange=(e)=>{
        setSeries(e.target.value)
    }
    const onPaperChange=(e)=>[
        setPaper(e.target.value)
    ]
    return (
        <div className="MCQselection">
            
            <div className="MCQselection__system">
            <label>Enter System</label>
            <input onChange={onSystemChange} value={system}></input>
            </div>
            <div className="MCQselection__board">
            <label>Enter Board</label>
            <input onChange={onBoardChange} value={board}></input>
            </div>
            <div className="MCQselection__subject">
            <label>Enter Subject</label>
            <input onChange={OnSubjectChange} value={subject}></input>
            </div>
            <div className="MCQselection__dateandyear">
            <label>Select Year and Month</label>
            <DatePicker className="dateTimePicker"
                selected={startDate}
                onChange={date => {
                    setStartDate(date)
                    console.log(JSON.parse(date))
                    
                }
                }
                dateFormat="MM/yyyy"
                showMonthYearPicker
            />
            </div >
            
            <div className="MCQselection__series">
            <label>Enter Series</label>
            <input onChange={onSeriesChange} value={series}></input>
            </div>
            <div className="MCQselection__paper">
            <label>Enter Paper</label>
            <input onChange={onPaperChange} value={paper}></input>
            </div>
            <Link disabled={subject.length<1 || system.length<1 || board.length<1 || series.length<1 || paper.length<1 } className="MCQselection__button" to="/MCQpage"><button disabled={subject.length<1 || system.length<1 || board.length<1 || series.length<1 || paper.length<1 }>Start Quiz</button></Link>
            
        </div>
    )
}

export default MCQselection
