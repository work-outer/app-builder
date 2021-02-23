
import React from "react";

import {Input} from '..'; 

// https://developer.salesforce.com/docs/component-library/bundle/lightning-output-field/documentation
export class OutputField extends React.Component<any> {
  static defaultProps = {
  }

  render() {
    const {fieldName, mode, ...rest} = this.props

    return <Input name={fieldName} mode='read' {...rest}/>
  }
}