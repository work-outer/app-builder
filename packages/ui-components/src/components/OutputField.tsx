
import React from "react";

import {InputField} from '..'


// https://developer.salesforce.com/docs/component-library/bundle/lightning-output-field/documentation
export class OutputField extends React.Component<any> {
  static defaultProps = {
  }

  render() {
    let {initialValue, value, ...rest} = this.props;
    if (!value)
      value = initialValue

    return <InputField mode="read" value={value} {...rest}/>
  }
}