import "./viewSection.css"
import { Button,Form } from 'react-bootstrap';
import { useState,useRef  } from "react";
import CompletedTasks from "./CompletedTasks"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TodoService } from "../service/todo.service";

const ViewSection=({sectionData,updateData,sectionIndex,setSection})=>{
    
    const [showTaskForm, setShowTaskForm] = useState(false);
    const [taskValue,setTaskValue]=useState(
        {
            taskName:"",
            taskDescription:""
        }
    )
    

    const [selectedDate, setSelectedDate] = useState(null);
    const datepickerRef = useRef(null);

    const handleDateChange = (date) => {
    setSelectedDate(date);
    };
    
    const handleChangeTask=(e)=>{
        const newTaskValue = {...taskValue};
        console.log("e.target.value",e.target.value);
        newTaskValue[e.target.name] = e.target.value;
        setTaskValue(newTaskValue);
    }

  
    const toggleForm = () => {
        setShowTaskForm(!showTaskForm);
        
    }

    const handleCancel=()=>{
        taskValue.taskName=""
        taskValue.taskDescription=""
        toggleForm()
    }

    const handleAddTask=()=>{

        const body={
            title:taskValue.taskName,
            description:taskValue.taskDescription,
            sectionId:sectionData.id,
            done:false

        }

        TodoService.addTasks(body)
        .then(res=>{
            updateData()
        })
        .catch(err=>alert(err.message))

            setTaskValue({taskName:"",taskDescription:""})
            toggleForm()
    }


    const handleChangeDone=(id)=>{
        // const newTodos = [...todos];
        // newTodos.find(item=>item.id===id).done = true
        // console.log("find",newTodos);
        // setTodos(newTodos);

        const newTodo={
            done:true
        }

        TodoService.updataTodo(id,newTodo)
        .then(res=>{
            updateData()
        })
        .catch(err=>err.message)
    }

    

    return(
        <div className="viewSection_Container mb-5">
            <div className="mb-2">
                <span className="sectionNameKlass ">{sectionData.sectionName}</span>
            </div>

            <div>
                {sectionData.tasks.filter(item=> !item.done).map(item=>{
                 return   <div className="itemsDontDone">
                            <input type="checkbox"
                                   className="mr-2" 
                                   value={item.done}
                                   onChange={()=>handleChangeDone(item.id)}
                                   />
                            {item.title}
                          </div>
                })}

                
                <CompletedTasks sectionData={sectionData} />
                {/* {sectionData.tasks.filter(item=> item.done).map(item=>{
                 return   <div className="itemsDone" >
                            {item.title}
                          </div>
                })} */}

               
            </div>

            {!showTaskForm &&
            <div ml-5>
                <Button className="addTaskButton ml-3"
                        onClick={toggleForm}>+ Add Task
                
                </Button>
            </div>
            }

            {showTaskForm && (
                <Form className="task_container">
                    <input type="text"
                            placeholder="Enter Task Name"
                            className="form-control mb-3 ml-0 taskInput"
                            value={taskValue.taskName}
                            name={"taskName"}
                            onChange={handleChangeTask} 
                            />
                    <input type="text"
                            placeholder="Enter Description"
                            className="form-control mb-3 ml-0 taskInput"
                            value={taskValue.taskDescription}
                            name={"taskDescription"}
                            onChange={handleChangeTask}
                            
                            />
                            
                    <div className="iconsTaskForm"> 
                           
                        <div className="datePicker mr-2">
                            <img onClick={() => datepickerRef.current.setOpen(true)}  src="/assets/icons/DueDate.svg" />
                            <DatePicker
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        ref={datepickerRef}
                                    />
                        </div>
                        <div>
                            <img className="svgInAddTask mr-2" src="/assets/icons/Priority.svg" />
                        </div>
                        <div>
                            <img className="svgInAddTask" src="/assets/icons/Reminder.svg" />
                        </div>
                    </div>
                            
                             
                    <div className="line"></div>
                    <div className="buttonTask_Container">
                        <div>
                            <input></input>
                        </div>
                        <div>
                            <Button className="classPlusButton"
                                onClick={handleAddTask}
                                disabled={!taskValue.taskName}
                                >+
                            </Button>
                            <Button onClick={handleCancel} 
                                    className="cancelButton"
                                    >x
                            </Button>
                        </div>
                    </div>
                    
                </Form>
            )}
            
        </div>
        
    )
}

export default ViewSection