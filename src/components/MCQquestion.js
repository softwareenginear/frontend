import React,{useState} from 'react'
import './MCQquestion.css'

function MCQquestion({inputsetMcqQuestion,inputmcqQuestion,mcqMarks,setMcqMarks}) {
   
    const onMCQquestionChangeHandler=(e)=>{
        console.log(e.target.value)
        inputsetMcqQuestion(e.target.value)
    }
   
    return (
        <div className="mcqQuestion__div">
            <textarea placeholder="Write down the question..." className="mcqquestion__input" value={inputmcqQuestion} onChange={onMCQquestionChangeHandler} type="text"></textarea>
           
        </div>
    )
}

export default MCQquestion
