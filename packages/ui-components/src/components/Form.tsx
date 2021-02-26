
import React from "react";
import ProForm from '@ant-design/pro-form';
import ProField from '@ant-design/pro-field';
import { Button, Form as AntForm, Affix } from 'antd';
import { Grid, GridItem, Flex, Box } from '@chakra-ui/layout'
import { useIntl } from '..'
import Field from './field/Field';

// 按照 Ant Design ProForm 的规范，自动生成表单。
// fields: 字段数组
//   name: 
//   valueType: 
//   ... 其他字段相关属性
// initialValues: 初始化值
// layout: horizontal, vertical, inline
// colSpan: 每一列默认占几栅格，总共12栅格
// mode: edit, read
export function Form(props:any) {
  const {
    fields, 
    initialValues, 
    layout='horizontal', 
    labelAlign='left',
    columns=2,
    fieldProps = {
    }, 
    mode: initialMode = 'edit',
    children, 
    ...rest
  } = props

  const [editable, setEditable] = React.useState(true);
  const [mode, setMode] = React.useState(initialMode);

  const submitter = {
    render: ({submit, reset, ...props }:any, dom:any) => {
      if (mode === 'edit')
        return (
          <Affix offsetBottom={10}>
            <Flex align="center" justify="center" pt={4} style={{gap:'16px'}}>
              <Button 
                key="rest" 
                onClick={() => {props.form?.resetFields();setMode('read');}}
              >
                {useIntl().getMessage('form.cancel', 'Cancel')}
              </Button>
              
              <Button 
                type="primary" 
                key="submit" 
                onClick={() => props.form?.submit?.()}
              >
                {useIntl().getMessage('form.save', 'Save')}
              </Button>
            </Flex>
          </Affix>
        )
    }
  }

  const onEdit = ()=> {
    if (editable)
      setMode('edit');
  } 

  const formProps = {
    initialValues,
    layout,
    mode,
    columns,
    labelAlign,
    submitter,
    ...rest
  }


  return <ProForm 
      {...formProps}>
        <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={4}>
          {
          renderFields(fields, fieldProps, {
            onEdit,
            ...formProps  
          })}
        </Grid>
  </ProForm>
}

const renderFields = (fields:[], defaultFieldProps:any, formProps:any) => {

  return fields.map((field:any) => {
    
    const {
      colSpan: defaultSpan = 1, 
    } = defaultFieldProps

    const {
      layout,
      mode,
      columns,
      onEdit,
    } = formProps
    
    const {
      name, 
      valueType, 
      required, 
      colSpan = defaultSpan,
      label, 
      help, 
      tooltip, 
      fieldProps = {},
      ...rest
    } = field

    fieldProps.allowClear = false;

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
      }:{},
      onClick: () => {
        onEdit();
      }
    }

    const gridItemOptions = {
      key: name,
      colSpan: layout =='inline'? 1: [columns, colSpan, colSpan, colSpan],
      borderBottom: mode=='read'?'1px solid #dddbda':''
    }

    return (
      <GridItem {...gridItemOptions}>
        <ProForm.Item 
            shouldUpdate 
            style={{marginBottom: 0}}
            {...itemOptions}>
          <Field 
              mode={mode}
              valueType={valueType}
              fieldProps={fieldProps}
              {...rest}
            />
        </ProForm.Item>
      </GridItem>
    )
  }) 
}