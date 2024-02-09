import React from 'react';
import classes from "./header.module.css";

const Header = ({info}) => {
    return (
        <ul className={classes.header}>
            {
                info.map((item,index)=>
                    <li key={index}>{item}</li>
                )
            }
        </ul>
    );
};

export default Header;