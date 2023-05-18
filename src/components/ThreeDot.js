import {Dropdown} from 'react-bootstrap';
import { TodoService } from '../service/todo.service';


const ThreeDot=({id,updateData,handleDelete,handleEdit})=>{
    console.log(id);

    // const handleDelete=(id)=>{
        
    //     TodoService.deleteTodo(id)
    //     .then(res=>{
    //         updateData()
    //     })
    //     .catch(err=>err.message)
    // }


    return (
        
        <Dropdown>
          <Dropdown.Toggle className='dropdown' id="dropdown-basic">
            <h5>...</h5>
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" onClick={handleEdit}>Edit</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={handleDelete}>Delete</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
}

export default ThreeDot