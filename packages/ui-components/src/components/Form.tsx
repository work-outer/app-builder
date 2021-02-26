
import React from "react";
import _ from 'lodash';

import ProForm from '@ant-design/pro-form';
import ProField from '@ant-design/pro-field';
import { BasicLayout, FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button, Form as AntForm, Affix } from 'antd';
import { Grid, GridItem, Flex, Box } from '@chakra-ui/layout'
import { useIntl } from '..'
import Field from './field/Field';
import FormField, {FormFieldProps} from './form/FormField';

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
    fields = [], 
    initialValues, 
    layout='horizontal', 
    labelAlign='left',
    columns=2,
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
          <FooterToolbar>
            <Button 
              key="rest" 
              onClick={() => {props.form?.resetFields();setMode('read');}}
            >
              {useIntl().getMessage('form.cancel', 'Cancel')}
            </Button>
            
            <Button 
              type="primary" 
              key="submit" 
              onClick={() => {props.form?.submit?.()}}
            >
              {useIntl().getMessage('form.save', 'Save')}
            </Button>
          </FooterToolbar>
        )
    }
  }

  const onInlineEdit = ()=> {
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
    onValuesChange: (changeValues:any) => console.log(changeValues),
    ...rest
  }

  const defaultFieldProps = {
    layout,
    mode,
    columns,
    onInlineEdit,
  }
  defaultFieldProps.mode = mode

  return <ProForm 
      {...formProps}>
        <Grid templateColumns={[`repeat(1, 1fr)`, `repeat(${columns}, 1fr)`]} gap={4}>
          {renderFields(fields, defaultFieldProps)}
          {children}
        </Grid>
  </ProForm>
}

const renderFields = (fields:[], defaultFieldProps:any) => {

  const {
    name,
    valueType,
    onInlineEdit,
    mode,
    ...rest
  } = defaultFieldProps

  return fields.map((field:FormFieldProps) => {
    
    const fieldOptions = _.defaultsDeep(_.cloneDeep(field), rest)

    return (
      <FormField 
        name={name}
        valueType={valueType}
        key={name}
        mode={mode}
        onInlineEdit={onInlineEdit} {...fieldOptions} 
      />
    )

  })
}