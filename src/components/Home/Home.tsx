import React from 'react';
// TODO: Add Bootstrap here

interface Props{
    title: string;
}

export const Home = (props:Props) => {
    // return needed for valid react code
    return (
        <div>
            <h1>Car Club Members Area</h1>
            <h4> { props.title }</h4>
        </div>
    )
}