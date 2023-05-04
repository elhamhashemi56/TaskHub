import {Accordion} from 'react-bootstrap';
import React from 'react';

const CompletedTasks = ({ sectionData }) => {
    return (
        <Accordion defaultActiveKey={null}>
            <Accordion.Item eventKey="0">
                <div className='completedTask_container ml-3'>
                    <i className="fas fa-angle-down mt-1 angleDown"></i>
                    <Accordion.Header className='completedTask'>Completed Tasks</Accordion.Header>
                </div>
                <Accordion.Body>
                    {sectionData.tasks.filter(item=> item.done).map(item=>{
                    return   <div className="itemsDone" >
                                {item.title}
                            </div>
                    })} 
                </Accordion.Body>
            </Accordion.Item>
            
        </Accordion>
    )
}

export default CompletedTasks
