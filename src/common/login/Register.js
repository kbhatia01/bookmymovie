import React from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";

function Register() {
  const onFormSubmitted = (e) => {
    e.preventDefault();
  };
  return (
    <ValidatorForm className="register-form" onSubmit={onFormSubmitted}>
      <br />
      <TextValidator
        id="firstname"
        label="First name *"
        type="text"
        name="firstname"
        validators={["required"]}
        errorMessages={["required"]}
      ></TextValidator>
      <br />
      <TextValidator
        id="lastname"
        type="text"
        name="lastname"
        label="Last name *"
        validators={["required"]}
        errorMessages={["required"]}
      ></TextValidator>
      <br />
      <TextValidator
        id="email"
        type="email"
        name="email"

        label="Email *"
        validators={["required"]}
        errorMessages={["required"]}
      ></TextValidator>
      <br />
      <TextValidator
        id="password"
        type="password"
        name="password"

        label="Password *"
        
        validators={["required"]}
        errorMessages={["required"]}
      ></TextValidator>
      <br />
      <TextValidator
        id="phone"
        type="text"
        name="phone"

        label="Contact no *"
        
        validators={["required"]}
        errorMessages={["required"]}
      ></TextValidator>
      <br />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </ValidatorForm>
  );
}

export default Register;
