
import React from "react";

import {InputField} from '..'


// https://developer.salesforce.com/docs/component-library/bundle/lightning-output-field/documentation
export class OutputField extends React.Component<any> {
  static defaultProps = {
  }

  render() {
    const {...rest} = this.props;

    return <InputField mode="read" {...rest}/>
  }
}