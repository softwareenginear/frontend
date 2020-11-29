import React ,{useEffect,useState}from 'react'
import MCQdisplay from './MCQdisplay'
import './MCQoption.css'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function MCQoption({inputMCQoption,setInoutMCQoption,setMCQoption,mcqOption}) {
    
    const onMCQoptionChangeHandler=(e)=>{
        setInoutMCQoption(e.target.value)
    }
    
    const onNextChangeHandler=(e)=>{
        e.preventDefault();
        // console.log("Wowo");
        setMCQoption([
            ...mcqOption,
            {
                option:inputMCQoption,
                id:Math.random()*100,
                correct:false
               
            }
        ])
        setInoutMCQoption('')
        
        
    }
    return (
        <div>
            {mcqOption.map(options =>(
                <MCQdisplay   option={options.option} key={options.id} setMCQoption={setMCQoption} options={options} mcqOption={mcqOption}></MCQdisplay>
              
            ))}
           
            <div className="mcq">
            <textarea placeholder="write down the options..." className="mcq__optionInput" value={inputMCQoption} type="text" onChange={onMCQoptionChangeHandler}></textarea>
            
            <AddCircleOutlineIcon className="mcq__optionButton" onClick={onNextChangeHandler}></AddCircleOutlineIcon>
            </div>
            
        </div>
    )
}

export default MCQoption
