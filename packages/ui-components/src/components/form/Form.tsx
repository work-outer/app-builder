
import React from "react";
import _ from 'lodash';

import ProForm from '@ant-design/pro-form';
import ProField from '@ant-design/pro-field';
import type { ProFieldFCMode } from '@ant-design/pro-utils';
import { BasicLayout, FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button, Form as AntForm, Affix } from 'antd';
import { Grid, GridItem, Flex, Box } from '@chakra-ui/layout'
import { useIntl } from './FormProvider'
import { FormField, FormFieldProps } from './FormField';
import { BaseFormProps } from "@ant-design/pro-form/lib/BaseForm";

export type FormProps<T = Record<string, any>>  = {
  mode?: ProFieldFCMode,
  layout?: 'vertical' | 'horizontal'
  editable?: boolean,
  fields?: FormFieldProps[],
  columns?:number,
  onInlineEdit?: Function, //用户点击了控件上的编辑按钮，启动表单进入编辑状态。
  onFinish?: Function
  onFinishString?: string, 
  formFieldProps?: FormFieldProps,
  formFieldComponent?: any,
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
  
  const defaultSubmitter = {
    searchConfig: {
      resetText: useIntl().getMessage('form.cancel', 'Cancel'),
      submitText: useIntl().getMessage('form.save', 'Save'),
    },
    resetButtonProps: {
      onClick: () => {props.form?.resetFields();setModeState('read');},
    },
    render: ({submit, reset, ...props }:any, dom:any) => {
      if (modeState === 'edit' && editableState)
        return (
          <FooterToolbar>
            {dom}
          </FooterToolbar>
        )
    }
  }

  let {
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
    onFinish,
    submitter = defaultSubmitter,
    formFieldProps,
    formFieldComponent = FormField,
    children, 
    ...rest
  } = props

  const [form] = AntForm.useForm();
  const [editableState, setEditableState] = React.useState(editable);
  const [modeState, setModeState] = React.useState(mode);

  const onInlineEdit = ()=> {
    if (editableState)
      setModeState('edit');
  }
  let onFinishString:any = props.onFinishString;
  if(!onFinish && onFinishString){
    onFinish = async (values: any)=>{
      eval(onFinishString);
    }
  }
  // fieldProps.mode = modeState,

  const proFormProps = {
    form,
    initialValues, 
    layout, 
    labelAlign,
    fieldProps,
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
      onFinish= {onFinish}
    >
        <Grid {...boxOptions}>
          {
            fields.map((field:FormFieldProps) => {
              return createFormField(field, {
                columns,
                layout,
                fieldProps,
                formFieldProps,
                formFieldComponent,
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
    formFieldProps,
    fieldProps,
    formFieldComponent = FormField,
  } = formProps
  return React.createElement(formFieldComponent, {
      ...formFieldProps,
      ...rest,
      mode,
      name,
      valueType,
      key: name,
      formProps,
      fieldProps,
  })
}

export const FormSettings = { 
  name: 'Steedos:Form',
  inputs: [
    { name: 'columns', type: 'number', defaultValue:'2' },
    { name: 'layout', type: 'text', defaultValue:'vertical' },
    { name: 'mode', type: 'text', defaultValue: 'read' },
    { name: 'onSubmit', type: 'javascript', code:true, advanced: true},
  ],
  canHaveChildren: true
}