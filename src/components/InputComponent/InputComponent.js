import React, { Component } from "react";
import cssClasses from "./InputComponent.module.css";

export default class InputComponent extends Component {
  render() {
    return (
      <>
        <div className={cssClasses.inputGroup}>
          {this.props.label ? (
            <label htmlFor={this.props.name}>{this.props.name}: </label>
          ) : (
            ""
          )}
          <div className={cssClasses.inputErrorDiv}>
            <input
              className={cssClasses.input}
              type={this.props.type}
              name={this.props.name}
              onChange={this.props.onChange}
              value={this.props.value}
              placeholder={`Enter your ${this.props.name}`}
              {...this.props.validation}
            />
            <div className={cssClasses.error}>{this.props.error}</div>
          </div>
        </div>
      </>
    );
  }
}
