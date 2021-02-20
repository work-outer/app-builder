
import React from "react";
import Input from '@salesforce/design-system-react/components/input'; 


// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation
export class InputText extends React.Component<any> {
  static defaultProps = {
    type: "text",
  }

  render() {
    const {...rest} = this.props
    
    return (
      <Input {...rest}
        ></Input>
    )
  }
}