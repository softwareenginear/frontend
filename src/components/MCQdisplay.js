import React from 'react'
import './MCQdisplay.css'
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function MCQdisplay({option,options,mcqOption,setMCQoption}) {
    const deleteHandler=()=>{
        setMCQoption(mcqOption.filter((element)=>element.id !== options.id))
    }
    const onRadioButtonClick=(e)=>{
        setMCQoption(mcqOption.map((item) =>{
            if(item.id === options.id){
                return{
                    ...item,
                    correct: !item.correct,
                };
              
            }
            return item;
        }))
        
        console.log("wopw")


    }
    
    console.log(option)
    return (
        <div className="mcqDisplay" className={`mcqDisplay ${options.correct? "correct":''}`}>
            <p>{option}</p>
           
            <div className="mcqDisplay__button">
            <CheckCircleOutlineIcon className="mcqDisplay__correct" onClick={onRadioButtonClick}></CheckCircleOutlineIcon>
            <DeleteIcon className="mcqDisplay__delete" onClick={deleteHandler}></DeleteIcon>
            </div>
        </div>
    )
}

export default MCQdisplay
