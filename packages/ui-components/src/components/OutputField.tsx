
import React from "react";

import ProField from '@ant-design/pro-field';
import {getValueType} from '..'


// https://developer.salesforce.com/docs/component-library/bundle/lightning-output-field/documentation
export class OutputField extends React.Component<any> {
  static defaultProps = {
  }

  render() {
    const {type, ...rest} = this.props;
    const valueType:any = getValueType(type);

    return <ProField mode="read" valueType={valueType} {...rest}/>
  }
}