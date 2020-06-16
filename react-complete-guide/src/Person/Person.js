import React from 'react'

const Person = (props) => {
   return (
      <div>
         <p onClick={props.click}>I am {props.name} and i am {props.age}</p>
         <p>{props.children}</p>
      </div>
   );
};

export default Person