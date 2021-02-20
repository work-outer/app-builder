
import React from "react";
import { InputField,OutputField } from '..'


// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation
export class FormItem extends React.Component<any> {
  static defaultProps = {
  }

  render() {
    const {fieldName, readonly, ...rest} = this.props

    if (readonly) 
        return (
            <div className="col-span-6">
                <OutputField fieldName={fieldName} readonly {...rest}>
                </OutputField>
            </div>
        )
    else
        return (
            <div className="col-span-6">
                <InputField fieldName={fieldName} readonly {...rest}>
                </InputField>
            </div>
        )
  }
}
