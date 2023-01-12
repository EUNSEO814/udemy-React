// import styled from "styled-components";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age(> 0).",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangedHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangedHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card>
        <form onSubmit={addUserHandler}>
          <Input
            label="Username"
            type="text"
            id="username"
            htmlFor="username"
            onChange={usernameChangedHandler}
            value={enteredUsername}
          />
          <Input
            label="Age (Years)"
            type="number"
            htmlFor="age"
            id="age"
            onChange={ageChangedHandler}
            value={enteredAge}
          />
          <Button type="submit" text="Add User" />
        </form>
      </Card>
    </>
  );
};

export default AddUser;
