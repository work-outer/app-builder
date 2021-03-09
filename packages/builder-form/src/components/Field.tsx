import ProField from "@ant-design/pro-field";
import { Form } from 'antd';

import React from "react";

export function Field(props: any) {
  const {attributes, label, mode='edit', valueType, ...rest} = props  

  const formItemOptions = {
    label,
    ...attributes,
  }

  const fieldOptions = {
    mode,
    valueType,
    ...rest,
  }
  return (
    <Form.Item {...formItemOptions}>
      <ProField {...fieldOptions}/>
    </Form.Item>
  )
}