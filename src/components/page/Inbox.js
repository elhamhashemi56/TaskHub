import { useState } from "react"
import { Button,Form } from 'react-bootstrap';
import "./inbox.css"

const Inbox=()=>{
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => setShowForm(!showForm);
    const [section,setSection]=useState([
        {
            sectionName:"",
            task:[
                {
                    taskName:"",
                    taskDescription:""

                }
            ]
        }
    ])


    return (
        <div className="ml-5">
            {!showForm && 
            <div className="section_container"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="board_add_section_button__icon mr-3"><path fill="currentColor" d="M19.5 20a.5.5 0 010 1h-15a.5.5 0 010-1h15zM18 6a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h12zm0 1H6a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V8a1 1 0 00-1-1zm-6 2a.5.5 0 01.5.5v2h2a.5.5 0 010 1h-2v2a.5.5 0 01-1 0v-2h-2a.5.5 0 010-1h2v-2A.5.5 0 0112 9zm7.5-6a.5.5 0 010 1h-15a.5.5 0 010-1h15z"></path></svg>
                <Button className="section_container" onClick={toggleForm}>Add Section</Button>
            </div>
           }
            {showForm && (
                <Form>
                    <input type="text" className="form-control mb-3 ml-0 sectionInput" placeholder="Name This Section" />
                    
                    <Button className="mr-2">Add Section</Button>
                    <Button onClick={toggleForm}>Cancel</Button>
                </Form>
            )}
        </div>
    )
}

export default Inbox