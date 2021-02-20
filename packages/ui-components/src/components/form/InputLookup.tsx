
import React from "react";
import Combobox from '@salesforce/design-system-react/components/combobox'; 


// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation
export class InputLookup extends React.Component<any> {
  static defaultProps = {
  }

  render() {
    const { ...rest} = this.props
    
    return (
      <Combobox/>
    )
  }
}