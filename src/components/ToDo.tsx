import React from 'react';


interface IProps {
    title: string,
    detail: string
}

const ToDo = ({title, detail}: IProps)  => {
    return (
        <div className="card m-2 p-2 bg-light">
            <h4>
                <strong>To do title: </strong> {title}
            </h4>
            <p>
                <strong>To do details:</strong> {detail}
            </p>
        </div>
    );
};


export const ToDoDemo : React.FunctionComponent<IProps> = ({title, detail}: IProps) => {
    return (
        <div className="card m-2 p-2 bg-light">
            <h4>
                <strong>To do title: </strong> {title}
            </h4>
            <p>
                <strong>To do details:</strong> {detail}
            </p>
        </div>
    );
};


export default ToDo;