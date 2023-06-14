import React from 'react';
import './Button.css';

const Button = ({children, onClick}) => {
    return (  
        <button conClick={onClick} className='add-button'>
            {children}
        </button>
    );
}
 
export default Button;