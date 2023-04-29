import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const EnteredName =useRef()
  const EnteredUserAge = useRef()
  const EnterCollageName= useRef()

  
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const Name = EnteredName.current.value
    const Age = EnteredUserAge.current.value
    const collage = EnterCollageName.current.value
    if (Name.trim().length === 0 || Age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+Age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    const data = {
       id: Math.random().toString(36),
      name:Name,
      age:Age,
      collage:collage
    }
    props.onAddUser(data);   //
   
   
   
  };

 

  const errorHandler = () => {
    setError();
   };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
          
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={EnteredName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={EnteredUserAge}
          />
           <label htmlFor="collage">College</label>
           <input
            id="collage"
            type="text"
            ref={EnterCollageName}
                    />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
