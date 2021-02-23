
import React from "react";

import ProField from '@ant-design/pro-field';

import {getValueType} from '..'


// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation
export class InputField extends React.Component<any> {
  static defaultProps = {
    required: false,
  }

  render() {
    const {type, ...rest} = this.props;
    const valueType:any = getValueType(type);

    return <ProField mode="edit" valueType={valueType} {...rest}/>
  }
}
