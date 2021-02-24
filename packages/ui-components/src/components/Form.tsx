
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
// layout: horizontal, vertical, inline
// span: 每一列默认占几栅格，总共12栅格
export const Form = (props:any) => {
  const {fields, initialValues, layout='horizontal', fieldProps = {}, children, ...rest} = props
  return <ProForm 
      initialValues={initialValues} 
      layout={layout}
      style={{display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))'}}
      {...rest}>
      {/* <Row gutter={[24,0]}> */}
        {getFields(fields, fieldProps, props)}
      {/* </Row> */}
  </ProForm>
}

const getFields = (fields:[], defaultFieldProps:any, formProps:any) => {
  return fields.map((field:any) => {
    const {
      span: defaultSpan = 12
    } = defaultFieldProps
    const {
      layout
    } = formProps
    
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
      labelCol: layout=='horizontal'?{
        flex: '120px'
      }:{},
      wrapperCol: layout=='horizontal'?{
        flex: 'auto'
      }:{}
    }
    const colSpan = {
      xs: 24,
      sm: 24,
      md: span,
      lg: span
    }

    return (
      // <Col {...colSpan}>
        <AntForm.Item 
            shouldUpdate 
            style={{gridColumn: `span ${span} / span ${span}`, marginBottom: 0}}
            {...itemOptions}>
          <ProField 
              mode={mode}
              valueType={valueType}
              {...rest}
            />
        </AntForm.Item>
      // </Col>
    )
  }) 
}