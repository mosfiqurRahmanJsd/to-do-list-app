import React from 'react';

interface IProps {
    title: string, 
    detail ?: string
}

const ToDo = (props: IProps) => {
    return (
        <div className="card">
            <p>
                <strong>Title:</strong> {props.title}
            </p>
            <p>
                <strong>Details:</strong> {props.detail}
            </p>
        </div>
    );
};

export default ToDo;