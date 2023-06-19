import React from 'react';
import Button from './Button';
import { useParams, useNavigate } from 'react-router-dom';

import "./TaskDetails.css";

const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    }

    return ( 
        <>
            <div className='back-button-container'>
                <Button onClick={handleBackButtonClick} >voltar</Button>
            </div>
            <div className='task-details-container'>
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maiores fugit nihil veritatis repudiandae voluptate illo tempore, temporibus quidem non error incidunt at, libero harum dolore aliquam architecto aperiam dolorum.
                </p>
            </div>
        </>
     );
}
 
export default TaskDetails;