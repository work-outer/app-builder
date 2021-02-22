
import React from "react";
import Input from '@salesforce/design-system-react/components/input'; 
import Tooltip from '@salesforce/design-system-react/components/tooltip'; 

// https://developer.salesforce.com/docs/component-library/bundle/lightning-output-field/documentation
export class OutputField extends React.Component<any> {
  static defaultProps = {
  }

  render() {
    const {fieldName, value, ...rest} = this.props

    return (
      <div {...rest}>{value}</div>
    )
  }
}