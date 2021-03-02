
import React from "react";
import ProForm from '@ant-design/pro-form';
import ProField from '@ant-design/pro-field';
import type { ProFieldFCMode } from '@ant-design/pro-utils';
import { BasicLayout, FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button, Form as AntForm, Affix } from 'antd';
import { Grid, GridItem, Flex, Box } from '@chakra-ui/layout'
import Field from '../field/Field';
import { FormFieldObject } from './FormFieldObject';
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
  valueEnum?: any
};

export function FormField(props:FormFieldProps) {

  const {
    name, 
    valueType, 
    required, 
    colSpan = 1,
    label, 
    help, 
    tooltip, 
    fieldProps,
    mode = 'edit',
    formProps = {
      layout: 'vertical'
    },
    ...rest
  } = props

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
  let boxOptions:any = {}
  boxOptions.colSpan = [1, colSpan, colSpan, colSpan]

  if (valueType === 'object') {
    return (
      <GridItem 
        key={name}
        {...boxOptions}
      >
        <ProForm.Item 
          shouldUpdate
          trigger="onValuesChange"
          {...itemOptions}
        >
          <FormFieldObject
            name={name}
            valueType='object'
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
      <GridItem 
        key={name}
        {...boxOptions}
      >
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


export const FormFieldSettings = {
  name: 'Steedos:FormField',
  inputs: [
    { name: 'name', type: 'text', defaultValue:'NewField'  },
    { name: 'label', type: 'text' },
    { name: 'valueType', type: 'text', defaultValue:'text' }
  ],
  canHaveChildren: false
}