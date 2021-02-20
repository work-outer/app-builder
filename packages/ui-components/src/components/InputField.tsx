
import React from "react";
import {InputText, InputLookup} from '..'; 


// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation
export class InputField extends React.Component<any> {
  static defaultProps = {
    required: false,
  }

  render() {
    const {fieldName, type, ...rest} = this.props

    if (type=="lookup"){
      return (
        <InputLookup id={fieldName} {...rest}/>
      )
    }
    else {
      return (
        <InputText id={fieldName} {...rest}/>
      )
    }
  }
}
