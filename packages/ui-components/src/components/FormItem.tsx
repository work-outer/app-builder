
import React from "react";
import { Form, Input, Col } from 'antd'
import InputField from './InputField'
import OutputField from './OutputField'
import { read } from "fs";


// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation
export class FormItem extends React.Component<any> {
  static defaultProps = {
  }

  render() {
    const {fieldName, readonly, ...rest} = this.props

    if (readonly) 
        return <OutputField fieldName={fieldName} readonly {...rest}></OutputField>
    else
        return <InputField fieldName={fieldName} {...rest}></InputField>
  }
}

export default FormItem;