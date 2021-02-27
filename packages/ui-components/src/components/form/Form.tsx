
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
import { FormItem, FormItemProps } from './FormItem';
import { BaseFormProps } from "@ant-design/pro-form/lib/BaseForm";

export type FormProps<T = Record<string, any>>  = {
  mode?: ProFieldFCMode,
  layout?: 'vertical' | 'horizontal'
  editable?: boolean,
  fields?: FormItemProps[],
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
export function Form<T = Record<string, any>>(props: FormProps<T>) {
  const {
    fields = [], 
    columns = 2,
    mode = 'edit',
    editable = true,
    initialValues = {}, 
    layout='horizontal', 
    labelAlign='left',
    fieldProps = {
      allowClear: false,
    },
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

  const boxOptions = {
    templateColumns: [`repeat(1, 1fr)`, `repeat(${columns}, 1fr)`],
    gap: 4,
  }
  return (
    <ProForm 
      {...proFormProps}
      onFinish= {async (values:any) => console.log(values)}
    >
        <Grid {...boxOptions}>
          {
            fields.map((field:FormItemProps) => {
              return createFormItem(field, {
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

export function createFormItem(field:FormItemProps, formProps:any = {}) {
  const {
    name,
    valueType,
    ...rest
  } = field
  const {
    mode,
    fieldProps,
  } = formProps
  return <FormItem 
      {...rest} 
      mode={mode}
      name={name}
      valueType={valueType}
      key={name}
      formProps={formProps}
      fieldProps={fieldProps}
    />
}
