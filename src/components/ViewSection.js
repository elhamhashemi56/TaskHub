import React from "react";
import "./viewSection.css"
import { Button,Form } from 'react-bootstrap';
import { useState,useRef  } from "react";
import CompletedTasks from "./CompletedTasks"
import ThreeDot from "./ThreeDot";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TodoService } from "../service/todo.service";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { RiDeleteBin3Line } from "react-icons/ri";


const ViewSection=({sectionData,updateData,sectionIndex,setSection})=>{
    
    const [showTaskForm, setShowTaskForm] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const datepickerRef = useRef(null);
    const [sectionEditable,setSectionEditable]=useState(false)
    const [taskEditable,setTaskEditable]=useState(false)
    const [sectionInput,setSectionInput]=useState("")
    const [taskValue,setTaskValue]=useState(
        {
            taskName:"",
            taskDescription:"",
            taskDate:""
        }
    )

//################################################
    const handleDateChange = (date) => {
        setTaskValue((prevTaskValue) => ({
            ...prevTaskValue,
            taskDate: date,
          }));
    };
//################################################    
    const handleChangeTask=(e)=>{
        const newTaskValue = {...taskValue};
        console.log("e.target.value",e.target.value);
        newTaskValue[e.target.name] = e.target.value;
        setTaskValue(newTaskValue);
    }
//################################################
  
    const toggleForm = () => {
        setShowTaskForm(!showTaskForm);
        
    }
//################################################
    const handleCancel=()=>{
        taskValue.taskName=""
        taskValue.taskDescription=""
        toggleForm()
    }
//################################################
    const handleAddTask=()=>{

        const body={
            title:taskValue.taskName,
            description:taskValue.taskDescription,
            sectionId:sectionData.id,
            done:false,
            date:taskValue.taskDate

        }

        TodoService.addTasks(body)
        .then(res=>{
            updateData()
        })
        .catch(err=>alert(err.message))

            setTaskValue({taskName:"",taskDescription:""})
            toggleForm()
    }
//################################################

    const handleChangeDone=(id)=>{
        
        const newTodo={
            done:true
        }

        TodoService.updataTodo(id,newTodo)
        .then(res=>{
            updateData()
        })
        .catch(err=>err.message)
    }
//################################################
    const handleDeleteTaskNotDone=(id)=>{
        const answer = window.confirm('Are you sure you want to delete this Task?');

        if (answer) {
        TodoService.deleteTodo(id)
        .then(res=>{
            updateData()
        })
        .catch(err=>err.message)
        }
    }
//################################################
    const handleDeleteSection=(id)=>{
        const answer = window.confirm('Are you sure you want to delete this Section?');

        if (answer) {
            TodoService.deleteSection(id)
            .then(res=>{
                updateData()
            })
            .catch(err=>err.message)
        } 
       
    }
//################################################
    const handleDeleteCompletedTasks = () => {
        const itemDone = sectionData.tasks.filter(item => item.done)
        if (itemDone.length == 0) {
            alert("There is no item to delete")
        } else {
            const answer = window.confirm('Are you sure you want to delete completed Tasks?');
            if (answer) {
                sectionData.tasks.filter(item => item.done).forEach(item => {
                    TodoService.deleteTodo(item.id)
                        .then(res => {
                            updateData()
                        })
                        .catch(err => err.message)

                })

            }
        }
    }
//################################################
    const handleEditSection=()=>{
        setSectionEditable(true)
        setSectionInput(sectionData.sectionName)
    }
//################################################
    const handleCancleEditSection=()=>{
        setSectionEditable(false)
        setSectionInput("")
        
    }
//################################################
    const handleChangeSectionInput=(e)=>{
        setSectionInput(e.target.value)
    }
//################################################
    const handleSaveSectionInput=()=>{
        const body={
            title:sectionInput
        }
        TodoService.editSection(sectionData.id,body)
        .then(res=>{
            updateData()
            setSectionEditable(false)
        })
        .catch(err=>err.message)
    }
//################################################
    const handleEditTaskNotDone=(id)=>{
        
        setTaskEditable(true);
        const task = sectionData.tasks.find((task) => task.id === id);
        const taskDate = task.date ? new Date(task.date) : null;

        setTaskValue((prevTaskValue) => ({
            ...prevTaskValue,
            taskName: task.title,
            taskDescription: task.description,
            taskDate: taskDate,
  }));
 
    }
//################################################
    const handleCancelEditTask=()=>{
        setTaskEditable(false)
        taskValue.taskName=""
        taskValue.taskDescription=""
        taskValue.taskDate=""
    }
//################################################

const handleSaveEditTask=()=>{
    // const taskId = sectionData.tasks.find((task) => task.title === taskValue.taskName)?.id;
    // console.log("id",taskId);

    // if (!taskId) {
    //     console.error("Task ID not found");
    //     return;
    //   }

    const body={
        title:taskValue.taskName,
        description:taskValue.description,
        date:taskValue.taskDate
    }

    TodoService.updateTask(id,body)
    .then(res=>{
        setTaskEditable(false)
        updateData()
    })
    .catch(err=>err.message)

}
//################################################
    return(
        <div className="viewSection_Container mb-5">
             
            <div className="mb-2 threeDot_container">
            {sectionEditable ?
            <Form  onSubmit={handleSaveSectionInput}>
                    <input type="text" 
                           className="form-control mb-3 ml-0 sectionInput"  
                           value={sectionInput}
                           onChange={handleChangeSectionInput}
                           />
                    
                    <Button
                        type="submit"
                        className="mr-2 addSectionButton"
                        
                    >Save   
                    </Button>
                    <Button className="cancelButton"
                            onClick={handleCancleEditSection}    
                                
                    >Cancel
                    </Button>
                </Form>
            
            :<span className="sectionNameKlass " onClick={handleEditSection}>{sectionData.sectionName}</span>
            }
            
                <ThreeDot id={sectionData.id}
                          updateData={updateData}
                          handleDelete={()=>handleDeleteSection(sectionData.id)}
                          handleEdit={(()=>handleEditSection(sectionData.id))}
                />
            </div>

            <div>
                
                {!taskEditable ? sectionData.tasks.filter(item=> !item.done).map(item=>{
                  
                 return   <div className="itemsDontDone threeDot_container">
                            <div>
                                <input type="checkbox"
                                    className="mr-2" 
                                    value={item.done}
                                    onChange={()=>handleChangeDone(item.id)}
                                    />
                                {item.title}
                                
                            </div>
                           
                            <ThreeDot id={item.id}
                                      updateData={updateData}
                                      handleDelete={()=>handleDeleteTaskNotDone(item.id)}
                                      handleEdit={()=>handleEditTaskNotDone(item.id)}
                                      
                            />
                           
                          </div>
                    })
//#############################                   
                :<Form className="task_container" >
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
                                    selected={taskValue.taskDate}
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
                        <Button className="classPlusButton"
                            onClick={() => handleSaveEditTask(sectionData.tasks.id)}
                            disabled={!taskValue.taskName}
                            >Save
                        </Button>
                        <Button onClick={handleCancelEditTask} 
                                className="cancelButton"
                                >Cancel
                        </Button>
                    </div>
                </div>
                
            </Form>
//#############################                
                }
 
                <div className="threeDot_container">
                    <CompletedTasks sectionData={sectionData} />
                    <RiDeleteBin3Line onClick={handleDeleteCompletedTasks} className="delIcon" />
                    
                </div>
               
               
               
            </div>

            {!showTaskForm &&
            <div ml-5>
                <Button className="addTaskButton ml-3"
                        onClick={toggleForm}>+ Add Task
                
                </Button>
            </div>
            }

            {showTaskForm && (
                <Form className="task_container" onSubmit={handleAddTask}>
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
                                        selected={taskValue.taskDate}
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
                            <Button className="classPlusButton"
                                type="submit"
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