import React, { Component } from "react";
import cssClasses from "./InputComponent.module.css";

export default class InputComponent extends Component {
  render() {
    console.log({ ...this.props });
    return (
      <>
        <div className={cssClasses.inputGroup}>
          {this.props.label ? (
            <label htmlFor={this.props.name}>{this.props.name}: </label>
          ) : (
            ""
          )}
          <div className={cssClasses.inputErrorDiv}>
            <input className={cssClasses.input} {...this.props} />
            <div className={cssClasses.error}>{this.props.error}</div>
          </div>
        </div>
      </>
    );
  }
}
