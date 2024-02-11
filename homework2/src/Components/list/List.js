import React from 'react';
import Cards from "../cards/Cards";

const List = ({info}) => {
    return (
        <>
            {
               info.map((item)=>
                   <Cards info={item}/>

               )
            }
        </>
    );
};

export default List;