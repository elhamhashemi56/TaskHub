import "./viewSection.css"
import { Button,Form } from 'react-bootstrap';
import { useState } from "react";

const ViewSections=({sectionData,sectionIndex,setSection})=>{
    const [showTaskForm, setShowTaskForm] = useState(false);
    const [taskSection,setTaskSection]=useState([
        {   
            taskNameSection:"",
            taskDescriptionSection:""
        }
    ])

    const handleChangeTaskSectionName=(e)=>{
        const updatedTaskSection = [...taskSection];
        updatedTaskSection[taskSection.length - 1].taskNameSection = e.target.value;
        setTaskSection(updatedTaskSection);
    }

    const handleChangeTaskSectionDescription=(e)=>{
        const updatedTaskSection = [...taskSection];
        updatedTaskSection[taskSection.length - 1].taskDescriptionSection = e.target.value;
        setTaskSection(updatedTaskSection);
    }

    const toggleForm = () => {
        setShowTaskForm(!showTaskForm);
        
    }

    const handleCancel=()=>{
        toggleForm()
    }

    const handleAddTask=()=>{

        const newTaskSection = {   
            taskNameSection: "",
            taskDescriptionSection: ""
          };
         
          setTaskSection([...taskSection],newTaskSection)

    }

    return(
        <div className="viewSection_Container mb-3">
            <div className="mb-2">
                <span className="sectionNameKlass ">{sectionData.sectionName}</span>
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
                            value={taskSection[taskSection.length-1].taskNameSection}
                            onChange={handleChangeTaskSectionName} 
                            />
                    <input type="text"
                            placeholder="Enter Description"
                            className="form-control mb-3 ml-0 taskInput"
                            value={taskSection[taskSection.length-1].taskDescriptionSection}
                            onChange={handleChangeTaskSectionDescription} 
                            />
                    <Button onClick={handleAddTask}>+</Button>
                    <Button onClick={handleCancel} className="cancelButton">x</Button>
                </Form>
            )}
            
        </div>
        
    )
}

export default ViewSections