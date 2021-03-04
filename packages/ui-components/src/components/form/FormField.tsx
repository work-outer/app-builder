
import React from "react";
import ProForm from '@ant-design/pro-form';
import type { ProFieldFCMode } from '@ant-design/pro-utils';
import { BasicLayout, FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button, Form as AntForm, Affix } from 'antd';
import { Grid, GridItem, Flex, Box } from '@chakra-ui/layout'
import ProField from '../field/ProField';
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
          <ProField 
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
    { name: 'name', type: 'text', defaultValue: 'NewField' },
    { name: 'label', type: 'text' },
    { name: 'required', type: 'boolean' },
    { 
      name: 'valueType', 
      type: 'text', 
      defaultValue: 'text',
      enum: [{
        label: "文本",
        value: "text"
      },{
        label: "选择框",
        value: "select"
      }],
      required: true
    },
    { 
      name: 'options',
      friendlyName: "选择项",
      type: 'list',
      showIf: 'options.get("valueType") === "select"',
      subFields: [
        {
          name: 'label',
          type: 'string',
          required: true
        },
        {
          name: 'value',
          type: 'string',
          required: true
        },
        {
          name: 'color',
          type: 'string'
        }
      ],
    },
    { 
      name: 'filtersFunction',
      friendlyName: "过滤器函数",
      type: 'javascript',
      showIf: 'options.get("valueType") === "select"'
    }
  ],
  canHaveChildren: false
}