
import React from "react";

import ProField from '@ant-design/pro-field';
import { Form, Col } from 'antd';


import {getFieldValueType, getFieldAllowClear} from '..'


// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation
export class InputField extends React.Component<any,any> {
  static defaultProps = {
    required: false,
    mode: 'edit',
    labelAlign: 'left',
  }

  constructor(props:any) {
    super(props);
  }


  render() {
    const {type, fieldName, label, labelAlign, isWide, tooltip, required, help, mode, valueType:defaultValueType, ...rest} = this.props;
    const valueType:any = getFieldValueType(type, defaultValueType);
    const colSpan = isWide?{span:24}:{xs:24, sm:24, md:12, lg:12}

    const itemOptions = {
      shouldUpdate: true, 
      name: fieldName,
      label,
      labelAlign,
      tooltip,
      required,
      help,
      className: mode =='read'? 'slds-form-element slds-form-element_readonly ':'slds-form-element',
      labelCol: {
        xs: {
          span: 6,
        },
        sm: {
          span: 6,
        },
        md: {
          span: isWide?3:6,
        },
        lg: {
          span: isWide?3:6,
        }
      },
      wrapperCol: {
        xs: {
          span: 18,
        },
        sm: {
          span: 18,
        },
        md: {
          span: isWide?21:18,
        },
        lg: {
          span: isWide?21:18,
        }
      },
    }

    return (
      <Col {...colSpan}>
        <Form.Item {...itemOptions}>
          <ProField 
            mode={mode} 
            valueType={valueType} 
            {...rest} 
            allowClear={getFieldAllowClear(type)}/>
        </Form.Item>
      </Col>
    )
  }
}
