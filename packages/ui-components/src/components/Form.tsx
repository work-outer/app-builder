
import React from "react";
import ProForm from '@ant-design/pro-form';
import ProField from '@ant-design/pro-field';
import { Form as AntForm, Col, Row } from 'antd';
import { Grid, GridItem, Flex, Box } from '@chakra-ui/layout'

// 按照 Ant Design ProForm 的规范，自动生成表单。
// fields: 字段数组
//   name: 
//   valueType: 
//   ... 其他字段相关属性
// initialValues: 初始化值
// layout: horizontal, vertical, inline
// colSpan: 每一列默认占几栅格，总共12栅格
export const Form = (props:any) => {
  const {
    fields, 
    initialValues, 
    layout='horizontal', 
    labelAlign='left',
    fieldProps = {}, 
    children, 
    ...rest
  } = props
  const submitter = {
    render: ({submit, reset, ...props }:any, dom:any) => {
      return (
        <>
        <Flex align="center" justify="center" pt={4} style={{gap:'16px'}}>
          {dom}
        </Flex>
        </>
      )
    }
  }
  const formProps = {
    initialValues,
    layout,
    labelAlign,
    submitter,
    ...rest
  }
  return <ProForm 
      {...formProps}>
        <Grid templateColumns="repeat(12, 1fr)" gap={6}>
          {renderFields(fields, fieldProps, props)}
        </Grid>
  </ProForm>
}

const renderFields = (fields:[], defaultFieldProps:any, formProps:any) => {
  return fields.map((field:any) => {
    
    const {
      colSpan: defaultSpan = 12
    } = defaultFieldProps

    const {
      layout
    } = formProps
    
    const {
      name, 
      valueType, 
      required, 
      colSpan = defaultSpan,
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

    return (
      <GridItem colSpan={layout =='inline'? 4: [12, colSpan, colSpan, colSpan]}>
        <AntForm.Item 
            shouldUpdate 
            style={{marginBottom: 0}}
            {...itemOptions}>
          <ProField 
              mode={mode}
              valueType={valueType}
              {...rest}
            />
        </AntForm.Item>
      </GridItem>
    )
  }) 
}