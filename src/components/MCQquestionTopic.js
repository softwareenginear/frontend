import React from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MCQtopicDisplay from './MCQtopicDisplay'
import './MCQquestiontopic.css'

function MCQquestionTopic({inputMCQtopic,setInputMcqTopic,MCQtopic,setMCQtopic}) {

    const onMCQtopicChnageHandler=(e)=>{
        // console.log(e.target.value);
        // setInputMcqTopic(e.target.value);
        setInputMcqTopic(e.target.value)

    }
    const onNextChangeHandler = (e)=>{
        e.preventDefault();
        setMCQtopic([
            ...MCQtopic,
            {
                topic:inputMCQtopic,
                id:Math.random()*100,
            }
        ])
        console.log(MCQtopic)
        setInputMcqTopic('');
        
    }
    return (
        <div>
            <div className="mcqtopics">
            <textarea className="mcqtopic__input" placeholder="topics..." value={inputMCQtopic} onChange={onMCQtopicChnageHandler}></textarea>
            <AddCircleOutlineIcon className="mcqtopic__addbutton"  onClick={onNextChangeHandler}></AddCircleOutlineIcon>
            </div>
            {MCQtopic.map(topics =>(
                <MCQtopicDisplay   topic={topics.topic} key={topics.id} setMCQtopic={setMCQtopic}  topics={topics} MCQtopic={MCQtopic}></MCQtopicDisplay>
              
            ))}
            
        </div>
    )
}

export default MCQquestionTopic
