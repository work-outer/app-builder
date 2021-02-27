
import React from "react";
import _ from 'lodash';

import ProForm from '@ant-design/pro-form';
import ProField from '@ant-design/pro-field';
import type { ProFieldFCMode } from '@ant-design/pro-utils';
import { BasicLayout, FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button, Form as AntForm, Affix } from 'antd';
import { Grid, GridItem, Flex, Box } from '@chakra-ui/layout'
import { useIntl } from '../..'
import Field from '../field/Field';
import FormField, {FormFieldProps} from './FormField';
import { BaseFormProps } from "@ant-design/pro-form/lib/BaseForm";

export type FormProps<T = Record<string, any>>  = {
  mode?: ProFieldFCMode,
  editable?: boolean,
  fields?: FormFieldProps[],
  columns?:number,
  onInlineEdit?: Function, //用户点击了控件上的编辑按钮，启动表单进入编辑状态。
  fieldProps?: any,
  children?: any,
} & BaseFormProps


// 按照 Ant Design ProForm 的规范，自动生成表单。
// fields: 字段数组
//   name: 
//   valueType: 
//   ... 其他字段相关属性
// initialValues: 初始化值
// layout: horizontal, vertical, inline
// colSpan: 每一列默认占几栅格，总共12栅格
// mode: edit, read
export default function Form<T = Record<string, any>>(props: FormProps<T>) {
  const {
    fields = [], 
    columns = 2,
    mode = 'edit',
    editable = true,
    initialValues = {}, 
    layout='horizontal', 
    labelAlign='left',
    fieldProps,
    formItemProps,
    // onInlineEdit = ()=> {
    //   if (editableState)
    //     setModeState('edit');
    // },
    children, 
    ...rest
  } = props

  const [editableState, setEditableState] = React.useState(editable);
  const [modeState, setModeState] = React.useState(mode);

  console.log(modeState)

  const submitter = {
    render: ({submit, reset, ...props }:any, dom:any) => {
      if (modeState === 'edit' && editableState)
        return (
          <FooterToolbar>
            <Button 
              key="rest" 
              onClick={() => {props.form?.resetFields();setModeState('read');}}
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
    if (editableState)
      setModeState('edit');
  } 

  // fieldProps.mode = modeState,

  const proFormProps = {
    initialValues, 
    layout, 
    labelAlign,
    fieldProps,
    formItemProps,
    submitter,
    ...rest
  }
  return (
    <ProForm 
      {...proFormProps}
      onFinish= {async (values:any) => console.log(values)}
    >
        <Grid templateColumns={[`repeat(1, 1fr)`, `repeat(${columns}, 1fr)`]} gap={4}>
          {
            fields.map((field:FormFieldProps) => {
              return createFormField(field, {
                columns,
                layout,
                fieldProps,
                formItemProps,
                ...rest,
                onInlineEdit,
                mode: modeState,
              })
            })
          }
          {children}
        </Grid>
    </ProForm>
  )
}

export function createFormField(field:FormFieldProps, formProps:any = {}) {
  const {
    name,
    valueType,
    ...rest
  } = field
  const {
    mode,
    fieldProps,
  } = formProps
  return <FormField 
      {...fieldProps}
      {...rest} 
      mode={mode}
      name={name}
      valueType={valueType}
      key={name}
      formProps={formProps}
    />
}
