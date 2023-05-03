import { useState } from "react"
import { Button,Form } from 'react-bootstrap';
import "./addSection.css"
import ViewSection from "./ViewSection";
import { useEffect } from "react";
import { TodoService } from "../service/todo.service";
import { useMemo } from "react";


const AddSection=()=>{
    const [showSectionForm, setShowSectionForm] = useState(false);
    const [sectionValue,setSectionValue]=useState("")
    const [allTodos,setAllTodos]=useState([])
    const [allsections,setAllSections]=useState([])
    //const [sections, setSections] = useState([
        // {
        //     sectionName:"",
        //     task:[
        //         {
        //             taskName:"",
        //             taskDescription:""

        //         }
        //     ]
        // }
    //]);

    useEffect(()=>{
        getData()
    },[])

    function getData(){
        TodoService.getTodos().then(res=>{
            setAllTodos(res.data)
        }).catch(err=>alert("khata allTodos"))

        TodoService.getSections().then(res=>{
            setAllSections(res.data)
        }).catch(err=>alert("khata allSections"))
    }


   const sections=useMemo(()=>{
       return allsections.map(item=>{
            const tasks=allTodos.filter(ele=>ele.sectionId === item.id)
            return{
                sectionName:item.title,
                tasks
            }
        })

    },[allTodos,allsections])


    const toggleForm = () => {
        setShowSectionForm(!showSectionForm);
        
    }

    const handleChangeSection = (e) => {
          setSectionValue(e.target.value);
      }


    const handleAddSection = () => {
        
        const newSection = {
            title: sectionValue,
        }
        
        TodoService.addSection(newSection)
            .then(res=>{
                getData()
            })
            .catch(err=>alert("khata addsection"))

        toggleForm()
       
       
    }

    const handleCancel =()=>{
        setSectionValue("")
        toggleForm()
    }

    return (
        <div className="pageSection_container  ">
            
          
            <div className="mapKlass" >
                    {sections.map((item,index)=>{
                        
                    return <ViewSection sectionData={item}
                                        sectionIndex={index}
                                        setSection={()=>{}}
                                        />
                                        
                    })}
                    
            </div>
            
           
            
            {!showSectionForm && 
            <div className="section_container ml-4 mt-5"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="board_add_section_button__icon mr-3"><path fill="currentColor" d="M19.5 20a.5.5 0 010 1h-15a.5.5 0 010-1h15zM18 6a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h12zm0 1H6a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V8a1 1 0 00-1-1zm-6 2a.5.5 0 01.5.5v2h2a.5.5 0 010 1h-2v2a.5.5 0 01-1 0v-2h-2a.5.5 0 010-1h2v-2A.5.5 0 0112 9zm7.5-6a.5.5 0 010 1h-15a.5.5 0 010-1h15z"></path></svg>
                <Button className="section_container" onClick={toggleForm}>Add Section</Button>
            </div>
           }
            {showSectionForm && (
                <Form className="ml-5" onSubmit={handleAddSection}>
                    <input type="text" 
                           className="form-control mb-3 ml-0 sectionInput" 
                           placeholder="Name This Section" 
                           value={sectionValue}
                           onChange={handleChangeSection}
                           />
                    
                    <Button
                        type="submit"
                        disabled={!sectionValue}
                        className="mr-2 addSectionButton"
                        
                    >Add Section   
                    </Button>
                    <Button className="cancelButton"
                            onClick={() => {
                                        toggleForm();
                                        handleCancel();
                                    }}    
                                
                    >Cancel
                    </Button>
                </Form>
            )}

            
        </div>
    )
}

export default AddSection