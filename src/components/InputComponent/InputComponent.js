import React, { Component } from "react";
import cssClasses from "./InputComponent.module.css";

export default class InputComponent extends Component {
  render() {
    return (
      <>
        <div className={cssClasses.inputGroup}>
          <label htmlFor={this.props.name}>{this.props.name}: </label>
          <input
            className={cssClasses.input}
            type={this.props.type}
            name={this.props.name}
            placeholder={`Enter your ${this.props.name}`}
          />
        </div>
      </>
    );
  }
}
