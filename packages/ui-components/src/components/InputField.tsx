
import React from "react";
import {Input} from '..'; 


// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation
export class InputField extends React.Component<any> {
  static defaultProps = {
    required: false,
  }

  render() {
    const {fieldName, isWide, ...rest} = this.props

    // 根据fieldName，解析 type, label 等属性
    return (
      <div className={isWide?"sm:col-span-12":"sm:col-span-6"}>
        <Input id={fieldName} {...rest}/>
      </div>
    )
  }
}
