import React,{useState,useEffect} from 'react'

import MCQoption from '../components/MCQoption';
import MCQquestion from '../components/MCQquestion'
import MCQquestionTopic from '../components/MCQquestionTopic';
import MCQSidebar from '../components/MCQSidebar';
import './MCQpage.css'



function MCQpage({setStartDate,startDate,subject,setSubject, system, setSystem,board, setBoard, series, setSeries, paper, setPaper}) {
    const [inputmcqQuestion,inputsetMcqQuestion]=useState('');
    const [mcqQuestion,setMCQquestion]=useState([]);
    const [inputMCQoption,setInoutMCQoption]=useState('');
    const [mcqOption,setMCQoption]=useState([]);    
    const [Data,setData]=useState([]);
    const [mcqMarks,setMcqMarks]=useState('1');
    const [inputMCQtopic,setInputMcqTopic]=useState('');
    const [MCQtopic,setMCQtopic]=useState([]);
    const [count, setCount] = useState(1);
   
    var myJSON = JSON.stringify(startDate);
    console.log(typeof(myJSON));
    var month="";
    var year="";
    // console.log(myJSON)
    year=myJSON.slice(1,5)
    let monthNumber=myJSON.slice(6,8);
    console.log(monthNumber)
    console.log(year)
    
    switch(monthNumber){
        case "12":
            month="January";
            break;
        case "01":
            month="February";
            break;
        case "02":
            month="March"
            break;
        case "02":
            month="March"
            break;
        case "03":
            month="April"
            break;
        case "04":
            month="May"
            break;
        case "05":
            month="June"
            break;
        case "06":
            month="July"
            break;
        case "07":
            month="August"
            break;
        case "08":
            month="September"
            break;
        case "09":
            month="October"
            break;
        case "10":
            month="November"
            break;
        case "11":
            month="December"
            break;


    }
    
      
    const onMCQmarksChangehandler=(e)=>{
        // console.log(parseInt(e.target.value));
        setMcqMarks(e.target.value)
        console.log(typeof(e.target.value))
        console.log("wow")
        console.log(mcqMarks)
    }
    
    useEffect(()=>{
        getLocalQuestions();
    },[])
    useEffect(()=>{
        saveLocalQuestions();
       
    },[Data])
    const saveLocalQuestions=()=>{
        if(localStorage.getItem("Data")===null){
            localStorage.setItem('Data',JSON.stringify([]));
        }
        {
            localStorage.setItem("Data",JSON.stringify(Data))
        }
    }
    const getLocalQuestions=()=>{
        if(localStorage.getItem("Data")===null){
            localStorage.setItem('Data',JSON.stringify([]));
        }
        else{
            let localQuestion=localStorage.getItem("Data",JSON.stringify(Data))
            let localStorage2=JSON.parse(localStorage.getItem('Data'));
            var newStr = localQuestion.substring(1, localQuestion.length-1);
            console.log(newStr)
            console.log(localStorage2);
            console.log(localQuestion);
            
        }
    }
   
   
    const onQuestionsubmission=(e)=>{
        
            e.preventDefault();
            setMCQquestion([
                ...mcqQuestion,
               { question:inputmcqQuestion,
                id:Math.random()*100,
                count:count
            }
            ])
            console.log(Object.keys(MCQtopic))
            var MCQtopicaction=MCQtopic
            console.log(MCQtopicaction)
           
            setData([
               
               ...Data,
                {
                    questions:inputmcqQuestion,
                    marks:mcqMarks,
                    options:mcqOption,
                    topic:MCQtopic,
                   
                },
            ])


           setCount(count + 1)
           console.log(count)
            
            console.log(Data)
            inputsetMcqQuestion("")
            setMCQoption([])
            setMCQtopic([])
            setMcqMarks('1')
            console.log(subject)
            console.log(system);
            console.log(board)
            console.log(series)
            console.log(paper)
            // setSubject('')
           
            
    }
    const onExamSubmission=(e)=>{
        // var year=startDate.slice(0,4);
        // console.log(typeof(startDate))
        console.log(startDate)
       
        console.log(month)
        

        

        console.log(startDate)
        

        e.preventDefault();
        setData([
            {
                subject:subject,
                system:system,
                board:board,
                series:series,
                paper:paper,
                year:year,
                month:month
               
            },
            ...Data
        ])
        setSubject('')
        setSystem('')
        setBoard('')
        setSeries('')
        setPaper('')
    }
    return (
        <div className="mcqPage">
           <div className="mcqpage__sidebar">
                     {mcqQuestion.map(questions =>(
                        <MCQSidebar count={questions.count} key={questions.id} ></MCQSidebar>
                    
                    ))}
           
           </div>
           
           <div className="mcqpage__questions">
               <div className="mcqpage__container">
                        
                             <div className="mcqpage__info">
                                        <p>{subject}</p>
                                        <p>{system}</p>
                                        <p>{board}</p>
                                        <p>{series}</p>
                                        <p>{paper}</p>
                                        <p>{month}</p>
                                        <p>{year}</p>
                                        
                                    </div>
                                </div>
                                <div className="firstContainer">
                                {/* <div className="mcqpage__questionNumber">
                                    {`Q-${count}`}
                                    </div> */}
                                <div className="mcqpage__questionsdisplay"> <MCQquestion setMcqMarks={setMcqMarks} mcqMarks={mcqMarks} inputmcqQuestion={inputmcqQuestion} inputsetMcqQuestion={inputsetMcqQuestion} onChange={e=>setMCQquestion({...mcqQuestion,question:e.target.value})}></MCQquestion></div>
                                    </div>
                                    <MCQoption   setInoutMCQoption={setInoutMCQoption} inputMCQoption={inputMCQoption} mcqOption={mcqOption} setMCQoption={setMCQoption}></MCQoption>

                                    <div className="mcqpage__buttons">
                                    <button className="mcqpage__endButton" onClick={onExamSubmission}> End Exam</button>
                                    <button className="mcqpage__submitButton" onClick={onQuestionsubmission} >Next</button>
                                   
                                    </div>
                      
                                    </div>    
                                    <div className="mcqpage__topicdisplay">
                                        <label>Enter Marks</label>
                                    <input className="MCQquestion__marksinput" type="number" min="1" max="5" value={mcqMarks} onChange={onMCQmarksChangehandler}></input>  
                                        <MCQquestionTopic inputMCQtopic={inputMCQtopic} setInputMcqTopic={setInputMcqTopic} MCQtopic={MCQtopic} setMCQtopic={setMCQtopic}></MCQquestionTopic> 
                                       </div>
                                    
           
        </div>
    )
}

export default MCQpage
