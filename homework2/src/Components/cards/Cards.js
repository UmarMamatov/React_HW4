import React from 'react';
import classes from './Cards.module.css'

const Cards = ({info}) => {
    return (
        <>
            <div className={classes.cards}> {info.id + ' ' + info.title}</div>
        </>
    );
};

export default Cards;