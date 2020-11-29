import React from 'react'
import './MCQtopicDisplay.css'
function MCQtopicDisplay({ topic, key,setMCQtopic,topics,MCQtopic}) {
    const deleteTopicHandler=()=>{
        setMCQtopic(MCQtopic.filter((topic)=>topic.id !== topics.id))
        console.log('wow')
    }
    return (
        // <div className="maindiv">
         
           <div className="mcqdisplay__topic">
           
           <p className="mcqdisplay">{topic}</p>
            <button className="mcqtopicdisplay__delete" onClick={deleteTopicHandler}>X</button>
            </div>
           
       
        // </div>
    )
}

export default MCQtopicDisplay
