
import React from "react";
import { FormControl,FormLabel,Input,FormHelperText } from '..';

// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation
export class InputField extends React.Component<any> {
  static defaultProps = {
  }

  render() {
    const {fieldName, ...rest} = this.props

    return (
      <>
        <FormControl p={2} did={fieldName} {...rest}>
          <FormLabel>{fieldName}</FormLabel>
          <Input name={fieldName} placeholder={fieldName} />
        </FormControl>
      </>
    )
  }
}

export default InputField;