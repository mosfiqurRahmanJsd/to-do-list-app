import React from 'react';

interface IProps {
    title: string, 
    detail : string
}

const ToDo = ({title, detail}: IProps): JSX.Element => {
    return (
        
        <div className="card">
            <p>
                <strong>Title:</strong> {title}
            </p>
            <p>
                <strong>Details:</strong> {detail}
            </p>
        </div>
    );
};



export default ToDo;