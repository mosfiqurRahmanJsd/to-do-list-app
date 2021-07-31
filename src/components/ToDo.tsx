import React from 'react';

interface IProps {
    title: string, 
    detail : string, 
    handleRemove: (title: string) => void
}

const ToDo = ({title, detail, handleRemove}: IProps): JSX.Element => {
    return (
        
        <div className="card">
            <p>
                <strong>Title:</strong> {title}
            </p>
            <p>
                <strong>Details:</strong> {detail}
            </p>
            <button onClick={() => handleRemove(title)} className="btn btn-warning">Delete</button>
        </div>
    );
};



export default ToDo;