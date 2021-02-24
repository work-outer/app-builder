
import React from "react";

import ProField from '@ant-design/pro-field';
import { Form, Col } from 'antd';


import {getValueType} from '..'


// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation
export class InputField extends React.Component<any> {
  static defaultProps = {
    required: false,
    mode: 'edit',
    labelAlign: 'left',
  }

  render() {
    const {type, label, labelAlign, isWide, tooltip, required, help, mode, valueType:defaultValueType, ...rest} = this.props;
    const valueType:any = getValueType(type, defaultValueType);
    const colSpan = isWide?24:12

    const itemOptions = {
      label,
      labelAlign,
      tooltip,
      required,
      help,
      className: mode =='read'? 'slds-form-element slds-form-element_readonly ':'slds-form-element',
      labelCol: {
        span: isWide?3:6,
      },
      wrapperCol: {
        span: isWide?24:18,
      },
    }

    return (
      <Col span={colSpan}>
        <Form.Item {...itemOptions}>
          <ProField mode={mode} valueType={valueType} {...rest}/>
        </Form.Item>
      </Col>
    )
  }
}
