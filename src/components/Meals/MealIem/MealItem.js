import React from 'react';

export const MealItem = (props) => {
    return <li id={props.id}>{props.children}</li>;
};
