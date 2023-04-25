import "./viewSection.css"
import { Button,Form } from 'react-bootstrap';
import { useState } from "react";
import CompletedTasks from "./CompletedTasks"

const ViewSections=({sectionData,sectionIndex,setSection})=>{
    const [showTaskForm, setShowTaskForm] = useState(false);
    const [taskValue,setTaskValue]=useState(
        {
            taskName:"",
            taskDescription:""
        }
    )
    const [todos,setTodos]=useState([
        // {id: 1, sectionId:"", title: "item 1", done: false},
        // {id: 2, sectionId:"", title: "item 2", done: false},
        // {id: 3, sectionId:"", title: "item 3", done: false},
        // {id: 4, sectionId:"", title: "item 5", done: false},
        // {id: 5, sectionId:"", title: "item 6", done: false},
    ])

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
        toggleForm()
    }

    const handleAddTask=()=>{
        const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0;
        const newTodo = {   
            title: taskValue.taskName,
            description: taskValue.taskDescription,
            sectionId:sectionIndex,
            done:false,
            id:lastId+1
          };
         console.log("newTodo",newTodo);
          setTodos([...todos,newTodo])
          setTaskValue({taskName:"",taskDescription:""})
          toggleForm()
    }


    const handleChangeDone=(id)=>{
        const newTodos = [...todos];
        newTodos.find(item=>item.id===id).done = true
        console.log("find",newTodos);
        setTodos(newTodos);
    }


    return(
        <div className="viewSection_Container mb-5">
            <div className="mb-2">
                <span className="sectionNameKlass ">{sectionData.sectionName}</span>
            </div>

            <div>
                {todos.filter(item=> !item.done).map(item=>{
                 return   <div className="itemsDontDone">
                            <input type="checkbox"
                                   className="mr-2" 
                                   value={item.done}
                                   onChange={()=>handleChangeDone(item.id)}
                                   />
                            {item.title}
                          </div>
                })}

                <h6>Completed Tasks</h6>
                <CompletedTasks todos={todos}/>
                {/* {todos.filter(item=> item.done).map(item=>{
                 return   <div className="itemsDone" >
                            {item.title}
                          </div>
                })} */}
            </div>

            {!showTaskForm &&
            <div>
                <Button className="addTaskButton"
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
                    <Button className="classPlusButton"
                            onClick={handleAddTask}
                            disabled={!taskValue.taskName}
                            >+
                    </Button>
                    <Button onClick={handleCancel} className="cancelButton">x</Button>
                </Form>
            )}
            
        </div>
        
    )
}

export default ViewSections