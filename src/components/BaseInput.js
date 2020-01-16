import React from "react";
import {Field} from "formik";

const BaseInput = props => {
      return (
          <React.Fragment>
                <Field
                    className={`form-control form-control-lg ${props.touch && props.errors ? "has-error" : null}`}
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.handleChange}
                    component={props.component}
                    margin="normal"
                    fullWidth
                />
          </React.Fragment>
      )
};

export default BaseInput;