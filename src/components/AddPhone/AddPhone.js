import React, { Component } from "react";
import cssClasses from "./AddPhone.module.css";
import InputComponent from "../InputComponent/InputComponent";
class AddPhone extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      family: "",
      email: "",
      errors: {
        name: "",
        family: "",
        email: "",
      },
    };
  }
  handleChange = (e) => {
    const name = e.target.name.toLowerCase();
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
    this.validation(e);
  };
  validation = (e) => {
    const name = e.target.name.toLowerCase();
    let error = "";
    console.log(e.target.checkValidity());
    if (!e.target.checkValidity()) {
      console.log("hello");
      switch (name) {
        case "name":
          error = "Min length of name is 4";
          break;
        case "family":
          error = "Family is required";
          break;
        case "email":
          error = "Email format is invalid";
          break;
        default:
          break;
      }
      this.setState({
        errors: {
          ...this.state.errors,
          [name]: error,
        },
      });
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          [name]: error,
        },
      });
    }
  };
  render() {
    console.log(this.state.errors);
    return (
      <form className={cssClasses.form} onSubmit={this.props.handleAddContact}>
        <h1>Add Contacts</h1>
        <InputComponent
          name="Name"
          type="text"
          label={true}
          onChange={(e) => this.handleChange(e)}
          value={this.state.name}
          error={this.state.errors.name}
          required
          minLength={4}
        />
        <InputComponent
          name="Family"
          type="text"
          label={true}
          onChange={(e) => this.handleChange(e)}
          value={this.state.family}
          error={this.state.errors.family}
          required
          minLength={0}
          pattern="/^[A-Za-z]+$/"
        />
        <InputComponent
          name="Email"
          type="email"
          label={true}
          onChange={(e) => this.handleChange(e)}
          value={this.state.email}
          error={this.state.errors.email}
          required
          minLength={0}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
        <button className={cssClasses.button}>Add</button>
      </form>
    );
  }
}

export default AddPhone;
