
import React from "react";
import ProForm from '@ant-design/pro-form';
import ProField from '@ant-design/pro-field';
import type { ProFieldFCMode } from '@ant-design/pro-utils';
import { BasicLayout, FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button, Form as AntForm, Affix } from 'antd';
import { Grid, GridItem, Flex, Box } from '@chakra-ui/layout'
import Field from '../field/Field';
import FormFieldForm from './FormFieldForm';
import { FormProps } from "./Form";

export type FormFieldProps = {
  name: string,
  valueType: any,
  mode?: ProFieldFCMode,
  text?: string,
  required?: boolean,
  label?: string,
  help?: string, 
  tooltip?: string, 
  colSpan?: number,
  fieldProps?: any,
  formProps?: FormProps,
  onInlineEdit?: Function,
};

export default function FormField(props:FormFieldProps) {

  const {
    name, 
    valueType, 
    required, 
    colSpan = 1,
    label, 
    help, 
    tooltip, 
    fieldProps = {},
    mode = 'edit',
    formProps,
    ...rest
  } = props

  fieldProps.allowClear = false;

  const itemOptions = {
    name, 
    label: label?label:name, 
    help,
    tooltip,
    required,
    labelCol: formProps && formProps.layout=='horizontal'?{
      flex: '120px'
    }:{},
    wrapperCol: formProps && formProps.layout=='horizontal'?{
      flex: 'auto'
    }:{},
  }

  const gridItemOptions = {
    key: name,
    colSpan: formProps && formProps.layout =='inline'? 1: [1, colSpan, colSpan, colSpan],
    borderBottom: formProps && formProps.mode=='read'?'1px solid #dddbda':''
  }

  if (valueType === 'form') {
    return (
      <GridItem {...gridItemOptions}>
        <ProForm.Item 
          shouldUpdate
          trigger="onValuesChange"
          {...itemOptions}
        >
          <FormFieldForm
            name={name}
            valueType='form'
            mode={mode}
            formProps={formProps}
            onInlineEdit={formProps && formProps.onInlineEdit}
            {...rest}
          />
        </ProForm.Item>
      </GridItem>
    )
  } else {
    return (
      <GridItem {...gridItemOptions}>
        <ProForm.Item 
            style={{marginBottom: 0}}
            {...itemOptions}>
          <Field 
              mode={mode}
              valueType={valueType}
              fieldProps={fieldProps}
              onInlineEdit={formProps && formProps.onInlineEdit}
              {...rest}
            />
        </ProForm.Item>
      </GridItem>
    )
  }

}