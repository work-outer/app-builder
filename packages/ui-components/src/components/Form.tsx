
import React from "react";
import ProForm from '@ant-design/pro-form';
import ProField from '@ant-design/pro-field';
import { Form as AntForm, Col, Row } from 'antd';

// 按照 Ant Design ProForm 的规范，自动生成表单。
// fields: 字段数组
//   name: 
//   valueType: 
//   ... 其他字段相关属性
// initialValues: 初始化值
// span: 每一列默认占几栅格，总共24栅格
export const Form = (props:any) => {
  const {fields, initialValues, fieldProps = {}, children, ...rest} = props
  return <ProForm 
      initialValues={initialValues} 
      {...rest}>
      <Row gutter={[24,0]}>
        {getFields(fields, fieldProps)}
      </Row>
  </ProForm>
}

const getFields = (fields:[], defaultProps:any) => {
  return fields.map((field:any) => {
    const {
      span: defaultSpan = 24
    } = defaultProps
    
    const {
      name, 
      valueType, 
      required, 
      span = defaultSpan,
      label, 
      help, 
      tooltip, 
      ...rest
    } = field

    const mode = 'edit';
    const itemOptions = {
      name, 
      label: label?label:name, 
      help,
      tooltip,
      required,
    }
    const colSpan = {
      xs: 24,
      sm: 24,
      md: span,
      lg: span
    }

    return (
      <Col {...colSpan}>
        <AntForm.Item 
            shouldUpdate 
            {...itemOptions}>
          <ProField 
              mode={mode}
              valueType={valueType}
              {...rest}
            />
        </AntForm.Item>
      </Col>
    )
  }) 
}